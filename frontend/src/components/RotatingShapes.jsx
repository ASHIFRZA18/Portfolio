import React, { useEffect, useRef } from 'react';

const RotatingShapes = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let rotation = 0;

    const resizeCanvas = () => {
      canvas.width = canvas.offsetWidth;
      canvas.height = canvas.offsetHeight;
    };

    resizeCanvas();
    window.addEventListener('resize', resizeCanvas);

    const drawShape = (x, y, size, angle, sides, color) => {
      ctx.save();
      ctx.translate(x, y);
      ctx.rotate(angle);
      ctx.beginPath();

      for (let i = 0; i < sides; i++) {
        const pointAngle = (Math.PI * 2 * i) / sides;
        const px = Math.cos(pointAngle) * size;
        const py = Math.sin(pointAngle) * size;
        if (i === 0) {
          ctx.moveTo(px, py);
        } else {
          ctx.lineTo(px, py);
        }
      }

      ctx.closePath();
      ctx.strokeStyle = color;
      ctx.lineWidth = 2;
      ctx.stroke();
      ctx.restore();
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);

      const centerX = canvas.width / 2;
      const centerY = canvas.height / 2;

      // Draw multiple rotating shapes
      drawShape(
        centerX - 100,
        centerY - 80,
        60,
        rotation * 0.5,
        6,
        'rgba(251, 191, 36, 0.3)'
      );

      drawShape(
        centerX + 120,
        centerY + 60,
        50,
        -rotation * 0.7,
        4,
        'rgba(245, 158, 11, 0.4)'
      );

      drawShape(
        centerX + 80,
        centerY - 100,
        40,
        rotation * 0.9,
        3,
        'rgba(217, 119, 6, 0.3)'
      );

      drawShape(
        centerX - 120,
        centerY + 90,
        55,
        -rotation * 0.6,
        8,
        'rgba(251, 191, 36, 0.2)'
      );

      // Draw rings
      ctx.beginPath();
      ctx.arc(centerX + 150, centerY - 50, 35, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(245, 158, 11, 0.25)';
      ctx.lineWidth = 2;
      ctx.stroke();

      ctx.beginPath();
      ctx.arc(centerX - 140, centerY - 30, 45, 0, Math.PI * 2);
      ctx.strokeStyle = 'rgba(217, 119, 6, 0.2)';
      ctx.lineWidth = 2;
      ctx.stroke();

      rotation += 0.005;
      animationFrameId = requestAnimationFrame(animate);
    };

    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <canvas
      ref={canvasRef}
      className="absolute inset-0 w-full h-full opacity-40 pointer-events-none"
      style={{ mixBlendMode: 'screen' }}
    />
  );
};

export default RotatingShapes;