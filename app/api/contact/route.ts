import { NextRequest, NextResponse } from 'next/server';
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: NextRequest) {
    try {
        const { name, email, message } = await request.json();

        // Basic validation
        if (!name || !email || !message) {
            return NextResponse.json(
                { error: 'All fields are required' },
                { status: 400 }
            );
        }

        // Email validation
        const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        if (!emailRegex.test(email)) {
            return NextResponse.json(
                { error: 'Invalid email format' },
                { status: 400 }
            );
        }

        // Send email using Resend
        try {
            const emailData = await resend.emails.send({
                from: process.env.FROM_EMAIL || 'Acme <onboarding@resend.dev>',
                to: process.env.TO_EMAIL || 'mtaha.khan2004@gmail.com',
                subject: `New Contact Form Message from ${name}`,
                html: `
                    <div style="font-family: Arial, sans-serif; max-width: 600px; margin: 0 auto; padding: 20px;">
                        <h2 style="color: #333; border-bottom: 3px solid #6366f1; padding-bottom: 10px;">
                            New Contact Form Submission
                        </h2>
                        
                        <div style="background: #f8fafc; padding: 20px; border-radius: 8px; margin: 20px 0;">
                            <h3 style="color: #6366f1; margin-top: 0;">Contact Details:</h3>
                            <p><strong>Name:</strong> ${name}</p>
                            <p><strong>Email:</strong> <a href="mailto:${email}" style="color: #6366f1;">${email}</a></p>
                        </div>
                        
                        <div style="background: #fff; border: 1px solid #e2e8f0; padding: 20px; border-radius: 8px;">
                            <h3 style="color: #333; margin-top: 0;">Message:</h3>
                            <p style="line-height: 1.6; color: #555;">${message.replace(/\n/g, '<br>')}</p>
                        </div>
                        
                        <div style="margin-top: 20px; padding: 15px; background: #fef3c7; border-radius: 8px; border-left: 4px solid #f59e0b;">
                            <p style="margin: 0; color: #92400e;">
                                <strong>📧 Reply to:</strong> ${email}<br>
                                <strong>📅 Received:</strong> ${new Date().toLocaleString()}
                            </p>
                        </div>
                    </div>
                `,
                replyTo: email, // This allows you to reply directly to the sender
            });

            console.log('Email sent successfully:', emailData);

            return NextResponse.json(
                { message: 'Email sent successfully' },
                { status: 200 }
            );

        } catch (emailError) {
            console.error('Error sending email:', emailError);

            // Log the submission even if email fails
            console.log('Contact form submission (email failed):', {
                name,
                email,
                message,
                timestamp: new Date().toISOString(),
                error: emailError
            });

            return NextResponse.json(
                { error: 'Failed to send email. Please try again later.' },
                { status: 500 }
            );
        }

    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
