/**
 * Apple-Style 3D Tilt Effect - Vanilla JavaScript Implementation
 *
 * Features:
 * - Ultra smooth 60fps animation using requestAnimationFrame
 * - Clamped rotation values (max 8deg)
 * - No memory leaks with proper cleanup
 * - Works for multiple cards simultaneously
 * - Pure vanilla JS with no dependencies
 *
 * Performance Optimizations:
 * 1. requestAnimationFrame batching - Ensures updates happen at 60fps, synchronized with browser repaint
 * 2. Passive event listeners - Tells browser we won't call preventDefault(), allowing scroll optimization
 * 3. Single RAF per card - Prevents multiple RAF calls, only one active at a time
 * 4. Debouncing via RAF - Multiple mousemove events batched into single render
 * 5. getBoundingClientRect caching - Calculated once per mousemove, not per frame
 * 6. Proper cleanup - All event listeners and RAF calls cancelled on destroy
 */

interface TiltConfig {
  maxRotation?: number; // Max rotation in degrees (default: 8)
  glowIntensity?: number; // Glow effect intensity 0-1 (default: 0.3)
  perspective?: number; // CSS perspective value (default: 1000)
  transition?: string; // CSS transition timing (default: '0.1s cubic-bezier(0.23, 1, 0.32, 1)')
}

interface TiltState {
  rotateX: number;
  rotateY: number;
  glowX: number;
  glowY: number;
  intensity: number;
}

export class Apple3DTilt {
  private element: HTMLElement;
  private config: Required<TiltConfig>;
  private rafId: number | null = null;
  private pendingUpdate: TiltState | null = null;
  private isActive = false;

  constructor(element: HTMLElement, config: TiltConfig = {}) {
    this.element = element;
    this.config = {
      maxRotation: config.maxRotation ?? 8,
      glowIntensity: config.glowIntensity ?? 0.3,
      perspective: config.perspective ?? 1000,
      transition: config.transition ?? '0.1s cubic-bezier(0.23, 1, 0.32, 1)',
    };

    this.init();
  }

  private init(): void {
    // Set initial CSS
    this.element.style.transformStyle = 'preserve-3d';
    this.element.style.transition = `transform ${this.config.transition}`;

    // Bind event handlers
    this.element.addEventListener('mouseenter', this.handleMouseEnter);
    this.element.addEventListener('mousemove', this.handleMouseMove, { passive: true });
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
  }

  private clamp = (value: number, min: number, max: number): number =>
    Math.max(min, Math.min(max, value));

  private scheduleUpdate = (state: TiltState): void => {
    this.pendingUpdate = state;

    // Only schedule RAF if none is pending
    if (this.rafId === null) {
      this.rafId = requestAnimationFrame(() => {
        if (this.pendingUpdate) {
          this.applyTransform(this.pendingUpdate);
          this.pendingUpdate = null;
        }
        this.rafId = null;
      });
    }
  };

  private applyTransform = (state: TiltState): void => {
    const { rotateX, rotateY, glowX, glowY, intensity } = state;

    // Apply 3D transform
    this.element.style.transform = `
      perspective(${this.config.perspective}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(1.02, 1.02, 1.02)
    `;

    // Apply glow effect (optional - requires glow element)
    const glowElement = this.element.querySelector<HTMLElement>('.tilt-glow');
    if (glowElement) {
      const alpha = this.config.glowIntensity * intensity;
      glowElement.style.background = `
        radial-gradient(
          circle at ${glowX}% ${glowY}%,
          rgba(0, 200, 200, ${alpha}) 0%,
          rgba(0, 150, 150, ${alpha * 0.5}) 25%,
          transparent 60%
        )
      `;
      glowElement.style.opacity = this.isActive ? '1' : '0';
    }
  };

  private handleMouseEnter = (): void => {
    this.isActive = true;
  };

  private handleMouseMove = (e: MouseEvent): void => {
    const rect = this.element.getBoundingClientRect();
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Calculate rotation
    const rotateX = (mouseY / (rect.height / 2)) * this.config.maxRotation;
    const rotateY = (mouseX / (rect.width / 2)) * -this.config.maxRotation;

    // Calculate glow position
    const glowX = ((e.clientX - rect.left) / rect.width) * 100;
    const glowY = ((e.clientY - rect.top) / rect.height) * 100;

    // Calculate intensity
    const distFromCenter = Math.sqrt(
      Math.pow(mouseX / (rect.width / 2), 2) +
      Math.pow(mouseY / (rect.height / 2), 2)
    );
    const intensity = Math.max(0, 1 - distFromCenter / 1.5);

    this.scheduleUpdate({
      rotateX: this.clamp(rotateX, -this.config.maxRotation, this.config.maxRotation),
      rotateY: this.clamp(rotateY, -this.config.maxRotation, this.config.maxRotation),
      glowX: this.clamp(glowX, 0, 100),
      glowY: this.clamp(glowY, 0, 100),
      intensity: this.clamp(intensity, 0, 1),
    });
  };

  private handleMouseLeave = (): void => {
    this.isActive = false;

    // Cancel any pending RAF
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    // Reset transform
    this.element.style.transform = `
      perspective(${this.config.perspective}px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;

    // Reset glow
    const glowElement = this.element.querySelector<HTMLElement>('.tilt-glow');
    if (glowElement) {
      glowElement.style.opacity = '0';
    }
  };

  /**
   * Destroy instance and cleanup all event listeners
   * CRITICAL: Call this when removing cards to prevent memory leaks
   */
  public destroy(): void {
    // Remove event listeners
    this.element.removeEventListener('mouseenter', this.handleMouseEnter);
    this.element.removeEventListener('mousemove', this.handleMouseMove);
    this.element.removeEventListener('mouseleave', this.handleMouseLeave);

    // Cancel any pending RAF
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    // Reset styles
    this.element.style.transform = '';
    this.element.style.transformStyle = '';
    this.element.style.transition = '';
  }
}

/**
 * Initialize 3D tilt effect on multiple cards
 *
 * @example
 * const cards = document.querySelectorAll('.tilt-card');
 * const tiltInstances = initApple3DTilt(cards, { maxRotation: 8 });
 *
 * // Later, cleanup:
 * tiltInstances.forEach(instance => instance.destroy());
 */
export function initApple3DTilt(
  elements: NodeListOf<HTMLElement> | HTMLElement[],
  config?: TiltConfig
): Apple3DTilt[] {
  return Array.from(elements).map(el => new Apple3DTilt(el, config));
}
