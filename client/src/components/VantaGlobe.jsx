import { useEffect, useRef, useState } from "react";
import * as THREE from "three";
import GLOBE from "vanta/dist/vanta.globe.min.js";

export default function VantaGlobe() {
  const vantaRef = useRef(null);
  const [vantaEffect, setVantaEffect] = useState(null);

  useEffect(() => {
    if (!vantaEffect) {
      setVantaEffect(
        GLOBE({
          el: vantaRef.current,
          THREE,
          mouseControls: true,
          touchControls: true,
          minHeight: 100.0,
          minWidth: 100.0,
          scale: 0.4,
          scaleMobile: 1.0,
          color: 0x3f4aff,       // main globe color
          color2: 0x0,      // secondary color
          backgroundColor: 0xcfcfcf, // background color
        })
      );
    }
    return () => {
      if (vantaEffect) vantaEffect.destroy();
    };
  }, [vantaEffect]);

  return (
    <div
      ref={vantaRef}
      className="absolute top-0 left-0 w-full h-full -z-10"
    />
  );
}
