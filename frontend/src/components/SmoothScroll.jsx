import React, { createContext, useContext, useEffect, useState } from "react";
import Lenis from "lenis";

const SmoothScrollContext = createContext(null);

export const SmoothScrollProvider = ({ children }) => {
  const [lenis, setLenis] = useState(null);

  useEffect(() => {
    const l = new Lenis({
      duration: 1.15,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
      smoothWheel: true,
    });
    setLenis(l);

    let rafId;
    function raf(time) {
      l.raf(time);
      rafId = requestAnimationFrame(raf);
    }
    rafId = requestAnimationFrame(raf);

    return () => {
      cancelAnimationFrame(rafId);
      l.destroy();
    };
  }, []);

  return (
    <SmoothScrollContext.Provider value={lenis}>
      {children}
    </SmoothScrollContext.Provider>
  );
};

export const useLenis = () => useContext(SmoothScrollContext);
