import { ImageIcon } from "lucide-react";

type ImagePlaceholderProps = {
  label: string;
  className?: string;
};

/**
 * Drop-in placeholder for real screenshots / photography.
 * Swap for a <Image src="..." fill /> once assets are ready --
 * the label describes exactly what should go in each slot.
 */
export function ImagePlaceholder({ label, className = "" }: ImagePlaceholderProps) {
  return (
    <div
      className={`flex flex-col items-center justify-center gap-2 rounded-2xl border border-dashed border-line-strong bg-paper-deep/60 p-6 text-center ${className}`}
      role="img"
      aria-label={label}
    >
      <ImageIcon className="h-6 w-6 text-ink-faint" strokeWidth={1.5} aria-hidden="true" />
      <span className="text-xs font-medium leading-snug text-ink-faint">{label}</span>
    </div>
  );
}
