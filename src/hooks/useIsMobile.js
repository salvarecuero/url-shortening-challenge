import { useState, useEffect } from "react";

const MOBILE_SCREEN_WIDTH_SIZE = 725;

const getWindowWidth = () => window.innerWidth;

export default function useIsMobile() {
  const [isMobile, setIsMobile] = useState(
    () => getWindowWidth() < MOBILE_SCREEN_WIDTH_SIZE
  );

  useEffect(() => {
    function handleResize() {
      setIsMobile(getWindowWidth() < MOBILE_SCREEN_WIDTH_SIZE);
    }

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  return isMobile;
}
