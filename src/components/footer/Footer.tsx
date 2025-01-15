import Link from 'next/link';

export function Footer() {
  return (
    <footer className="bg-black/[0.96] antialiased bg-grid-white/[0.02] border-t border-t-slate-200 dark:border-t-slate-700">
      <div className="container px-4 py-8 mx-auto sm:px-6 lg:px-8">
        <div className="grid grid-cols-2 gap-8 md:grid-cols-4">
          <div>
            <h3 className="text-base text-neutral-300 font-semibold  tracking-wider uppercase">
              Product
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/home/feature"
                  className="text-base text-neutral-300 hover:text-neutral-100"
                >
                  Features
                </Link>
              </li>
              <li>
                <Link
                  href="/home/pricing"
                  className="text-base text-neutral-300 hover:text-neutral-100"
                >
                  Pricing
                </Link>
              </li>
            </ul>
          </div>
          <div>
            <h3 className=" font-semibold text-base text-neutral-300 tracking-wider uppercase">
              Support
            </h3>
            <ul className="mt-4 space-y-4">
              <li>
                <Link
                  href="/home/contact"
                  className="text-base text-neutral-300 hover:text-neutral-100"
                >
                  Contact
                </Link>
              </li>
              <li>
                <Link
                  href="/home/privacy-policy"
                  className="text-base text-neutral-300 hover:text-neutral-100"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/home/terms-and-conditions"
                  className="text-base text-neutral-300 hover:text-neutral-100"
                >
                  Terms and Conditions
                </Link>
              </li>
              <li>
                <Link
                  href="/home/refund-policy"
                  className="text-base text-neutral-300 hover:text-neutral-100"
                >
                  Refund Policy
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="mt-8 border-t border-slate-200 dark:border-slate-700 pt-8 md:flex md:items-center md:justify-between">
          <div className="flex space-x-6 md:order-2">
            {/* Add your social media links here */}
          </div>
          <p className="mt-8 text-base text-neutral-300 md:mt-0 md:order-1">
            &copy; {new Date().getFullYear()}{' '}
            <a href="https://www.lightwebx.com/" target="_blank">
              <u>Light Webx</u>
            </a>{' '}
            All rights reserved.
          </p>
        </div>
      </div>
    </footer>
  );
}
