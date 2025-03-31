import styles from "./input.module.css";

export default function UnstyledInput({ children, ...rest }) {
  return (
    <input {...rest} className={`${styles.input} ${rest.className || ""}`} />
  );
}
