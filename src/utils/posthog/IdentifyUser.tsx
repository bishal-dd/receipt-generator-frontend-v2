import { useEffect } from 'react';
import { useUser } from '@clerk/nextjs';
import posthog from 'posthog-js';

export function PostHogIdentify() {
  const { user } = useUser();

  useEffect(() => {
    if (!user) {
      posthog.reset(); // logout or not loaded yet
      return;
    }

    const email = user.primaryEmailAddress?.emailAddress;

    if (email) {
      posthog.identify(user.id, {
        email,
        name: user.fullName,
      });
    }
  }, [user]);

  return null;
}
