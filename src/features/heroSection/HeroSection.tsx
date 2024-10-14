import { Button } from "@/components/ui/button";

export default function HeroSection() {
  return (
    <header className="container relative mx-auto px-4 py-16 text-center">
      <h1 className="mb-6 text-5xl font-bold leading-tight md:text-6xl">
        Streamline Your <span className="text-blue-400">Paperwork</span>{" "}
        Digitally
      </h1>
      <p className="mb-8 text-xl text-gray-300 md:text-2xl">
        Effortlessly manage, sign, and store your documents in one secure
        platform.
      </p>
      <div className="flex flex-col space-y-4 sm:flex-row sm:justify-center sm:space-x-4 sm:space-y-0">
        <Button size="lg" className="text-lg">
          Get Started
        </Button>
        <Button size="lg" variant="outline" className="text-lg">
          Watch Demo
        </Button>
      </div>
    </header>
  );
}
