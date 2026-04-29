import React, { useMemo } from 'react';
import './RainDots.css';

const snowflakes = ['❄', '❅', '❆'];

export default function RainDots() {
  // Generate a random set of snowflakes only once
  const dots = useMemo(() => {
    return Array.from({ length: 60 }, (_, i) => ({
      id: i,
      left: `${Math.random() * 100}%`,
      delay: `${Math.random() * 8}s`,
      duration: `${5 + Math.random() * 5}s`,
      size: `${8 + Math.random() * 8}px`,
      opacity: Math.random() * 0.6 + 0.2,
      char: snowflakes[Math.floor(Math.random() * snowflakes.length)]
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
            fontSize: dot.size,
            opacity: dot.opacity
          }}
        >
          {dot.char}
        </div>
      ))}
    </div>
  );
}