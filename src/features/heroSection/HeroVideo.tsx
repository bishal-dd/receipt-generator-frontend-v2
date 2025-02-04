import { HeroVideoDialog } from '@/components/ui/hero-video-dialog';

export function HeroVideoDialogDemo() {
  return (
    <div className="relative w-[800px]">
      <HeroVideoDialog
        className="dark:hidden block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/sFm1EwpYI_Q"
        thumbnailSrc="/images/thumbnail.webp"
        thumbnailAlt="Hero Video"
      />
      <HeroVideoDialog
        className="hidden dark:block"
        animationStyle="from-center"
        videoSrc="https://www.youtube.com/embed/sFm1EwpYI_Q"
        thumbnailSrc="/images/thumbnail.webp"
        thumbnailAlt="Hero Video"
      />
    </div>
  );
}
