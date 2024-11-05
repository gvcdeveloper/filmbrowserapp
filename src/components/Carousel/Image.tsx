import { lazy } from 'react';

interface ImageProps {
  src: string;
  alt: string;
  className?: string;
}

const Image = lazy(() =>
  Promise.resolve({
    default: ({ src, alt, className }: ImageProps) => (
      <img src={src} alt={alt} loading="lazy" className={className} />
    ),
  })
);

export default Image;
