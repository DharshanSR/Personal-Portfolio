// /pages/api/contact.ts (or the appropriate path in your project)

import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define the validation schema using Zod
const contactFormSchema = z.object({
    firstName: z.string()
        .min(1, { message: 'First name is required' })
        .max(10, { message: 'First name must be at most 10 characters' })
        .regex(/^[A-Za-z]+$/, { message: 'First name must contain only letters' }),
    lastName: z.string()
        .min(1, { message: 'Last name is required' })
        .max(10, { message: 'Last name must be at most 10 characters' })
        .regex(/^[A-Za-z]+$/, { message: 'Last name must contain only letters' }),
    email: z.string()
        .min(1, { message: 'Email is required' })
        .email({ message: 'Must be a valid email' }),
    mobile: z.string()
        .min(1, { message: 'Mobile number is required' })
        .regex(/^\+?[1-9]\d{10,15}$/, { message: 'Must be a valid international mobile number' }),
    message: z.string()
        .min(10, { message: 'Message must be at least 10 characters' })
        .max(1000, { message: 'Message must be at most 1000 characters' }),
});

// Named export for POST method
export async function POST(req: Request) {
    try {
        // Parse and validate the incoming request JSON body
        const data = await req.json();
        const parsedData = contactFormSchema.parse(data);

        const { firstName, lastName, email, message, mobile } = parsedData;

        // Nodemailer transport configuration (use Gmail with App Password for authentication)
        const transporter = nodemailer.createTransport({
            service: 'Gmail',
            auth: {
                user: process.env.GMAIL_USER, // Gmail address
                pass: process.env.GMAIL_PASS, // Gmail App Password
            },
        });

        // Create a unique subject with a timestamp
        const timestamp = new Date().toISOString();
        const subject = `New Contact Form Submission from ${firstName} ${lastName} on ${timestamp}`;

        // Styled HTML email content including the mobile number
        const htmlContent = `
            <div style="font-family: Arial, sans-serif; line-height: 1.6; padding: 20px; border: 1px solid #ccc; border-radius: 10px; background-color: #e0f7fa; max-width: 600px; margin: auto;">
              <h2 style="color: #4A90E2; text-align: center;">👋 New Contact Form Submission</h2>
              <hr style="border: 1px solid #4A90E2;" />
              <div style="margin: 20px 0; text-align: center;">
                <p style="font-size: 18px; margin: 0;"><strong>First Name:</strong> ${firstName}</p>
                <p style="font-size: 18px; margin: 0;"><strong>Last Name:</strong> ${lastName}</p>
                <p style="font-size: 18px; margin: 0;"><strong>Email:</strong> ${email}</p>
                <p style="font-size: 18px; margin: 0;"><strong>Mobile:</strong> ${mobile}</p>
                <p style="font-size: 18px; margin: 0;"><strong>Message:</strong></p>
                <p style="background-color: #ffffff; padding: 10px; border-radius: 5px; box-shadow: 0 2px 5px rgba(0,0,0,0.1); max-width: 500px; margin: auto;">${message}</p>
              </div>
              <footer style="text-align: center; margin-top: 20px;">
                <p style="color: #888888; font-size: 14px;">This email was sent from your contact form on your website.</p>
              </footer>
            </div>
        `;

        // Send the email using the transporter
        await transporter.sendMail({
            from: `"${firstName} ${lastName}" <${email}>`, // The sender's name and email address
            to: process.env.RECIPIENT_EMAIL, // The recipient's email address
            subject: subject, // The subject of the email
            text: message, // Plain text version of the message
            html: htmlContent, // HTML version of the message
        });

        // Respond with a success message
        return new Response(JSON.stringify({ message: 'Email sent successfully!' }), { status: 200 });
    } catch (err) {
        if (err instanceof z.ZodError) {
            // Return validation errors
            const errors = err.errors.map(e => ({ field: e.path[0], message: e.message }));
            return new Response(JSON.stringify({ message: 'Validation Failed', errors }), { status: 400 });
        }

        // Log the error and return an error response
        console.error('Error sending email:', err);
        return new Response(JSON.stringify({ message: 'Internal Server Error' }), { status: 500 });
    }
}
