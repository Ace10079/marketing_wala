// src/components/CameraCursor.jsx
import React, { useEffect, useState } from 'react';
import { Camera } from 'lucide-react'; // you can also use other icon libraries or an image

const CameraCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);
    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  return (
    <div
      style={{
        position: 'fixed',
        left: position.x + 15,
        top: position.y + 15,
        pointerEvents: 'none',
        zIndex: 9999,
        transition: 'transform 0.05s linear',
      }}
    >
      <Camera size={24} color="black" />
    </div>
  );
};

export default CameraCursor;
