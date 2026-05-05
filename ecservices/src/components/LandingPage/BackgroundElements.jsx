import React, { useEffect, useRef } from 'react';
import './BackgroundElements.css';

const BackgroundElements = () => {
  const canvasRef = useRef(null);

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;
    const ctx = canvas.getContext('2d');
    let animationFrameId;
    let particles = [];
    const particleCount = window.innerWidth < 768 ? 65 : 160;
    const colors = {
      node: 'rgba(61, 122, 150, 0.7)', // #3D7A96 with 0.7 opacity
      line: 'rgba(61, 122, 150, 0.5)',
    };
    const maxDistance = 190;
    let mouse = { x: null, y: null, radius: 180 };

    const handleMouseMove = (event) => {
      mouse.x = event.x;
      mouse.y = event.y;
    };

    const handleMouseOut = () => {
      mouse.x = null;
      mouse.y = null;
    };

    window.addEventListener('mousemove', handleMouseMove);
    window.addEventListener('mouseout', handleMouseOut);

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
      initParticles();
    };

    class Particle {
      constructor() {
        this.x = Math.random() * canvas.width;
        this.y = Math.random() * canvas.height;
        // Slightly faster, but still smooth floating motion (increased by 20%)
        this.vx = (Math.random() - 0.5) * 0.48;
        this.vy = (Math.random() - 0.5) * 0.48;
        // Keep nodes small and elegant
        this.radius = Math.random() * 1.5 + 1;
      }

      update() {
        // Bounce off edges smoothly
        if (this.x < 0 || this.x > canvas.width) this.vx *= -1;
        if (this.y < 0 || this.y > canvas.height) this.vy *= -1;

        // Move
        this.x += this.vx;
        this.y += this.vy;

        // Optional hover interaction: slightly push away from mouse
        if (mouse.x != null && mouse.y != null) {
          let dx = mouse.x - this.x;
          let dy = mouse.y - this.y;
          let distance = Math.sqrt(dx * dx + dy * dy);
          if (distance < mouse.radius) {
            const forceDirectionX = dx / distance;
            const forceDirectionY = dy / distance;
            const force = (mouse.radius - distance) / mouse.radius;
            const directionX = forceDirectionX * force * -1; // Push away
            const directionY = forceDirectionY * force * -1;
            this.x += directionX * 1.2;
            this.y += directionY * 1.2;
          }
        }
      }

      draw() {
        ctx.beginPath();
        ctx.arc(this.x, this.y, this.radius, 0, Math.PI * 2);
        ctx.fillStyle = colors.node;
        ctx.shadowBlur = 4;
        ctx.shadowColor = 'rgba(61, 122, 150, 0.8)';
        ctx.fill();
        ctx.shadowBlur = 0; // Reset for lines
      }
    }

    const initParticles = () => {
      particles = [];
      for (let i = 0; i < particleCount; i++) {
        particles.push(new Particle());
      }
    };

    const animate = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      for (let i = 0; i < particles.length; i++) {
        particles[i].update();
        particles[i].draw();
        for (let j = i + 1; j < particles.length; j++) {
          let dx = particles[i].x - particles[j].x;
          let dy = particles[i].y - particles[j].y;
          // Fast distance check optimization using squared distance
          let distSq = dx * dx + dy * dy;
          let maxDistSq = maxDistance * maxDistance;
          if (distSq < maxDistSq) {
            let distance = Math.sqrt(distSq);
            // Draw connecting line
            ctx.beginPath();
            ctx.strokeStyle = `rgba(80, 159, 199, ${0.5 * (1 - distance / maxDistance)})`; // Fade out line based on distance
            ctx.lineWidth = 1;
            ctx.moveTo(particles[i].x, particles[i].y);
            ctx.lineTo(particles[j].x, particles[j].y);
            ctx.stroke();
          }
        }
      }
      animationFrameId = requestAnimationFrame(animate);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();
    animate();

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('mouseout', handleMouseOut);
      cancelAnimationFrame(animationFrameId);
    };
  }, []);

  return (
    <div className="global-background">
      <canvas ref={canvasRef} className="network-canvas" />
      <div className="gradient-mesh-overlay"></div>
    </div>
  );
};

export default BackgroundElements;
