import { useState, useRef, useEffect } from "react";

interface OptimizedImageProps {
  src: string;
  alt: string;
  className?: string;
  width?: number;
  height?: number;
  priority?: boolean;
  draggable?: boolean;
}

export function OptimizedImage({
  src,
  alt,
  className = "",
  width,
  height,
  priority = false,
  draggable = true,
}: OptimizedImageProps) {
  const [isLoaded, setIsLoaded] = useState(false);
  const [isInView, setIsInView] = useState(priority);
  const imgRef = useRef<HTMLImageElement>(null);

  // Get WebP version path
  const webpSrc = src.replace(/\.(png|jpg|jpeg)$/i, ".webp");
  const hasWebp = src !== webpSrc;

  useEffect(() => {
    if (priority || isInView) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsInView(true);
          observer.disconnect();
        }
      },
      { rootMargin: "200px" }
    );

    if (imgRef.current) {
      observer.observe(imgRef.current);
    }

    return () => observer.disconnect();
  }, [priority, isInView]);

  return (
    <picture>
      {hasWebp && isInView && <source srcSet={webpSrc} type="image/webp" />}
      <img
        ref={imgRef}
        src={isInView ? src : undefined}
        alt={alt}
        className={`transition-opacity duration-300 ${isLoaded ? "opacity-100" : "opacity-0"} ${className}`}
        width={width}
        height={height}
        loading={priority ? "eager" : "lazy"}
        decoding={priority ? "sync" : "async"}
        draggable={draggable}
        onLoad={() => setIsLoaded(true)}
      />
    </picture>
  );
}
