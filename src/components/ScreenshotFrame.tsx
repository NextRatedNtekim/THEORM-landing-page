import Image, { type StaticImageData } from "next/image";

type ScreenshotFrameProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

/**
 * Phone bezel around a real product screenshot (dark body, island, hairline
 * highlight). Every screenshot on the page is framed the same way.
 */
export function ScreenshotFrame({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 20vw, 45vw",
  priority = false,
}: ScreenshotFrameProps) {
  return (
    <div
      className={`relative rounded-[2.1rem] bg-forest p-[5px] shadow-[0_28px_50px_-28px_rgba(21,32,8,0.65),inset_0_0_0_1px_rgba(255,255,255,0.12)] ${className}`}
    >
      <div className="relative h-full w-full overflow-hidden rounded-[1.75rem] bg-surface">
        <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
      </div>
      <span
        aria-hidden="true"
        className="absolute left-1/2 top-[11px] z-10 h-[9px] w-[28%] -translate-x-1/2 rounded-full bg-forest"
      />
    </div>
  );
}
