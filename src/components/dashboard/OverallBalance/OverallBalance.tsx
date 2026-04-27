import bitcoinGlass from '../../../assets/images/bitcoin-glass.webp';

export const OverallBalance = () => {
  return (
    <div>
      
      {/* Saldo */}
      <div>
        <span>Saldo total</span>
        <h2>US$ 0,00</h2>
      </div>

      {/* Maior Alta */}
      <div>
        <div>
          <span>Maior Alta</span>
          <div>
            <span>N/A</span>
            <span>+0.00%</span>
          </div>
          <span>Últimas 24h</span>
        </div>
        
        <div>
          <img 
            src={bitcoinGlass} 
            alt="Coins" 
          />
        </div>

      </div>
    </div>
  );
};