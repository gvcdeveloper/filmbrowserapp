interface ImageProps {
  src: string;
  alt: string;
  setLoading: (value: boolean) => void;
}

export const Image = ({ src, alt, setLoading }: ImageProps) => {
  return (
    <div>
      <img
        src={src}
        alt={alt}
        loading="lazy"
        onLoad={() => setLoading(false)}
      />
    </div>
  );
};

export default Image;
