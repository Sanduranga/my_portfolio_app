import { useEffect, useRef } from "react";
import { motion, useAnimation, useInView } from "framer-motion";
interface props {
  children: JSX.Element;
  width?: "fit-content" | "100%";
}
function Amaze({ children }: props) {
  const reference = useRef(null);
  const isView = useInView(reference, { once: true });
  const animateDiv = useAnimation();
  const animateslider = useAnimation();
  useEffect(() => {
    if (isView) {
      animateDiv.start("visible");
      animateslider.start("visible");
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [isView]);
  return (
    <div ref={reference} className="relative">
      <motion.div
        variants={{
          hidden: { opacity: 0, y: 80 },
          visible: { opacity: 1, y: 0 },
        }}
        initial="hidden"
        animate={animateDiv}
        transition={{
          delay: 0.4,
          duration: 0.5,
        }}
      >
        {children}
      </motion.div>
      <motion.div
        variants={{
          hidden: { left: 0 },
          visible: { left: "100%" },
        }}
        initial="hidden"
        animate={animateslider}
        transition={{
          delay: 0.2,
          duration: 0.5,
          ease: "easeIn",
        }}
        className="absolute z-50 top-2 bottom-2 left-0 rounded-xl right-0 bg-gradient-to-r from-green-500 to-green-950/40"
      />
    </div>
  );
}

export default Amaze;
