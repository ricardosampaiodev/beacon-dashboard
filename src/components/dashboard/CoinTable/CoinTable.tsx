import { Star } from 'lucide-react';

export const CoinTable = () => {
  return (
    <div>
      <h2>Dashboard</h2>

      <div>
        <span>Moeda</span>
        <span>Preço</span>
        <span>Variação 24h</span>
        <span>Favoritar</span>
      </div>

      <div>
        <div>
          <div>
            <img src="" alt="Icon" />
            <div>
              <span>Bitcoin</span>
              <span>BTC</span>
            </div>
          </div>

          <div>
            <span>US$ 0,00</span>
          </div>

          <div>
            <span>+0.00%</span>
          </div>

          <div>
            <button>
              <Star size={24} color="#ccc" />
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};