import { useEffect, useRef } from "react";

const Snowfall = () => {
  const canvasRef = useRef<HTMLCanvasElement | null>(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    let ratio = window.devicePixelRatio || 1;
    let width = window.innerWidth;
    let height = window.innerHeight;

    type Particle = {
      x: number;
      y: number;
      radius: number;
      speed: number;
      opacity: number;
      angle: number;
      angularSpeed: number;
    };

    let particles: Particle[] = [];
    let rafId = 0;

    function fitCanvasAndReset() {
      width = window.innerWidth;
      height = window.innerHeight;
      canvas.width = Math.floor(width * ratio);
      canvas.height = Math.floor(height * ratio);
      canvas.style.width = `${width}px`;
      canvas.style.height = `${height}px`;
      ctx.setTransform(ratio, 0, 0, ratio, 0, 0);

      const particleCount = Math.max(60, Math.floor((width * height) / 9000));
      particles = Array.from({ length: particleCount }).map(() => ({
        x: Math.random() * width,
        y: Math.random() * height,
        radius: Math.random() * 2 + 0.6,
        speed: Math.random() * 0.8 + 0.3,
        opacity: Math.random() * 0.6 + 0.2,
        angle: Math.random() * Math.PI * 2,
        angularSpeed: (Math.random() - 0.5) * 0.02,
      }));
    }

    fitCanvasAndReset();
    window.addEventListener("resize", fitCanvasAndReset);

    function draw() {
      ctx.clearRect(0, 0, width, height);
      ctx.fillStyle = "#ffffff";
      for (const p of particles) {
        p.y += p.speed;
        p.x += Math.sin(p.angle) * 0.6;
        p.angle += p.angularSpeed;

        if (p.y - p.radius > height) {
          p.y = -p.radius;
          p.x = Math.random() * width;
        }
        if (p.x > width + p.radius) p.x = -p.radius;
        if (p.x < -p.radius) p.x = width + p.radius;

        ctx.globalAlpha = p.opacity * 0.9;
        ctx.beginPath();
        ctx.arc(p.x, p.y, p.radius, 0, Math.PI * 2);
        ctx.fill();
      }
      ctx.globalAlpha = 1;
      rafId = requestAnimationFrame(draw);
    }

    draw();

    return () => {
      cancelAnimationFrame(rafId);
      window.removeEventListener("resize", fitCanvasAndReset);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="pointer-events-none fixed inset-0 -z-10"
      aria-hidden
    />
  );
};

export default Snowfall;
