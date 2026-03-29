import React, { useEffect, useState } from 'react';
import { motion, useSpring } from 'motion/react';

export const CustomCursor = () => {
  const [mousePosition, setMousePosition] = useState({ x: 0, y: 0 });
  const [isHovering, setIsHovering] = useState(false);

  const cursorX = useSpring(0, { damping: 20, stiffness: 250 });
  const cursorY = useSpring(0, { damping: 20, stiffness: 250 });
  
  const followerX = useSpring(0, { damping: 30, stiffness: 150 });
  const followerY = useSpring(0, { damping: 30, stiffness: 150 });

  useEffect(() => {
    const moveMouse = (e: MouseEvent) => {
      setMousePosition({ x: e.clientX, y: e.clientY });
      cursorX.set(e.clientX - 10);
      cursorY.set(e.clientY - 10);
      followerX.set(e.clientX - 20);
      followerY.set(e.clientY - 20);
    };

    const handleHover = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.closest('button, a, .interactive')) {
        setIsHovering(true);
      } else {
        setIsHovering(false);
      }
    };

    window.addEventListener('mousemove', moveMouse);
    window.addEventListener('mouseover', handleHover);

    return () => {
      window.removeEventListener('mousemove', moveMouse);
      window.removeEventListener('mouseover', handleHover);
    };
  }, [cursorX, cursorY, followerX, followerY]);

  return (
    <>
      <motion.div
        className="custom-cursor hidden md:block"
        style={{
          x: cursorX,
          y: cursorY,
          scale: isHovering ? 2.5 : 1,
        }}
      />
      <motion.div
        className="custom-cursor-follower hidden md:block"
        style={{
          x: followerX,
          y: followerY,
          scale: isHovering ? 1.5 : 1,
          opacity: isHovering ? 0 : 1,
        }}
      />
    </>
  );
};
