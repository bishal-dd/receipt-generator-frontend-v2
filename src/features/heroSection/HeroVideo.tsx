import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';

export function HeroVideoDialogDemo() {
  return (
    <div className="relative w-[400px] sm:w-[600px] md:w-[800px]">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/0Q_b8tT75aU"
        thumbnailSrc="/images/thumbnail.webp"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/0Q_b8tT75aU"
        thumbnailSrc="/images/thumbnail.webp"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
