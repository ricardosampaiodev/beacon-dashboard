import styles from './MarketDetails.module.css';

export const MarketDetails = () => {
  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Mercado</h2>

      <div className={styles['info-grid']}>
        <div className={styles['info-row']}>
          <div className={styles['info-group']}>
            <span className={styles.label}>Moeda</span>
            <div className={styles['coin-badge']}>
              <img src="" alt="Icon" className={styles['coin-icon']} />
              <div className={styles['coin-info-text']}>
                <span className={styles['coin-name']}>Bitcoin</span>
                <span className={styles['coin-symbol']}>BTC</span>
              </div>
            </div>
          </div>
          
          <div className={styles['info-group']}>
            <span className={styles.label}>Máxima histórica</span>
            <span className={styles.value}>US$ 0,00</span>
          </div>
        </div>

        <div className={styles['info-row']}>
          <div className={styles['info-group']}>
            <span className={styles.label}>Fornecimento total</span>
            <span className={styles.value}>N/A</span>
          </div>

          <div className={styles['info-group']}>
            <span className={styles.label}>Mínimo histórico</span>
            <span className={styles.value}>US$ 0,00</span>
          </div>
        </div>
      </div>
    </div>
  );
};