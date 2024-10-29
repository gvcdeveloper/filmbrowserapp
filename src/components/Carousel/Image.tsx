interface ImageProps {
  src: string;
  alt: string;
  setLoading: (value: boolean) => void;
  className?: string;
}

export const Image = ({ src, alt, setLoading, className }: ImageProps) => {
  return (
    <img
      src={src}
      alt={alt}
      loading="lazy"
      onLoad={() => setLoading(false)}
      className={className}
    />
  );
};

export default Image;
