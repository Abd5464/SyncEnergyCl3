"use client";

import { useEffect, useRef, useState } from "react";
import { useInView } from "framer-motion";

interface StatCounterProps {
  /** Final value to count up to. */
  value: number;
  /** Decimal places to render (e.g. 1 for "5.2"). */
  decimals?: number;
  prefix?: string;
  suffix?: string;
  /** Animation duration in milliseconds. */
  duration?: number;
  className?: string;
}

/**
 * Animated number that counts up from 0 to `value` the first time it
 * scrolls into view. Uses requestAnimationFrame with an ease-out curve.
 */
export default function StatCounter({
  value,
  decimals = 0,
  prefix = "",
  suffix = "",
  duration = 2000,
  className = "",
}: StatCounterProps) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, amount: 0.5 });
  const [display, setDisplay] = useState(0);

  useEffect(() => {
    if (!inView) return;

    let frame = 0;
    const start = performance.now();

    const tick = (now: number) => {
      const progress = Math.min((now - start) / duration, 1);
      // ease-out cubic
      const eased = 1 - Math.pow(1 - progress, 3);
      setDisplay(eased * value);
      if (progress < 1) {
        frame = requestAnimationFrame(tick);
      } else {
        setDisplay(value);
      }
    };

    frame = requestAnimationFrame(tick);
    return () => cancelAnimationFrame(frame);
  }, [inView, value, duration]);

  return (
    <span ref={ref} className={className}>
      {prefix}
      {display.toLocaleString("en-US", {
        minimumFractionDigits: decimals,
        maximumFractionDigits: decimals,
      })}
      {suffix}
    </span>
  );
}
