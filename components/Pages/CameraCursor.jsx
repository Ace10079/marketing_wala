import React, { useEffect, useState } from 'react';

const CameraCursor = () => {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const checkIfMobile = () => {
      setIsMobile(window.innerWidth <= 768); // adjust as needed
    };

    checkIfMobile(); // initial check
    window.addEventListener('resize', checkIfMobile); // update on resize

    const handleMouseMove = (e) => {
      setPosition({ x: e.clientX, y: e.clientY });
    };

    if (!isMobile) {
      window.addEventListener('mousemove', handleMouseMove);
    }

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
      window.removeEventListener('resize', checkIfMobile);
    };
  }, [isMobile]);

  if (isMobile) return null; // Don't render on mobile

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
      <img src="/cursor.PNG" alt="Camera" width={24} height={24} />
    </div>
  );
};

export default CameraCursor;
