import { useState, useEffect } from 'react';
import { fetchTopCoins } from './services/api';
import type { ICoin } from './types';
import styles from './App.module.css';
import glowTopGray from './assets/glows/glow top gray.svg';
import glowTopGray1 from './assets/glows/glow top gray-1.svg';
import glowBlackBottom from './assets/glows/glow black bottom.svg';
import glowBlackBottom1 from './assets/glows/glow black bottom-1.svg';
import glowBlackTop from './assets/glows/glow black top.svg';


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
      {/* Background glows */}
      <div className={styles['glow-container']}>
        <img src={glowTopGray} className={styles['glow-1']} alt="" />
        <img src={glowTopGray1} className={styles['glow-2']} alt="" />
        <img src={glowBlackTop} className={styles['glow-3']} alt="" />
        <img src={glowBlackBottom} className={styles['glow-4']} alt="" />
        <img src={glowBlackBottom1} className={styles['glow-5']} alt="" />
      </div>

      {/* Teste temporario pra ver se a API conectou de verdade na tela preta */}
      <h2 style={{ color: 'white', position: 'relative', zIndex: 1 }}>
        Moedas Carregadas com Sucesso: {coins.length}
      </h2>
    </div>
  );
}
