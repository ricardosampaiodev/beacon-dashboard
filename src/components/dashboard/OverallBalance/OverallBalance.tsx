import bitcoinGlass from '../../../assets/images/bitcoin-glass.webp';
import styles from './OverallBalance.module.css';

export const OverallBalance = () => {
  return (
    <div className={styles.card}>
      <div className={styles['overall-info']}>
        <span className={styles.label}>Saldo total</span>
        <h2 className={styles.balance}>US$ 0,00</h2>
      </div>

      <div className={styles['top-gainer-container']}>
        <div className={styles['top-gainer-info']}>
          <span className={styles['gainer-label']}>Maior Alta</span>
          <div className={styles['gainer-row']}>
            <span className={styles['gainer-name']}>N/A</span>
            <span className={styles['gainer-change']}>+0.00%</span>
          </div>
          <span className={styles['last-24h']}>Últimas 24h</span>
        </div>
        
        <div className={styles['image-wrapper']}>
          <img 
            src={bitcoinGlass} 
            alt="Coins" 
            className={styles['gainer-image']}
          />
        </div>
      </div>
    </div>
  );
};