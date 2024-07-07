import { useEffect, useState } from "react";

const useRightClick = (parentRef) => {

  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [menuPosition, setMenuPosition] = useState({ x: 0, y: 0 });

  useEffect(() => {
    const handleMouseMove = (event) => {
      const { clientX, clientY } = event;
      setMousePosition({ x: clientX, y: clientY });
    };

    window.addEventListener('mousemove', handleMouseMove);

    return () => {
      window.removeEventListener('mousemove', handleMouseMove);
    };
  }, []);

  useEffect(() => {
    console.log(`Mouse position: x: ${mousePosition.x}, y: ${mousePosition.y}`);
  }, [mousePosition]);

  const rightClick = (e) => {
    if (parentRef.current) {
      const { left, top } = parentRef.current.getBoundingClientRect();
      setMenuPosition({
        x: e.clientX - left,
        y: e.clientY - top
      });
    }
  };
  return { rightClick, menuPosition };
};

export { useRightClick };
