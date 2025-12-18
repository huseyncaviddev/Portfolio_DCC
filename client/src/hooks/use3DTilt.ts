import { useRef, useEffect, useState } from 'react';

interface TiltPosition {
  rotateX: number;
  rotateY: number;
  glowX: number;
  glowY: number;
  intensity: number;
}

interface TiltState extends TiltPosition {
  scale: number;
}

/**
 * Premium 3D Tilt Hook with lerp smoothing
 *
 * Performance optimizations:
 * - Uses requestAnimationFrame with lerp interpolation for smooth transitions
 * - Clamps rotation to max 5deg for restrained, premium feel
 * - Smooth enter/exit transitions (no harsh pop)
 * - Properly cleans up RAF and event listeners (no memory leaks)
 * - Works with multiple cards simultaneously
 * - Disables on mobile for better performance
 */
export function use3DTilt() {
  const cardRef = useRef<HTMLDivElement>(null);
  const rafIdRef = useRef<number | null>(null);

  // Current state (smoothed via lerp)
  const currentRef = useRef<TiltState>({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    intensity: 0,
    scale: 1,
  });

  // Target state (updated on mouse move)
  const targetRef = useRef<TiltState>({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    intensity: 0,
    scale: 1,
  });

  const [tilt, setTilt] = useState<TiltPosition>({
    rotateX: 0,
    rotateY: 0,
    glowX: 50,
    glowY: 50,
    intensity: 0,
  });
  const [scale, setScale] = useState(1);
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
    if (!card || isMobile) {
      return () => window.removeEventListener('resize', checkMobile);
    }

    // Clamp value between min and max
    const clamp = (value: number, min: number, max: number) =>
      Math.max(min, Math.min(max, value));

    // Linear interpolation for smooth transitions
    const lerp = (start: number, end: number, factor: number) =>
      start + (end - start) * factor;

    // Animation loop with lerp smoothing
    const animate = () => {
      const lerpFactor = 0.1; // Lower = smoother but slower

      // Interpolate current towards target
      currentRef.current.rotateX = lerp(currentRef.current.rotateX, targetRef.current.rotateX, lerpFactor);
      currentRef.current.rotateY = lerp(currentRef.current.rotateY, targetRef.current.rotateY, lerpFactor);
      currentRef.current.glowX = lerp(currentRef.current.glowX, targetRef.current.glowX, lerpFactor * 1.5);
      currentRef.current.glowY = lerp(currentRef.current.glowY, targetRef.current.glowY, lerpFactor * 1.5);
      currentRef.current.intensity = lerp(currentRef.current.intensity, targetRef.current.intensity, lerpFactor);
      currentRef.current.scale = lerp(currentRef.current.scale, targetRef.current.scale, lerpFactor * 0.8);

      // Update state
      setTilt({
        rotateX: currentRef.current.rotateX,
        rotateY: currentRef.current.rotateY,
        glowX: currentRef.current.glowX,
        glowY: currentRef.current.glowY,
        intensity: currentRef.current.intensity,
      });
      setScale(currentRef.current.scale);

      rafIdRef.current = requestAnimationFrame(animate);
    };

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const centerX = rect.left + rect.width / 2;
      const centerY = rect.top + rect.height / 2;

      const mouseX = e.clientX - centerX;
      const mouseY = e.clientY - centerY;

      // Calculate rotation (max 5deg for restrained, premium feel)
      const rotateX = (mouseY / (rect.height / 2)) * 5;
      const rotateY = (mouseX / (rect.width / 2)) * -5;

      // Calculate glow position (0-100%)
      const glowX = ((e.clientX - rect.left) / rect.width) * 100;
      const glowY = ((e.clientY - rect.top) / rect.height) * 100;

      // Calculate intensity based on distance from center (0-1)
      const distFromCenter = Math.sqrt(
        Math.pow(mouseX / (rect.width / 2), 2) +
        Math.pow(mouseY / (rect.height / 2), 2)
      );
      const intensity = Math.max(0, 1 - distFromCenter / 1.5);

      // Update target values (will be lerped in animation loop)
      targetRef.current = {
        rotateX: clamp(rotateX, -5, 5),
        rotateY: clamp(rotateY, -5, 5),
        glowX: clamp(glowX, 0, 100),
        glowY: clamp(glowY, 0, 100),
        intensity: clamp(intensity, 0, 1),
        scale: 1.015, // Subtle hover scale
      };
    };

    const handleMouseEnter = () => {
      setIsHovering(true);

      // Start animation loop
      if (rafIdRef.current === null) {
        rafIdRef.current = requestAnimationFrame(animate);
      }
    };

    const handleMouseLeave = () => {
      setIsHovering(false);

      // Reset target to neutral
      targetRef.current = {
        rotateX: 0,
        rotateY: 0,
        glowX: 50,
        glowY: 50,
        intensity: 0,
        scale: 1,
      };
    };

    card.addEventListener('pointermove', handleMouseMove, { passive: true });
    card.addEventListener('pointerenter', handleMouseEnter);
    card.addEventListener('pointerleave', handleMouseLeave);

    return () => {
      // Cleanup: prevent memory leaks
      card.removeEventListener('pointermove', handleMouseMove);
      card.removeEventListener('pointerenter', handleMouseEnter);
      card.removeEventListener('pointerleave', handleMouseLeave);
      window.removeEventListener('resize', checkMobile);

      // Cancel any pending RAF
      if (rafIdRef.current !== null) {
        cancelAnimationFrame(rafIdRef.current);
        rafIdRef.current = null;
      }
    };
  }, [isMobile]);

  return { cardRef, tilt, scale, isMobile, isHovering };
}
