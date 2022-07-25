import styles from "./Logo.module.css";
import rocketImage from "../assets/rocket.svg";

export function Logo() {
  return (
    <div className={styles.logoContainer}>
      <img src={rocketImage} alt="rocket logo" />
      <h1>
        <span className={styles.textBlue}>to</span>
        <span className={styles.textPurpleDark}>do</span>
      </h1>
    </div>
  );
}
