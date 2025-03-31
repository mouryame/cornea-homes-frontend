import styles from "./slider.module.css";
import { motion, AnimatePresence } from "motion/react";

const margins = {
  top: "0 0 auto 0",
  bottom: "auto 0 0 0",
  left: "0 auto 0 0",
  right: "0 0 0 auto",
};

export default function UnstyledSlider({
  open,
  onClose,
  direction,
  children,
  ...rest
}) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={`${styles.sliderBackground} ${rest.className || ""}`}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            {...rest}
            className={`${styles.slider} ${rest.className || ""}`}
            initial={{
              opacity: 0,
              ...getDirectionBasedInitial(direction),
            }}
            animate={{
              opacity: 1,
              ...getDirectionBasedAnimate(direction),
              transition: { duration: 0.3 },
            }}
            exit={{
              opacity: 0,
              ...getDirectionBasedExit(direction),
            }}
            style={{
              margin: margins[direction],
            }}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}

function getDirectionBasedInitial(direction) {
  switch (direction) {
    case "top":
      return { width: "100%", height: 0, y: -100, transformOrigin: "top" };
    case "bottom":
      return { width: "100%", height: 0, y: 100, transformOrigin: "bottom" };
    case "left":
      return { width: 0, height: "100%", x: -100, transformOrigin: "left" };
    case "right":
      return { width: 0, height: "100%", x: 100, transformOrigin: "right" };
    default:
      return { width: "100%", height: 0, y: 100, transformOrigin: "top" };
  }
}

function getDirectionBasedAnimate(direction) {
  switch (direction) {
    case "top":
      return {
        height: "auto",
        width: "100%",
        minHeight: "300px",
        y: 0,
        transformOrigin: "top",
      };
    case "bottom":
      return {
        height: "auto",
        width: "100%",
        minHeight: "300px",
        y: 0,
        transformOrigin: "bottom",
      };
    case "left":
      return {
        width: "auto",
        minWidth: "300px",
        height: "100%",
        x: 0,
        transformOrigin: "left",
      };
    case "right":
      return {
        width: "auto",
        minWidth: "300px",
        height: "100%",
        x: 0,
        transformOrigin: "right",
      };
    default:
      return { width: "100%", height: "100%", y: 0, transformOrigin: "top" };
  }
}

function getDirectionBasedExit(direction) {
  switch (direction) {
    case "top":
      return { width: "100%", height: 0, y: -100, transformOrigin: "top" };
    case "bottom":
      return { width: "100%", height: 0, y: 100, transformOrigin: "bottom" };
    case "left":
      return { width: 0, height: "100%", x: -100, transformOrigin: "left" };
    case "right":
      return { width: 0, height: "100%", x: 100, transformOrigin: "right" };
    default:
      return { width: "100%", height: 0, y: 100, transformOrigin: "top" };
  }
}
