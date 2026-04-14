import React, { useEffect, useState } from 'react';
import './BackgroundElements.css';

const BackgroundElements = ({ color = '#519fc6', dotCount = 50, diamondCount = 55 }) => {
  const [dots, setDots] = useState([]);

  useEffect(() => {
    // Generate random positions for dots
    const newDots = Array.from({ length: dotCount }).map((_, i) => ({
      id: `dot-${i}`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * -20}s`,
      duration: `${3 + Math.random() * 4}s`,
      size: `${Math.random() * 4 + 2}px`,
      opacity: Math.random() * 0.5 + 0.3,
      moveX: `${(Math.random() - 0.5) * 200}px`,
      moveY: `${(Math.random() - 0.5) * 200}px`,
    }));

    const newDiamonds = Array.from({ length: diamondCount }).map((_, i) => ({
      id: `diamond-${i}`,
      top: `${Math.random() * 100}%`,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 5}s`,
      duration: `${5 + Math.random() * 8}s`,
      size: `${Math.random() * 15 + 10}px`,
      rotation: `${Math.random() * 360}deg`,
      moveX: `${(Math.random() - 0.5) * 150}px`,
      moveY: `${(Math.random() - 0.5) * 150}px`,
    }));
    
    setDots([...newDots, ...newDiamonds]);
  }, [dotCount, diamondCount]);

  return (
    <div className="global-background">

      {/* Animated gradient overlays */}
      <div className="gradient-mesh-overlay"></div>
      
      {/* Animated Elements */}
      {dots.map((item) => (
        <div
          key={item.id}
          className={item.id.includes('diamond') ? 'bg-diamond' : 'bg-dot'}
          style={{
            top: item.top,
            left: item.left,
            width: item.size,
            height: item.size,
            animationDelay: item.delay,
            animationDuration: item.duration,
            opacity: item.opacity,
            '--rotation': item.rotation,
            '--move-x': item.moveX,
            '--move-y': item.moveY,
            '--bg-color': color,
            ...(item.id.includes('diamond') ? { borderRadius: '50%', clipPath: 'none' } : {})
          }}
        ></div>
      ))}

      {/* Glowing Laser Streaks */}
      <div className="bg-streak streak-1"></div>
      <div className="bg-streak streak-2"></div>
      <div className="bg-streak streak-3"></div>

      {/* Floating Blobs for depth */}
      <div className="bg-blob blob-1"></div>
      <div className="bg-blob blob-2"></div>
      <div className="bg-blob blob-3"></div>
    </div>
  );
};

export default BackgroundElements;
