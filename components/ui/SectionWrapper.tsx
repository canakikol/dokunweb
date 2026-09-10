"use client";

import { useRef, useEffect, ReactNode } from "react";
import { motion, useInView, useAnimation } from "framer-motion";

interface SectionWrapperProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  direction?: "up" | "left" | "right" | "none";
  once?: boolean;
  id?: string;
  as?: "section" | "div" | "article";
}

export function SectionWrapper({
  children,
  className = "",
  delay = 0,
  direction = "up",
  once = true,
  id,
  as: Tag = "section",
}: SectionWrapperProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once,
    margin: "-80px 0px",
  });
  const controls = useAnimation();

  const getInitial = () => {
    if (direction === "up") return { opacity: 0, y: 32 };
    if (direction === "left") return { opacity: 0, x: -32 };
    if (direction === "right") return { opacity: 0, x: 32 };
    return { opacity: 0 };
  };

  const getAnimate = () => {
    return { opacity: 1, y: 0, x: 0 };
  };

  useEffect(() => {
    if (isInView) {
      controls.start(getAnimate());
    }
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isInView]);

  return (
    <Tag id={id} className={className}>
      <motion.div
        ref={ref}
        initial={getInitial()}
        animate={controls}
        transition={{ duration: 0.6, delay }}
      >
        {children}
      </motion.div>
    </Tag>
  );
}

interface StaggerContainerProps {
  children: ReactNode;
  className?: string;
  staggerDelay?: number;
  id?: string;
}

export function StaggerContainer({
  children,
  className = "",
  staggerDelay = 0.1,
  id,
}: StaggerContainerProps) {
  const ref = useRef<HTMLDivElement>(null);
  const isInView = useInView(ref as React.RefObject<Element>, {
    once: true,
    margin: "-60px 0px",
  });

  return (
    <motion.div
      id={id}
      ref={ref}
      className={className}
      initial="hidden"
      animate={isInView ? "visible" : "hidden"}
      variants={{
        hidden: { opacity: 0 },
        visible: {
          opacity: 1,
          transition: {
            staggerChildren: staggerDelay,
            delayChildren: 0.1,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}

export function StaggerItem({
  children,
  className = "",
}: {
  children: ReactNode;
  className?: string;
}) {
  return (
    <motion.div
      className={className}
      variants={{
        hidden: { opacity: 0, y: 24 },
        visible: {
          opacity: 1,
          y: 0,
          transition: {
            duration: 0.5,
          },
        },
      }}
    >
      {children}
    </motion.div>
  );
}
