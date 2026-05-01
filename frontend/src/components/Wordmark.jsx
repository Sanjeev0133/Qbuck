import React from "react";

/**
 * QuickBuck wordmark — olive green + black color blocking
 * Matches the uploaded logo style: bold sans, color-split letters.
 */
export const Wordmark = ({ className = "", variant = "light" }) => {
  const onDark = variant === "dark";
  const ink = onDark ? "#F2EFE9" : "#0A0A0A";
  const olive = onDark ? "#9BAA4F" : "#4B5320";

  return (
    <span
      className={`inline-flex items-baseline font-display font-extrabold tracking-[-0.055em] leading-none ${className}`}
      aria-label="QuickBuck"
      data-testid="quickbuck-wordmark"
    >
      <span style={{ color: ink }}>quick</span>
      <span style={{ color: olive }}>buck</span>
      <span
        className="ml-[0.18em] inline-block h-[0.42em] w-[0.42em] rounded-full"
        style={{ backgroundColor: olive }}
        aria-hidden
      />
    </span>
  );
};

export default Wordmark;
