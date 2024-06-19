"use client";

import { ReactNode, createContext, useContext, useState, useEffect } from "react";

export interface ScrollBarInterface {
  scrollBarWidth: string;
  fullWidth: string;
}

// Create context with a default value (will be overridden on client)
const ScrollBarContext = createContext<ScrollBarInterface | null>(null);

// Provider component
export function ScrollBarProvider({ children }: { children: ReactNode }) {
  const [scrollBar, setScrollBar] = useState<ScrollBarInterface>({
    scrollBarWidth: "0px",
    fullWidth: "100%",
  });

  useEffect(() => {
    const scrollBarWidth = `${window.innerWidth - document.documentElement.clientWidth}px`;
    const fullWidth = `calc(100% - ${scrollBarWidth})`;
    setScrollBar({ scrollBarWidth, fullWidth });
  }, []);

  return (
    <ScrollBarContext.Provider value={scrollBar}>
      {children}
    </ScrollBarContext.Provider>
  );
}

// Custom hook for using the context
export function useScrollBar() {
  const context = useContext(ScrollBarContext);
  if (context === null) {
    throw new Error('useScrollBar must be used within a ScrollBarProvider');
  }
  return context;
}
