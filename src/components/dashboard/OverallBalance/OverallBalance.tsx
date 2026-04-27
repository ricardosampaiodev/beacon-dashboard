import type { ICoin } from '../../../types';
import { formatCurrency, formatPercentage } from '../../../utils/formatters';
import styles from './OverallBalance.module.css';
import bitcoinGlass from '../../../assets/images/bitcoin-glass.webp';

interface OverallBalanceProps {
  totalBalance: number;
  topGainer: ICoin | null;
}

export const OverallBalance: React.FC<OverallBalanceProps> = ({ totalBalance, topGainer }) => {
  return (
    <div className={styles.card}>
      <div className={styles['overall-info']}>
        <span className={styles.label}>Saldo total</span>
        <h2 className={styles.balance}>{formatCurrency(totalBalance)}</h2>
      </div>

      <div className={styles['top-gainer-container']}>
        <div className={styles['top-gainer-info']}>
          <span className={styles['gainer-label']}>Maior Alta</span>
          <div className={styles['gainer-row']}>
            <span className={styles['gainer-name']}>{topGainer?.name || 'N/A'}</span>
            <span className={styles['gainer-change']}>{topGainer ? formatPercentage(topGainer.price_change_percentage_24h) : '0%'}</span>
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