import styles from "./Navbar.module.css";
import { Link } from "react-router-dom";

export default function Navbar() {
  return (
    <div className={styles.main}>
      <div className={styles.leftSection}>
        <span className={styles.logo}>BennyMoney</span>
      </div>
      <div className={styles.centerSection}>
        <Link to="/" className={styles.navButton}>
          Home
        </Link>
        <Link to="/about" className={styles.navButton}>
          About
        </Link>
        <Link to="/ledger" className={styles.navButton}>
          Ledger
        </Link>
        <Link to="/summary" className={styles.navButton}>
          Summary
        </Link>
      </div>
      <div className={styles.rightSection}>
        <Link to="/login" className={styles.authButton}>
          Login
        </Link>
        <Link to="/signup" className={styles.authButton}>
          Sign Up
        </Link>
      </div>
    </div>
  );
}
