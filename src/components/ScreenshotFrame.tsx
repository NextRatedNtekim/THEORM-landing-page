// import Image, { type StaticImageData } from "next/image";

// type ScreenshotFrameProps = {
//   src: StaticImageData;
//   alt: string;
//   className?: string;
//   sizes?: string;
//   priority?: boolean;
// };

// /**
//  * Thin bezel around a real product screenshot. Use this once an
//  * ImagePlaceholder slot has a real asset -- keeps every screenshot in the
//  * page framed the same way (rounded corners, hairline border, soft shadow).
//  */
// export function ScreenshotFrame({
//   src,
//   alt,
//   className = "",
//   sizes = "(min-width: 1024px) 20vw, 45vw",
//   priority = false,
// }: ScreenshotFrameProps) {
//   return (
//     <div
//       className={`relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_20px_40px_-28px_rgba(26,33,19,0.4)] ${className}`}
//     >
//       <Image
//         src={src}
//         alt={alt}
//         fill
//         sizes={sizes}
//         priority={priority}
//         className="object-cover"
//       />
//     </div>
//   );
// }


import Image, { type StaticImageData } from "next/image";

type ScreenshotFrameProps = {
  src: StaticImageData;
  alt: string;
  className?: string;
  sizes?: string;
  priority?: boolean;
};

export function ScreenshotFrame({
  src,
  alt,
  className = "",
  sizes = "(min-width: 1024px) 20vw, 45vw",
  priority = false,
}: ScreenshotFrameProps) {
  return (
    <div
      className={`relative overflow-hidden rounded-[1.75rem] border border-line bg-surface shadow-[0_20px_40px_-28px_rgba(26,33,19,0.4)] ${className}`}
    >
      <Image src={src} alt={alt} fill sizes={sizes} priority={priority} className="object-cover" />
    </div>
  );
}