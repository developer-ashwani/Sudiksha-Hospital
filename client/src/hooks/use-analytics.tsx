import { useLocation } from "wouter";
import { useEffect } from "react";

export function useAnalytics() {
  const [location] = useLocation();
  
  useEffect(() => {
    // Dummy page view tracking - replace with real GA later
    if (typeof window !== 'undefined') {
      // Page view: location
    }
  }, [location]);
}