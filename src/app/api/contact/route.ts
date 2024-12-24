// /pages/api/contact.ts (or the appropriate path in your project)

import nodemailer from 'nodemailer';
import { z } from 'zod';

// Define the validation schema using Zod
const contactFormSchema = z.object({
    firstName: z.string()
        .min(1, { message: 'First name is required' })
        .max(50, { message: 'First name must be at most 50 characters' })
        .regex(/^[A-Za-z]+$/, { message: 'First name must contain only letters' }),
    lastName: z.string()
        .min(1, { message: 'Last name is required' })
        .max(50, { message: 'Last name must be at most 50 characters' })
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
        const subject = `New Message from ${firstName} ${lastName} on ${timestamp}`;

        // Styled HTML email content including the mobile number
        const htmlContent = `
            <div style="font-family: 'Helvetica Neue', Helvetica, Arial, sans-serif; line-height: 1.6; padding: 30px; background-color: #f8f9fa; max-width: 650px; margin: 0 auto; border-radius: 8px; border: 1px solid #e1e1e1;">
                <header style="text-align: center; padding-bottom: 20px; border-bottom: 2px solid #007bff;">
                    <h1 style="color: #007bff; font-size: 28px; margin: 0; font-weight: 600;">New Contact Form Submission</h1>
                    <p style="color: #555; font-size: 16px; margin: 10px 0;">You have a new submission from your contact form.</p>
                </header>

                <section style="padding-top: 30px;">
                    <h3 style="color: #333; font-size: 22px; font-weight: 500; margin-bottom: 10px;">Contact Details</h3>
                    <table style="width: 100%; margin-bottom: 20px;">
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333; width: 30%;">First Name:</td>
                            <td style="padding: 8px; color: #555;">${firstName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333; width: 30%;">Last Name:</td>
                            <td style="padding: 8px; color: #555;">${lastName}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333; width: 30%;">Email:</td>
                            <td style="padding: 8px; color: #555;">${email}</td>
                        </tr>
                        <tr>
                            <td style="padding: 8px; font-weight: bold; color: #333; width: 30%;">Mobile:</td>
                            <td style="padding: 8px; color: #555;">${mobile}</td>
                        </tr>
                    </table>
                </section>

                <section style="padding-top: 20px;">
                    <h3 style="color: #333; font-size: 22px; font-weight: 500; margin-bottom: 10px;">Message</h3>
                    <p style="background-color: #ffffff; padding: 15px; border-radius: 5px; box-shadow: 0 3px 6px rgba(0,0,0,0.1); color: #555;">${message}</p>
                </section>

                <footer style="padding-top: 30px; text-align: center; border-top: 2px solid #e1e1e1; margin-top: 20px;">
                    <p style="color: #888; font-size: 14px;">This email was sent from the contact form on your website. If you didn’t request this submission, please disregard this message.</p>
                    <p style="color: #888; font-size: 14px;">© 2024 Ravindran Dharshan</p>
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
        return new Response(JSON.stringify({ message: 'Internal Server Error', error: err.message }), { status: 500 });
    }
}
