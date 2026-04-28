import React, { useMemo } from 'react';
import './RainDots.css';

export default function RainDots() {
  // Generate a random set of dots only once
  const dots = useMemo(() => {
    return Array.from({ length: 80 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${4 + Math.random() * 3}s`,
      size: `${2 + Math.random() * 3}px`,
      opacity: Math.random() * 0.5 + 0.2
    }));
  }, []);

  return (
    <div className="rain-container">
      {dots.map((dot) => (
        <div
          key={dot.id}
          className="rain-dot"
          style={{
            left: dot.left,
            animationDelay: dot.delay,
            animationDuration: dot.duration,
            width: dot.size,
            height: dot.size,
            opacity: dot.opacity
          }}
        />
      ))}
    </div>
  );
}