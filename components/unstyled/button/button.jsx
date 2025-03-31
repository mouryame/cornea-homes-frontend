import styles from "./button.module.css";

export default function UnstyledButton({ children, ...rest }) {
  return (
    <button {...rest} className={`${styles.button} ${rest.className || ""}`}>
      {children}
    </button>
  );
}
