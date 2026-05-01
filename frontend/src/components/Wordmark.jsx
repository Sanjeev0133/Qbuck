import React from "react";

/**
 * QuickBuck logo lock-up: QB icon + wordmark.
 * Used in the navbar.
 */
export const Logo = ({ className = "", variant = "light", showText = true }) => {
  const onDark = variant === "dark";
  const ink = onDark ? "#F2EFE9" : "#0A0A0A";
  const olive = onDark ? "#9BAA4F" : "#4B5320";

  return (
    <span
      className={`inline-flex items-center gap-2 font-display font-extrabold tracking-[-0.045em] leading-none ${className}`}
      aria-label="QuickBuck"
      data-testid="quickbuck-logo"
    >
      <img
        src="/qb-icon.png"
        alt=""
        aria-hidden
        className="h-[1.5em] w-auto select-none"
        draggable={false}
      />
      {showText && (
        <span className="inline-flex items-baseline">
          <span style={{ color: ink }}>Quick</span>
          <span style={{ color: olive }}>Buck</span>
        </span>
      )}
    </span>
  );
};

/**
 * Big typographic wordmark — used in the footer hero.
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
      <span style={{ color: ink }}>Quick</span>
      <span style={{ color: olive }}>Buck</span>
      <span
        className="ml-[0.18em] inline-block h-[0.42em] w-[0.42em] rounded-full"
        style={{ backgroundColor: olive }}
        aria-hidden
      />
    </span>
  );
};

export default Logo;
