export const MarketDetails = () => {
  return (
    <div>
      <h2>Mercado</h2>

      <div>
        {/* Linha Superior */}
        <div>
          <div>
            <span>Moeda</span>
            <div>
              <img src="" alt="Icon" />
              <div>
                <span>Bitcoin</span>
                <span>BTC</span>
              </div>
            </div>
          </div>
          
          <div>
            <span>Máxima histórica</span>
            <span>US$ 0,00</span>
          </div>
        </div>

        {/* Linha Inferior */}
        <div>
          <div>
            <span>Fornecimento total</span>
            <span>N/A</span>
          </div>

          <div>
            <span>Mínimo histórico</span>
            <span>US$ 0,00</span>
          </div>
        </div>
      </div>
    </div>
  );
};