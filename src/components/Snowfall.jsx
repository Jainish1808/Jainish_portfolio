import React from 'react';
import './Snowfall.css';

export default function Snowfall() {
  const snowflakes = Array.from({ length: 50 }, (_, i) => i);

  return (
    <div className="snowfall-container">
      {snowflakes.map((i) => (
        <div
          key={i}
          className="snowflake"
          style={{
            left: `${Math.random() * 100}%`,
            animationDelay: `${Math.random() * 10}s`,
            animationDuration: `${10 + Math.random() * 20}s`,
            opacity: Math.random() * 0.6 + 0.3,
            fontSize: `${Math.random() * 10 + 10}px`,
          }}
        >
          ❄
        </div>
      ))}
    </div>
  );
}
