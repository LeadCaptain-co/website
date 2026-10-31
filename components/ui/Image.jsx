import NextImage from "next/image";
import { cn } from "@/lib/utils";

/**
 * Drop-in for the original Wix/Base44 <Image>: a sized, positioned wrapper that
 * the picture fills. The wrapper takes the sizing/effect classes (opacity,
 * mix-blend, hover scale...), exactly as the original did. Backed by next/image,
 * so images are resized, served as WebP/AVIF and lazy-loaded.
 */
export function Image({ src, alt = "", fittingType = "fill", className, priority = false, sizes = "100vw" }) {
  return (
    <span className={cn("inline-block relative", className)}>
      <NextImage
        src={src}
        alt={alt}
        fill
        sizes={sizes}
        priority={priority}
        className={fittingType === "fit" ? "object-contain" : "object-cover"}
      />
    </span>
  );
}
