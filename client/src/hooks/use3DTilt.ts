import { useRef, useEffect, useState } from 'react';

interface TiltPosition {
  rotateX: number;
  rotateY: number;
  glowX: number;
  glowY: number;
  intensity: number;
}

export function use3DTilt() {
  const cardRef = useRef<HTMLDivElement>(null);
  const [tilt, setTilt] = useState<TiltPosition>({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    intensity: 0,
  });
  const [isMobile, setIsMobile] = useState(false);
  const [isHovering, setIsHovering] = useState(false);

  useEffect(() => {
    // Check if device is mobile
    const checkMobile = () => {
      setIsMobile(window.innerWidth < 768);
    };
    checkMobile();
    window.addEventListener('resize', checkMobile);

    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      if (isMobile) return; // Disable 3D tilt on mobile

      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Calculate subtle rotation (max 5-7 degrees)
      const rotateX = (mouseY / (rect.height / 2)) * 6;
      const rotateY = (mouseX / (rect.width / 2)) * -6;

      // Calculate glow position (0-100%)
      const glowX = ((e.clientX - rect.left) / rect.width) * 100;
      const glowY = ((e.clientY - rect.top) / rect.height) * 100;

      // Calculate intensity based on distance from center (0-1)
      const distFromCenter = Math.sqrt(
        Math.pow(mouseX / (rect.width / 2), 2) + 
        Math.pow(mouseY / (rect.height / 2), 2)
      );
      const intensity = Math.max(0, 1 - distFromCenter / 1.5);

      setTilt({
        rotateX: Math.max(-6, Math.min(6, rotateX)),
        rotateY: Math.max(-6, Math.min(6, rotateY)),
        glowX,
        glowY,
        intensity: Math.min(1, intensity),
      });
    };

    const handleMouseEnter = () => {
      setIsHovering(true);
    };

    const handleMouseLeave = () => {
      setIsHovering(false);
      setTilt({
        rotateX: 0,
        rotateY: 0,
        glowX: 50,
        glowY: 50,
        intensity: 0,
      });
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseenter', handleMouseEnter);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseenter', handleMouseEnter);
      card.removeEventListener('mouseleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);
    };
  }, [isMobile]);

  return { cardRef, tilt, isMobile, isHovering };
}
