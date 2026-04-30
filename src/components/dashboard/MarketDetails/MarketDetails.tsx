// Mostra os detalhes de mercado e curiosidades da moeda selecionada.
import type { ICoin } from "../../../types";
import {
  formatCurrency,
  formatCompactCurrency,
} from "../../../utils/formatters";
import styles from "./MarketDetails.module.css";

interface MarketDetailsProps {
  selectedCoin: ICoin | null;
}

export const MarketDetails: React.FC<MarketDetailsProps> = ({
  selectedCoin,
}) => {
  if (!selectedCoin) return <div className={styles.card}>Carregando...</div>;

  return (
    <div className={styles.card}>
      <h2 className={styles.title}>Mercado</h2>

      <div className={styles["info-grid"]}>
        {/* Row 1 */}
        <div className={styles["info-row"]}>
          <div className={styles["info-group"]}>
            <span className={styles.label}>Moeda</span>
            <div className={styles["coin-badge"]}>
              <img
                src={selectedCoin.image}
                alt={selectedCoin.name}
                className={styles["coin-icon"]}
              />
              <div className={styles["coin-info-text"]}>
                <span className={styles["coin-name"]}>{selectedCoin.name}</span>
                <span className={styles["coin-symbol"]}>
                  {selectedCoin.symbol.toUpperCase()}
                </span>
              </div>
            </div>
          </div>

          <div className={styles["info-group"]}>
            <span className={styles.label}>Máxima histórica</span>
            <span className={styles.value}>
              {formatCurrency(selectedCoin.ath)}
            </span>
          </div>
        </div>

        {/* Row 2 */}
        <div className={styles["info-row"]}>
          <div className={styles["info-group"]}>
            <span className={styles.label}>Fornecimento total</span>
            <span className={styles.value}>
              {selectedCoin.total_supply
                ? `${formatCompactCurrency(selectedCoin.total_supply).replace("$", "")} ${selectedCoin.symbol.toUpperCase()}`
                : "N/A"}
            </span>
          </div>

          <div className={styles["info-group"]}>
            <span className={styles.label}>Mínimo histórico</span>
            <span className={styles.value}>
              {formatCurrency(selectedCoin.atl)}
            </span>
          </div>
        </div>
      </div>
    </div>
  );
};