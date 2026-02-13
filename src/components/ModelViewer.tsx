import React, { useState, useRef, useEffect } from 'react';

type Props = {
  src: string;
  alt?: string;
  poster?: string;
  className?: string;
  exposure?: number;
  clickToLoad?: boolean;
};

const ModelViewer: React.FC<Props> = ({
  src,
  alt = '3D model',
  poster,
  className,
  exposure = 1,
  clickToLoad = false,
}) => {
  const [mounted, setMounted] = useState(!clickToLoad);
  const placeholderRef = useRef<HTMLDivElement | null>(null);

  // optional: support loading when element scrolls into view
  useEffect(() => {
    if (!clickToLoad || mounted) return;
    const el = placeholderRef.current;
    if (!el || !('IntersectionObserver' in window)) return undefined;
    const io = new IntersectionObserver((entries) => {
      entries.forEach((entry) => {
        if (entry.isIntersecting) {
          setMounted(true);
          io.disconnect();
        }
      });
    });
    io.observe(el);
    return () => io.disconnect();
  }, [clickToLoad, mounted]);

  if (!mounted) {
    return (
      <div ref={placeholderRef} className={className} style={{ width: '100%', height: 420 }}>
        {poster ? (
          <img src={poster} alt={alt} className="w-full h-full object-cover rounded" />
        ) : (
          <div className="w-full h-full bg-gray-100 rounded flex items-center justify-center">Loading preview…</div>
        )}
        <button
          type="button"
          onClick={() => setMounted(true)}
          className="absolute left-1/2 transform -translate-x-1/2 -translate-y-1/2 top-1/2 bg-primary text-white rounded-full p-3 shadow-lg"
          aria-label={`Load ${alt}`}
        >
          Load 3D
        </button>
      </div>
    );
  }

  return (
    // model-viewer is a web component; we declared its JSX type in src/types
    <model-viewer
      src={src}
      alt={alt}
      poster={poster}
      ar
      auto-rotate
      camera-controls
      loading="lazy"
      style={{ width: '100%', height: '420px' }}
      exposure={exposure}
      class={className}
    />
  );
};

export default ModelViewer;
