import styles from "./popup.module.css";
import { motion, AnimatePresence } from "motion/react";

export default function UnstyledPopup({ open, onClose, children, ...rest }) {
  return (
    <AnimatePresence>
      {open && (
        <motion.div
          className={styles.popupBackground}
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
        >
          <motion.div
            {...rest}
            initial={{
              opacity: 0,
              scale: 0.3,
              y: 100,
              transformOrigin: "bottom",
            }}
            animate={{
              opacity: 1,
              scale: 1,
              y: 0,
              transformOrigin: "bottom",
              transition: { duration: 0.3 },
            }}
            exit={{ opacity: 0, scale: 0.8, transformOrigin: "bottom" }}
            className={`${styles.popup} ${rest.className || ""}`}
          >
            {children}
          </motion.div>
        </motion.div>
      )}
    </AnimatePresence>
  );
}
