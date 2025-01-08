import { Resend } from 'resend';

const resend = new Resend(process.env.RESEND_API_KEY);

export async function POST(request: Request) {
  try {
    const { email } = await request.json();
    const contact = await resend.contacts.create({
      email,
      unsubscribed: false,
      audienceId: 'e9ccfea8-841a-45b3-87b9-61be55e0cbc3',
    });
    return Response.json(contact);
  } catch (error) {
    return Response.json({ error }, { status: 500 });
  }
}
