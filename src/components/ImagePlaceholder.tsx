import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
  /** "default" for light surfaces, "inverted" for use on the dark primary CTA band */
  tone?: "default" | "inverted";
};

/**
 * Drop-in placeholder for real screenshots / photography.
 * Swap for a <Image src="..." fill /> once assets are ready --
 * the label describes exactly what should go in each slot.
 */
export function ImagePlaceholder({ label, className = "", tone = "default" }: ImagePlaceholderProps) {
  const toneClasses =
    tone === "inverted"
      ? "border-white/30 bg-white/10 text-white"
      : "border-line-strong bg-paper-deep/60 text-ink-faint";

  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed p-6 text-center ${toneClasses} ${className}`}
      role="img"
      aria-label={label}
    >
      <ImageIcon className="h-6 w-6" strokeWidth={1.5} aria-hidden="true" />
      <span className="text-xs font-medium leading-snug">{label}</span>
    </div>
  );
}
