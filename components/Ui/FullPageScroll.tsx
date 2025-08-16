"use client";

import {
  forwardRef,
  useImperativeHandle,
  useRef,
  useState,
  useEffect,
} from "react";
import gsap from "gsap";

export interface FullPageScrollRef {
  nextSection: () => void;
  prevSection: () => void;
  goToSection: (idx: number) => void;
}

interface FullPageScrollProps {
  children: React.ReactNode;
  onSectionChange?: (index: number) => void;
  backgroundRefs?: React.RefObject<HTMLDivElement[]>; // background layers
  backgroundMap?: number[]; // map section index → background index
}

const FullPageScroll = forwardRef<FullPageScrollRef, FullPageScrollProps>(
  ({ children, onSectionChange, backgroundRefs, backgroundMap }, ref) => {
    const sectionsArray = (Array.isArray(children)
      ? children
      : [children]) as React.ReactNode[];

    const viewportRef = useRef<HTMLDivElement>(null);
    const trackRef = useRef<HTMLDivElement>(null);
    const sectionEls = useRef<HTMLDivElement[]>([]);

    const [current, setCurrent] = useState(0);
    const currentRef = useRef(0);
    const animating = useRef(false);

    console.log(current)

    // Lock page scroll
    useEffect(() => {
      const prev = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = prev;
      };
    }, []);

    const setToIndex = (index: number) => {
      if (!trackRef.current || animating.current) return;
      const clamped = Math.max(0, Math.min(index, sectionsArray.length - 1));
      if (clamped === currentRef.current) return;

      const y = -clamped * window.innerHeight;
      animating.current = true;

      const tl = gsap.timeline({
        defaults: { ease: "power3.inOut" },
        onComplete: () => {
          animating.current = false;
          setCurrent(clamped);
          currentRef.current = clamped;
          onSectionChange?.(clamped);
        },
      });

      // Fade out current section
      tl.to(sectionEls.current[currentRef.current], {
        opacity: 0,
        duration: 0.4,
      });

      // Move track
      tl.to(trackRef.current, { y, duration: 0.9 }, "<");

      // Fade in next section
      tl.fromTo(
        sectionEls.current[clamped],
        { opacity: 0 },
        { opacity: 1, duration: 0.4 },
        "-=0.4"
      );

      // Background change
      if (backgroundRefs?.current && backgroundMap) {
        const bgIndex = backgroundMap[clamped];
        backgroundRefs.current.forEach((bg, i) => {
          if (!bg) return;
          tl.to(bg, { opacity: i === bgIndex ? 1 : 0, duration: 0.8 }, 0);
        });
      }
    };

    const nextSection = () => setToIndex(currentRef.current + 1);
    const prevSection = () => setToIndex(currentRef.current - 1);
    const goToSection = (idx: number) => setToIndex(idx);

    useImperativeHandle(ref, () => ({
      nextSection,
      prevSection,
      goToSection,
    }));

    // Wheel scroll
    useEffect(() => {
      const onWheel = (e: WheelEvent) => {
        e.preventDefault();
        if (animating.current) return;
        if (e.deltaY > 0 && currentRef.current < sectionsArray.length - 1) {
          nextSection();
        } else if (e.deltaY < 0 && currentRef.current > 0) {
          prevSection();
        }
      };
      window.addEventListener("wheel", onWheel, { passive: false });
      return () => window.removeEventListener("wheel", onWheel);
    }, [sectionsArray.length]);

    // Touch scroll
    useEffect(() => {
      let startY = 0;
      const onTouchStart = (e: TouchEvent) =>
        (startY = e.touches[0].clientY);
      const onTouchEnd = (e: TouchEvent) => {
        if (animating.current) return;
        const delta = startY - e.changedTouches[0].clientY;
        if (Math.abs(delta) < 40) return;
        delta > 0 ? nextSection() : prevSection();
      };
      window.addEventListener("touchstart", onTouchStart, { passive: true });
      window.addEventListener("touchend", onTouchEnd, { passive: true });
      return () => {
        window.removeEventListener("touchstart", onTouchStart);
        window.removeEventListener("touchend", onTouchEnd);
      };
    }, []);

    // Resize correction
    useEffect(() => {
      const onResize = () => {
        gsap.set(trackRef.current, {
          y: -currentRef.current * window.innerHeight,
        });
      };
      window.addEventListener("resize", onResize);
      return () => window.removeEventListener("resize", onResize);
    }, []);

    return (
      <div
        ref={viewportRef}
        style={{
          position: "fixed",
          inset: 0,
          width: "100vw",
          height: "100vh",
          overflow: "hidden",
        }}
      >
        <div ref={trackRef} style={{ willChange: "transform" }}>
          {sectionsArray.map((section, i) => (
            <div
              key={i}
              ref={(el) => {
                if (el) sectionEls.current[i] = el;
              }}
              style={{
                height: "100vh",
                width: "100vw",
                opacity: i === 0 ? 1 : 0,
              }}
            >
              {section}
            </div>
          ))}
        </div>
      </div>
    );
  }
);

FullPageScroll.displayName = "FullPageScroll";
export default FullPageScroll;
