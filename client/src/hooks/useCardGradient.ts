import { useEffect, useRef } from 'react';

export function useCardGradient() {
  const cardRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const card = cardRef.current;
    if (!card) return;

    const handleMouseMove = (e: MouseEvent) => {
      const rect = card.getBoundingClientRect();
      const x = e.clientX - rect.left;
      const y = e.clientY - rect.top;

      // Create a radial gradient that follows the mouse
      const gradient = `radial-gradient(circle 400px at ${x}px ${y}px, rgba(85, 200, 200, 0.15), transparent 80%)`;
      card.style.backgroundImage = gradient;
    };

    const handleMouseLeave = () => {
      card.style.backgroundImage = '';
    };

    card.addEventListener('mousemove', handleMouseMove);
    card.addEventListener('mouseleave', handleMouseLeave);

    return () => {
      card.removeEventListener('mousemove', handleMouseMove);
      card.removeEventListener('mouseleave', handleMouseLeave);
    };
  }, []);

  return cardRef;
}
