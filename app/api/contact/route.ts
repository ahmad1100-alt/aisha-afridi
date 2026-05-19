import { NextResponse } from 'next/server';

interface ContactPayload {
  name?: string;
  email?: string;
  phone?: string;
  inquiryType?: string;
  subject?: string;
  message?: string;
}

const requiredEnv = ['RESEND_API_KEY', 'BOOKING_INBOX'] as const;

export async function POST(request: Request) {
  const payload = (await request.json()) as ContactPayload;
  const missingEnv = requiredEnv.filter((key) => !process.env[key]);

  if (missingEnv.length > 0) {
    return NextResponse.json(
      {
        message:
          'Management email is not configured yet. Set RESEND_API_KEY and BOOKING_INBOX to enable direct booking inquiries.',
      },
      { status: 503 }
    );
  }

  if (!payload.name || !payload.email || !payload.message) {
    return NextResponse.json(
      { message: 'Please include your name, email, and message.' },
      { status: 400 }
    );
  }

  const subject = payload.subject || `${payload.inquiryType || 'Booking'} inquiry for Aisha Afridi`;
  const body = [
    `Name: ${payload.name}`,
    `Email: ${payload.email}`,
    `Phone / WhatsApp: ${payload.phone || 'Not provided'}`,
    `Inquiry Type: ${payload.inquiryType || 'Not provided'}`,
    '',
    payload.message,
  ].join('\n');

  const response = await fetch('https://api.resend.com/emails', {
    method: 'POST',
    headers: {
      Authorization: `Bearer ${process.env.RESEND_API_KEY}`,
      'Content-Type': 'application/json',
    },
    body: JSON.stringify({
      from: process.env.CONTACT_FROM || 'Aisha Afridi Portfolio <onboarding@resend.dev>',
      to: [process.env.BOOKING_INBOX],
      reply_to: payload.email,
      subject,
      text: body,
    }),
  });

  if (!response.ok) {
    return NextResponse.json(
      { message: 'The inquiry could not be sent right now. Please try again later.' },
      { status: 502 }
    );
  }

  return NextResponse.json({ ok: true });
}
