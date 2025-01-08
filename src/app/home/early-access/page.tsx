'use client';
import React from 'react';
import { BackgroundBeams } from '../../../components/ui/background-beams';
import { Input } from '@/components/ui/input';
import { Button } from '@/components/ui/button';
import { toast } from 'sonner';
import { useRouter } from 'next/navigation';

export default function Page() {
  const router = useRouter();
  const onSubmit = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    try {
      const res = await fetch('/api/subscribe', {
        method: 'POST',
        body: JSON.stringify({ email: e.currentTarget.email.value }),
        headers: { 'Content-Type': 'application/json' },
      });
      if (!res.ok) throw new Error();
      toast.success('Your Email was added');
      router.push('/home/pricing');
    } catch (error) {
      toast.error("Couldn't add email");
      console.log(error);
    }
  };

  return (
    <div className="h-[40rem] w-full rounded-md bg-neutral-950 relative flex flex-col items-center justify-center antialiased min-h-screen">
      <div className="max-w-2xl mx-auto p-4">
        <h1 className="relative z-10 text-lg md:text-7xl  bg-clip-text text-transparent bg-gradient-to-b from-neutral-200 to-neutral-600  text-center font-sans font-bold">
          Early Access List
        </h1>
        <p></p>
        <p className="text-neutral-300 max-w-lg mx-auto my-2 text-sm text-center relative z-10">
          Welcome to 2QuickPaper, you will be one of the first to get access to
          2Quickpaper, which means you get a free trial. and when it is
          offically launched you will get a discount. You will be able to use
          2quickpaper unlimited at $4.99 per month. You can pay now to solodify
          your spot.
        </p>
        <div className="flex flex-col items-center relative z-10 ">
          <form onSubmit={onSubmit} className=" p-0 m-0 w-full ">
            <Input
              required
              name="email"
              type="email"
              placeholder="example@gmail.com"
              className="rounded-lg border text-white p-5 border-neutral-800 focus:ring-2 focus:ring-teal-500  w-full relative z-10 mt-4  bg-neutral-950 placeholder:text-neutral-500"
            />
            <div className="flex flex-col items-center">
              <Button
                className="mt-4 px-8 py-2 text-lg"
                variant={'outline'}
                type="submit"
              >
                Apply
              </Button>
            </div>
          </form>
        </div>
      </div>
      <BackgroundBeams />
    </div>
  );
}
