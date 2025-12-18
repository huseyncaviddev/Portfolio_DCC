/**
 * Premium 3D Card Hover - Production JavaScript
 *
 * Features:
 * - Mouse-position-based 3D tilt (max 8deg)
 * - Cursor-following glow effect
 * - requestAnimationFrame optimization
 * - Works for multiple cards
 * - Respects prefers-reduced-motion
 * - Mobile/touch fallback
 *
 * Performance:
 * - RAF batching prevents layout thrashing
 * - Passive event listeners
 * - Single RAF per card (no queue buildup)
 * - Proper cleanup (no memory leaks)
 *
 * Math:
 * - Rotation calculated from mouse distance from center
 * - Clamped to max 8deg for subtle effect
 * - CSS custom properties for glow position
 */

class PremiumCard3D {
  constructor(element, options = {}) {
    this.element = element;

    // Configuration
    this.config = {
      maxRotation: options.maxRotation ?? 8,        // Max tilt in degrees
      perspective: options.perspective ?? 1000,     // 3D perspective
      scale: options.scale ?? 1.02,                 // Hover scale
      transition: options.transition ?? '0.15s cubic-bezier(0.23, 1, 0.32, 1)',
      glowOpacity: options.glowOpacity ?? 0.15,     // Glow intensity
      ...options
    };

    // State
    this.rafId = null;
    this.pendingUpdate = null;
    this.isHovering = false;

    // Check if effects should be disabled
    this.shouldDisable = this.checkDisable();

    if (!this.shouldDisable) {
      this.init();
    }
  }

  /**
   * Check if 3D effects should be disabled
   * - Mobile devices
   * - Touch-only devices
   * - Reduced motion preference
   */
  checkDisable() {
    // Check reduced motion preference
    const prefersReducedMotion = window.matchMedia('(prefers-reduced-motion: reduce)').matches;
    if (prefersReducedMotion) return true;

    // Check if mobile
    const isMobile = window.innerWidth < 768;
    if (isMobile) return true;

    // Check if touch-only device
    const isTouchOnly = window.matchMedia('(hover: none) and (pointer: coarse)').matches;
    if (isTouchOnly) return true;

    return false;
  }

  /**
   * Initialize card with event listeners and styles
   */
  init() {
    // Set initial styles
    this.element.style.transformStyle = 'preserve-3d';
    this.element.style.transition = `transform ${this.config.transition}`;

    // Bind event handlers (preserve 'this' context)
    this.handleMouseEnter = this.handleMouseEnter.bind(this);
    this.handleMouseMove = this.handleMouseMove.bind(this);
    this.handleMouseLeave = this.handleMouseLeave.bind(this);

    // Add event listeners with passive flag for scroll performance
    this.element.addEventListener('mouseenter', this.handleMouseEnter);
    this.element.addEventListener('mousemove', this.handleMouseMove, { passive: true });
    this.element.addEventListener('mouseleave', this.handleMouseLeave);
  }

  /**
   * Clamp value between min and max
   */
  clamp(value, min, max) {
    return Math.max(min, Math.min(max, value));
  }

  /**
   * Schedule update using requestAnimationFrame
   * Batches multiple mousemove events into single render
   */
  scheduleUpdate(state) {
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
  }

  /**
   * Apply 3D transform and glow effect
   * Only modifies transform and CSS variables (GPU properties)
   */
  applyTransform({ rotateX, rotateY, mouseX, mouseY }) {
    // Apply 3D rotation
    this.element.style.transform = `
      perspective(${this.config.perspective}px)
      rotateX(${rotateX}deg)
      rotateY(${rotateY}deg)
      scale3d(${this.config.scale}, ${this.config.scale}, ${this.config.scale})
    `;

    // Update CSS custom properties for glow position
    this.element.style.setProperty('--mouse-x', `${mouseX}%`);
    this.element.style.setProperty('--mouse-y', `${mouseY}%`);
  }

  /**
   * Mouse enter handler
   */
  handleMouseEnter() {
    this.isHovering = true;
  }

