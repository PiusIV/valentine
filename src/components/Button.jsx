import styles from "./Button.module.css";

function Button({ children, onClick }) {
  return (
    <div className={styles.container_btn}>
      <button onClick={onClick}>{children}</button>
    </div>
  );
}

export default Button;
