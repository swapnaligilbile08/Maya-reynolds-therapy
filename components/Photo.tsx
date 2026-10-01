"use client";
import { useState } from "react";

// Shows /public/images/<name>.jpg. If the file is missing, you get a soft gradient instead of a broken image.
export default function Photo({ name, alt, className = "", pos = "object-center" }: { name: string; alt: string; className?: string; pos?: string }) {
  const [failed, setFailed] = useState(false);
  return (
    <div data-reveal className={`photo relative overflow-hidden bg-gradient-to-br from-tan/40 via-cream to-sage/30 ${className}`}>
      {!failed && (
        // eslint-disable-next-line @next/next/no-img-element
        <img src={`/images/${name}.jpg`} alt={alt} loading="lazy" onError={() => setFailed(true)} className={`absolute inset-0 h-full w-full object-cover ${pos}`} />
      )}
    </div>
  );
}
