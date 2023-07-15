import { useEffect, useRef, ReactNode } from "react";
import { motion, useAnimation, useInView } from "framer-motion";

type MotionProps = {
  children: ReactNode;
};

const Motion = ({ children }: MotionProps): JSX.Element => {
  const ref = useRef(null);
  const animate = useAnimation();
  const isInView = useInView(ref);
  const variants = {
    hidden: {
      y: -30,
      opacity: 0,
    },
    show: {
      y: 0,
      opacity: 1,
    },
  };
  const transition = {
    ease: "easeOut",
    delay: 0.4,
    duration: 0.4,
    damping: 5,
    mass: 1,
  };

  useEffect(() => {
    if (isInView) {
      animate.start("show");
    }
  }, [animate, isInView]);

  return (
    <motion.div
      ref={ref}
      initial="hidden"
      animate={animate}
      variants={variants}
      transition={transition}
    >
      {children}
    </motion.div>
  );
};

export default Motion;
