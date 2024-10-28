interface ImageProps {
  src: string;
  alt: string;
  setLoading: (value: boolean) => void;
}

export const Image = ({ src, alt, setLoading }: ImageProps) => {
  return (
    <img src={src} alt={alt} loading="lazy" onLoad={() => setLoading(false)} />
  );
};

export default Image;
