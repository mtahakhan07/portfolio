import { NextRequest, NextResponse } from 'next/server';

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

        // Here you can add your email sending logic
        // For example, using nodemailer, SendGrid, or any other service

        console.log('Contact form submission:', {
            name,
            email,
            message,
            timestamp: new Date().toISOString()
        });

        // Simulate email sending success
        // Replace this with actual email sending logic
        await new Promise(resolve => setTimeout(resolve, 1000));

        return NextResponse.json(
            { message: 'Email sent successfully' },
            { status: 200 }
        );

    } catch (error) {
        console.error('Error processing contact form:', error);
        return NextResponse.json(
            { error: 'Internal server error' },
            { status: 500 }
        );
    }
}
