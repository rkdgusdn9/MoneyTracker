import { useState } from "react";
import styles from "./Ledger.module.css";

export default function Ledger() {
  // TODO: Replace with actual API calls when backend is ready
  const [balanceData, setBalanceData] = useState({
    totalBalance: null,
    weeklySpending: null,
    weeklyAvailable: null,
  });

  // TODO: Implement API call
  // useEffect(() => {
  //   const fetchBalanceData = async () => {
  //     try {
  //       const response = await fetch('/api/balance');
  //       const data = await response.json();
  //       setBalanceData(data);
  //     } catch (error) {
  //       console.error('Failed to fetch balance data:', error);
  //     }
  //   };
  //   fetchBalanceData();
  // }, []);

  return (
    <div className={styles.container}>
      <div className={styles.balanceContainer}>
        <div className={styles.totalBalance}>
          <h2>Total Balance</h2>
          <span className={styles.amount}>
            {balanceData.totalBalance ? `$${balanceData.totalBalance}` : "-"}
          </span>
        </div>
      </div>
      <div className={styles.weeklyContainer}>
        <div className={styles.weeklyItem}>
          <h3>Spending this week</h3>
          <span className={styles.amount}>
            {balanceData.weeklySpending
              ? `$${balanceData.weeklySpending}`
              : "-"}
          </span>
        </div>
        <div className={styles.weeklyItem}>
          <h3>Available this week</h3>
          <span className={styles.amount}>
            {balanceData.weeklyAvailable
              ? `$${balanceData.weeklyAvailable}`
              : "-"}
          </span>
        </div>
      </div>
    </div>
  );
}
