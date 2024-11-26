// app/api/contact/route.ts
import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(req: Request) {
  try {
    const { name, email, message } = await req.json();
    
    await resend.emails.send({
      from: 'onboarding@resend.dev', // Use your verified domain or Resend's
      to: 'mattkettelkamp@gmail.com', // Your email where you want to receive messages
      subject: `New Contact Form Message on website from ${name}`,
      html: `
        <h2>New Contact Form Submission</h2>
        <p><strong>From:</strong> ${name}</p>
        <p><strong>Email:</strong> ${email}</p>
        <p><strong>Message:</strong></p>
        <p>${message}</p>
      `
    });

    return Response.json({ success: true });
  } catch (error) {
    return Response.json({ error: 'Failed to send email' }, { status: 500 });
  }
}