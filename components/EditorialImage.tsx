'use client';

import { useState } from 'react';
import Image, { type StaticImageData } from 'next/image';
import { Camera } from 'lucide-react';

interface EditorialImageProps {
  src: StaticImageData | string;
  alt: string;
  priority?: boolean;
  fill?: boolean;
  sizes?: string;
  className?: string;
  fallbackTitle?: string;
}

export default function EditorialImage({
  src,
  alt,
  priority = false,
  fill = true,
  sizes = '(max-width: 768px) 100vw, 50vw',
  className = 'object-cover',
  fallbackTitle,
}: EditorialImageProps) {
  const [hasError, setHasError] = useState(false);

  if (hasError) {
    return (
      <div
        role="img"
        aria-label={alt}
        className="w-full h-full flex flex-col items-center justify-center bg-zinc-100 text-zinc-500 p-6 text-center border border-zinc-200"
      >
        <Camera className="w-6 h-6 mb-3 text-zinc-400" strokeWidth={1.25} />
        <span className="font-serif text-lg text-zinc-800">
          {fallbackTitle || 'Marina Costa · Editorial'}
        </span>
        <span className="text-xs text-zinc-500 mt-1">Fotografia demonstrativa</span>
      </div>
    );
  }

  return (
    <Image
      src={src}
      alt={alt}
      fill={fill}
      priority={priority}
      sizes={sizes}
      referrerPolicy="no-referrer"
      className={className}
      onError={() => setHasError(true)}
    />
  );
}