  /**
   * Mouse move handler with tilt calculation
   *
   * MATH EXPLANATION:
   * 1. Get card bounding box
   * 2. Calculate mouse position relative to card center
   * 3. Normalize to -1 to 1 range
   * 4. Multiply by maxRotation to get degrees
   * 5. Clamp to prevent extreme rotation
   * 6. Calculate percentage position for glow
   */
  handleMouseMove(e) {
    // Get card dimensions and position
    const rect = this.element.getBoundingClientRect();

    // Calculate center point
    const centerX = rect.left + rect.width / 2;
    const centerY = rect.top + rect.height / 2;

    // Mouse position relative to center
    const mouseX = e.clientX - centerX;
    const mouseY = e.clientY - centerY;

    // Normalize to -1 to 1 range
    const normalizedX = mouseX / (rect.width / 2);
    const normalizedY = mouseY / (rect.height / 2);

    // Calculate rotation in degrees
    // Y position affects X rotation (tilt forward/back)
    // X position affects Y rotation (tilt left/right)
    const rotateX = normalizedY * this.config.maxRotation;
    const rotateY = -normalizedX * this.config.maxRotation; // Negative for natural feel

    // Calculate mouse position as percentage (for glow)
    const mouseXPercent = ((e.clientX - rect.left) / rect.width) * 100;
    const mouseYPercent = ((e.clientY - rect.top) / rect.height) * 100;

    // Schedule update with clamped values
    this.scheduleUpdate({
      rotateX: this.clamp(rotateX, -this.config.maxRotation, this.config.maxRotation),
      rotateY: this.clamp(rotateY, -this.config.maxRotation, this.config.maxRotation),
      mouseX: this.clamp(mouseXPercent, 0, 100),
      mouseY: this.clamp(mouseYPercent, 0, 100),
    });
  }

  /**
   * Mouse leave handler - reset to neutral position
   */
  handleMouseLeave() {
    this.isHovering = false;

    // Cancel any pending RAF
    if (this.rafId !== null) {
      cancelAnimationFrame(this.rafId);
      this.rafId = null;
    }

    // Reset transform with smooth transition
    this.element.style.transform = `
      perspective(${this.config.perspective}px)
      rotateX(0deg)
      rotateY(0deg)
      scale3d(1, 1, 1)
    `;

    // Reset glow position to center
    this.element.style.setProperty('--mouse-x', '50%');
    this.element.style.setProperty('--mouse-y', '50%');
  }

  /**
   * Destroy instance and cleanup
   * CRITICAL: Call this when removing cards to prevent memory leaks
   */
  destroy() {
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
    this.element.style.removeProperty('--mouse-x');
    this.element.style.removeProperty('--mouse-y');
  }
}

/**
 * Initialize 3D effect on multiple cards
 *
 * @param {NodeListOf<HTMLElement>|HTMLElement[]} elements - Card elements
 * @param {Object} options - Configuration options
 * @returns {PremiumCard3D[]} Array of instances
 *
 * @example
 * const cards = document.querySelectorAll('.premium-card-3d');
 * const instances = initPremiumCards(cards, { maxRotation: 8 });
 *
 * // Later, cleanup:
 * instances.forEach(instance => instance.destroy());
 */
function initPremiumCards(elements, options = {}) {
  return Array.from(elements).map(el => new PremiumCard3D(el, options));
}

/**
 * Auto-initialize all cards with data-premium-3d attribute
 * Call this when DOM is ready
 *
 * @example
 * // In your app initialization:
 * document.addEventListener('DOMContentLoaded', () => {
 *   window.premiumCardInstances = autoInitPremiumCards();
 * });
 */
function autoInitPremiumCards() {
  const cards = document.querySelectorAll('[data-premium-3d]');
  return initPremiumCards(cards);
}

// Export for use in modules
if (typeof module !== 'undefined' && module.exports) {
  module.exports = { PremiumCard3D, initPremiumCards, autoInitPremiumCards };
}

// Export for browser globals
if (typeof window !== 'undefined') {
  window.PremiumCard3D = PremiumCard3D;
  window.initPremiumCards = initPremiumCards;
  window.autoInitPremiumCards = autoInitPremiumCards;
}
