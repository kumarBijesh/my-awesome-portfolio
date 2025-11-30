import React, { Suspense, useEffect, useRef, useState } from "react";
import { Canvas } from "@react-three/fiber";
import { OrbitControls, Environment, useGLTF } from "@react-three/drei";

type ThreeModelProps = {
  src?: string;
  autoRotate?: boolean;
  /** If true, require a user click to load (helps mobile) */
  clickToLoad?: boolean;
};

function GLTFModel({ src = "/models/my-model.glb" }: { src?: string }) {
  // useGLTF returns a cached gltf; typing as any for simplicity
  const gltf: any = useGLTF(src, true);
  return <primitive object={gltf.scene} />;
}

export default function ThreeModel({ src = "/models/my-model.glb", autoRotate = false, clickToLoad = false }: ThreeModelProps) {
  const containerRef = useRef<HTMLDivElement | null>(null);
  const [visible, setVisible] = useState(false);
  const [userLoaded, setUserLoaded] = useState(!clickToLoad);

  useEffect(() => {
    if (clickToLoad) return; // do not auto-observe when clickToLoad is requested
    const el = containerRef.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setVisible(true);
            obs.disconnect();
          }
        });
      },
      { root: null, rootMargin: "200px", threshold: 0.15 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [clickToLoad]);

  const shouldRender = visible && userLoaded;

  return (
    <div ref={containerRef} className="w-full h-[420px] sm:h-[360px] md:h-[420px] lg:h-[480px]">
      {!shouldRender ? (
        <div className="w-full h-full flex items-center justify-center bg-card rounded-md">
          {clickToLoad ? (
            <button
              onClick={() => setUserLoaded(true)}
              className="px-4 py-2 bg-accent text-white rounded-md"
            >
              Load 3D Model
            </button>
          ) : (
            <div className="flex flex-col items-center gap-3">
              <svg className="w-8 h-8 animate-spin text-accent" viewBox="0 0 24 24" fill="none" xmlns="http://www.w3.org/2000/svg">
                <circle cx="12" cy="12" r="10" stroke="currentColor" strokeWidth="4" strokeOpacity="0.2" />
                <path d="M22 12a10 10 0 0 1-10 10" stroke="currentColor" strokeWidth="4" strokeLinecap="round" />
              </svg>
              <span className="text-sm text-muted-foreground">Loading 3D viewer…</span>
            </div>
          )}
        </div>
      ) : (
        <Canvas camera={{ position: [0, 1.5, 4], fov: 45 }}>
          <ambientLight intensity={0.6} />
          <directionalLight position={[10, 10, 5]} intensity={0.8} />
          <Suspense fallback={null}>
            <GLTFModel src={src} />
            <Environment preset="studio" />
          </Suspense>
          <OrbitControls enablePan={false} enableZoom={true} autoRotate={autoRotate} />
        </Canvas>
      )}
    </div>
  );
}

// Tip: call useGLTF.preload('/models/my-model.glb') somewhere (e.g., on hover) to warm cache
