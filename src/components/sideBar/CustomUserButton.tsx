'use client';

import { useClerk, useUser } from '@clerk/nextjs';
import { LogOut, User } from 'lucide-react';
import Image from 'next/image';
import { useState, useRef, useEffect } from 'react';

export default function CustomUserButton() {
  const { signOut, openUserProfile } = useClerk();
  const { user } = useUser();
  const [open, setOpen] = useState(false);
  const ref = useRef<HTMLDivElement>(null);

  // Close dropdown when tapping outside
  useEffect(() => {
    const handler = (e: Event) => {
      if (!ref.current?.contains(e.target as Node)) {
        setOpen(false);
      }
    };

    document.addEventListener('touchstart', handler);
    document.addEventListener('mousedown', handler);

    return () => {
      document.removeEventListener('touchstart', handler);
      document.removeEventListener('mousedown', handler);
    };
  }, []);

  if (!user) return null;

  return (
    <div className="relative w-full" ref={ref}>
      <button
        className="flex items-center gap-3 w-full p-2 rounded-lg hover:bg-muted transition"
        onClick={() => setOpen((v) => !v)}
      >
        <Image
          src={user.imageUrl}
          alt={user.fullName || 'User'}
          className="h-8 w-8 rounded-full"
        />
        <span className="text-sm font-medium truncate">{user.fullName}</span>
      </button>

      {open && (
        <div className="absolute bottom-14 left-0 w-full bg-background border rounded-xl shadow-xl z-[9999] p-2 space-y-1">
          <button
            onClick={() => {
              openUserProfile();
              setOpen(false);
            }}
            className="flex w-full items-center gap-2 p-2 rounded-lg hover:bg-muted text-sm"
          >
            <User size={16} />
            Manage account
          </button>

          <button
            onClick={() => signOut({ redirectUrl: '/' })}
            className="flex w-full items-center gap-2 p-2 rounded-lg hover:bg-red-50 text-red-600 text-sm"
          >
            <LogOut size={16} />
            Sign out
          </button>
        </div>
      )}
    </div>
  );
}
