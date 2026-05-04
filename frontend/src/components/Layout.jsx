import React, { useEffect } from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";
import { Toaster } from "@/components/ui/sonner";
import { SmoothScrollProvider } from "./SmoothScroll";
import TermsModal from "./TermsModal";

export default function Layout() {
  const { pathname, hash } = useLocation();

  useEffect(() => {
    if (hash) {
      const el = document.querySelector(hash);
      if (el) {
        setTimeout(() => el.scrollIntoView({ behavior: "smooth", block: "start" }), 120);
        return;
      }
    }
    window.scrollTo({ top: 0, left: 0, behavior: "instant" });
  }, [pathname, hash]);

  return (
    <SmoothScrollProvider>
      <Navbar />
      <main className="min-h-screen bg-sand-light text-ink">
        <Outlet />
      </main>
      <Footer />
      <TermsModal />
      <Toaster
        position="bottom-right"
        toastOptions={{
          style: {
            background: "#0A0A0A",
            color: "#F2EFE9",
            border: "1px solid rgba(242,239,233,0.1)",
          },
        }}
      />
    </SmoothScrollProvider>
  );
}
