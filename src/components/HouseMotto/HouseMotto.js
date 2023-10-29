import styles from "./HouseMotto.module.css";

function HouseMotto() {
  return (
    <div className={styles["motto"]}>
      <span className={styles["motto__text"]}>A song of Fire and Ice.</span>
      <span className={styles["motto__emojis"]}>⚔👑🐉🧟</span>
    </div>
  );
}

export default HouseMotto;
