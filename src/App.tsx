import { useState, useEffect } from 'react';
import { fetchTopCoins } from './services/api';
import type { ICoin } from './types';
import { Sidebar } from './components/layout/Sidebar/Sidebar';
import { Topbar } from './components/layout/Topbar/Topbar';
import styles from './App.module.css';

import glowTopGray from './assets/glows/glow top gray.svg';
import glowTopGray1 from './assets/glows/glow top gray-1.svg';
import glowBlackBottom from './assets/glows/glow black bottom.svg';
import glowBlackBottom1 from './assets/glows/glow black bottom-1.svg';
import glowBlackTop from './assets/glows/glow black top.svg';

export default function App() {
  // Estados Principais (Dados da API)
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estados de Interação (Navegação)
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState<'home' | 'favorites'>('home');

  // Lifecycle: Buscar moedas iniciais
  useEffect(() => {
    const loadCoins = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTopCoins();
        setCoins(data);
      } catch (err: any) {
        setError("Fizemos muitas buscas rápidas! A API da CoinGecko pediu um pequeno descanso. Por favor, aguarde 1 minuto e recarregue a página");
      } finally {
        setLoading(false);
      }
    };
    loadCoins();
  }, []);

  if (loading) {
    return <div className={styles['center-feedback']}><div className={styles.spinner}></div></div>;
  }
  if (error) {
    return <div className={styles['center-feedback']}><p className={styles['error-text']}>{error}</p></div>;
  }

  return (
    <div className={styles.layout}>
      <div className={styles['glow-container']}>
        <img src={glowTopGray} className={styles['glow-1']} alt="" />
        <img src={glowTopGray1} className={styles['glow-2']} alt="" />
        <img src={glowBlackTop} className={styles['glow-3']} alt="" />
        <img src={glowBlackBottom} className={styles['glow-4']} alt="" />
        <img src={glowBlackBottom1} className={styles['glow-5']} alt="" />
      </div>

      <Topbar searchQuery={searchQuery} onSearchChange={setSearchQuery} />
      <Sidebar currentTab={currentTab} onChangeTab={setCurrentTab} />

      <main className={styles['main-content']}>

        <div style={{color: 'white', zIndex: 10, position: 'relative', marginTop: 150, marginLeft: 150}}>
          <h1>Navegação Pronta</h1>
          <p>Temos {coins.length} moedas salvas na memória, aguardando a renderização do Dashboard.</p>
        </div>
      </main>
    </div>
  );
}