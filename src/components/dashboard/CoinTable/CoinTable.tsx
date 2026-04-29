import { Star } from 'lucide-react';
import type { ICoin } from '../../../types';
import { formatCurrency, formatPercentage } from '../../../utils/formatters';
import styles from './CoinTable.module.css';

interface CoinTableProps {
  coins: ICoin[];
  selectedCoinId: string | null;
  favorites: string[];
  onSelectCoin: (coin: ICoin) => void;
}

export const CoinTable: React.FC<CoinTableProps> = ({ 
  coins, 
  selectedCoinId, 
  favorites, 
  onSelectCoin 
}) => {
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
        {coins.length === 0 ? (
          <div style={{ padding: '40px', textAlign: 'center', color: 'var(--text-muted)' }}>
            Nenhuma criptomoeda encontrada por aqui.
          </div>
        ) : (
          coins.map((coin) => {
            const isFavorite = favorites.includes(coin.id);
            const isSelected = selectedCoinId === coin.id;

            return (
              <div 
                key={coin.id} 
                className={`${styles['table-row']} ${isSelected ? styles['selected-row'] : ''}`}
                onClick={() => onSelectCoin(coin)}
              >
                <div className={styles['col-coin']}>
                  <img src={coin.image} alt={coin.name} className={styles['coin-icon']} />
                  <div className={styles['coin-info']}>
                    <span className={styles['coin-name']}>{coin.name}</span>
                    <span className={styles['coin-symbol']}>{coin.symbol?.toUpperCase() || ''}</span>
                  </div>
                </div>

                <div className={styles['col-price']}>
                  <span className={styles.price}>{formatCurrency(coin.current_price)}</span>
                </div>

                <div className={styles['col-change']}>
                  <span className={`${styles.change} ${coin.price_change_percentage_24h < 0 ? styles.negative : ''}`}>
                    {formatPercentage(coin.price_change_percentage_24h)}
                  </span>
                </div>

                <div className={styles['col-favorite']}>
                  <button className={styles['favorite-btn']}>
                    <Star 
                      size={24} 
                      color={isFavorite ? "#facc15" : "#ccc"} 
                      style={{ opacity: isFavorite ? 1 : 0.5 }}
                      fill={isFavorite ? "#facc15" : "none"}
                    />
                  </button>
                </div>
              </div>
            );
          })
        )}
      </div>
    </div>
  );
};