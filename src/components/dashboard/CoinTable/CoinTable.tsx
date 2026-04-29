import { Star } from 'lucide-react';
import styles from './CoinTable.module.css';

export const CoinTable = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Dashboard</h2>
      
      <div className={styles['table-header']}>
        <span className={styles['col-coin']}>Moeda</span>
        <span className={styles['col-price']}>Preço</span>
        <span className={styles['col-change']}>Variação 24h</span>
        <span className={styles['col-favorite']}>Favoritar</span>
      </div>

      <div className={styles['table-body']}>
        <div className={styles['table-row']}>
          <div className={styles['col-coin']}>
            <img src="" alt="Icon" className={styles['coin-icon']} />
            <div className={styles['coin-info']}>
              <span className={styles['coin-name']}>Bitcoin</span>
              <span className={styles['coin-symbol']}>BTC</span>
            </div>
          </div>

          <div className={styles['col-price']}>
            <span className={styles.price}>US$ 0,00</span>
          </div>

          <div className={styles['col-change']}>
            <span className={styles.change}>+0.00%</span>
          </div>

          <div className={styles['col-favorite']}>
            <button className={styles['favorite-btn']}>
              <Star size={24} color="#ccc" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};