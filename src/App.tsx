import { useState, useEffect } from 'react';
import { fetchTopCoins } from './services/api';
import type { ICoin } from './types';
import styles from './App.module.css';

export default function App() {
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Buscar moedas iniciais na montagem do componente
  useEffect(() => {
    const loadCoins = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTopCoins();
        setCoins(data);
      } catch (err: any) {
        setError("Fizemos muitas buscas rápidas! A API da CoinGecko pediu um pequeno descanso.");
      } finally {
        setLoading(false);
      }
    };
    loadCoins();
  }, []);

  if (loading) {
    return <div className={styles.layout}>Carregando o painel...</div>;
  }
  
  if (error) {
    return <div className={styles.layout}>Erro Crítico: {error}</div>;
  }

  return (
    <div className={styles.layout}>
      {
        
      }
      <h2>Moedas Carregadas com Sucesso: {coins.length}</h2>
    </div>
  );
}
