import { useEffect, useRef } from "react";

/**
 * FlashlightCursor — React island, hydrated with client:media="(hover: hover)".
 *
 * Astro never ships this bundle to touch devices — zero JS downloaded on mobile.
 *
 * On desktop it renders a fixed, pointer-events-none overlay that tracks the
 * mouse position and draws a radial gradient "flashlight" centred on the cursor.
 * The gradient is written directly to a CSS custom property on the element so
 * React never re-renders for mouse moves — it's pure DOM mutation, 60fps safe.
 */
export default function FlashlightCursor() {
  const overlayRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const overlay = overlayRef.current;
    if (!overlay) return;

    const handleMouseMove = (e: MouseEvent) => {
      const x = e.clientX;
      const y = e.clientY;

      // Direct DOM write — no setState, no React re-render, no jank.
      overlay.style.background = `radial-gradient(
        600px circle at ${x}px ${y}px,
        rgba(255, 255, 255, 0.03) 0%,
        transparent 70%
      )`;
    };

    window.addEventListener("mousemove", handleMouseMove, { passive: true });

    return () => {
      window.removeEventListener("mousemove", handleMouseMove);
    };
  }, []);

  return (
    <div
      ref={overlayRef}
      aria-hidden="true"
      style={{
        position: "fixed",
        inset: 0,
        zIndex: 1,
        pointerEvents: "none",
        // Start transparent — gradient is applied on first mousemove
        background: "transparent",
        // Prevent any accidental text selection or interaction bleed
        userSelect: "none",
      }}
    />
  );
}
