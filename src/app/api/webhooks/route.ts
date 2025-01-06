import { Webhook } from 'svix';
import { headers } from 'next/headers';
import { WebhookEvent, OrganizationJSON } from '@clerk/nextjs/server';

const NEXT_PUBLIC_APP_BACKEND_URI =
  process.env.NEXT_PUBLIC_APP_BACKEND_URI || 'http://localhost:8080';
export async function POST(req: Request) {
  const SIGNING_SECRET = process.env.SIGNING_SECRET;

  if (!SIGNING_SECRET) {
    throw new Error(
      'Error: Please add SIGNING_SECRET from Clerk Dashboard to .env or .env.local'
    );
  }

  // Create new Svix instance with secret
  const wh = new Webhook(SIGNING_SECRET);

  // Get headers
  const headerPayload = await headers();
  const svix_id = headerPayload.get('svix-id');
  const svix_timestamp = headerPayload.get('svix-timestamp');
  const svix_signature = headerPayload.get('svix-signature');

  // If there are no headers, error out
  if (!svix_id || !svix_timestamp || !svix_signature) {
    return new Response('Error: Missing Svix headers', {
      status: 400,
    });
  }

  // Get body
  const payload = await req.json();
  const body = JSON.stringify(payload);

  let evt: WebhookEvent;

  // Verify payload with headers
  try {
    evt = wh.verify(body, {
      'svix-id': svix_id,
      'svix-timestamp': svix_timestamp,
      'svix-signature': svix_signature,
    }) as WebhookEvent;
  } catch (err) {
    throw new Error('Error: Verification error', { cause: err });
  }

  const organization = evt.data as OrganizationJSON;

  try {
    const response = await fetch(`${NEXT_PUBLIC_APP_BACKEND_URI}/profile`, {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify({
        userId: organization.created_by,
      }),
    });

    if (!response.ok) {
      throw new Error(`HTTP error! status: ${response.status}`);
    }
  } catch (error) {
    throw new Error('Error: Failed to create profile', { cause: error });
  }

  return new Response('Webhook processed successfully', { status: 200 });
}
