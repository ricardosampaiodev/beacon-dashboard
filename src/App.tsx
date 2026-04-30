import { useState, useEffect } from 'react';
import { fetchTopCoins } from './services/api';
import type { ICoin } from './types';
import { Sidebar } from './components/layout/Sidebar/Sidebar';
import { Topbar } from './components/layout/Topbar/Topbar';
import { OverallBalance } from './components/dashboard/OverallBalance/OverallBalance';
import { OverviewChart } from './components/dashboard/OverviewChart/OverviewChart';
import { CoinTable } from './components/dashboard/CoinTable/CoinTable';
import { MarketDetails } from './components/dashboard/MarketDetails/MarketDetails';
import styles from './App.module.css';

import glowTopGray from './assets/glows/glow top gray.svg';
import glowTopGray1 from './assets/glows/glow top gray-1.svg';
import glowBlackBottom from './assets/glows/glow black bottom.svg';
import glowBlackBottom1 from './assets/glows/glow black bottom-1.svg';
import glowBlackTop from './assets/glows/glow black top.svg';

export default function App() {
  // Estados Principais
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Estados de Interação
  const [searchQuery, setSearchQuery] = useState('');
  const [currentTab, setCurrentTab] = useState<'home' | 'favorites'>('home');
  const [favorites, setFavorites] = useState<string[]>([]);
  const [selectedCoinId, setSelectedCoinId] = useState<string | null>(null);

  // Lifecycle: Buscar moedas iniciais
  useEffect(() => {
    const loadCoins = async () => {
      try {
        setLoading(true);
        setError(null);
        const data = await fetchTopCoins();
        setCoins(data);
        if (data.length > 0) {
          setSelectedCoinId(data[0].id); // Seleciona a primeira por padrão
        }
      } catch (err: any) {
        setError("Fizemos muitas buscas rápidas! A API da CoinGecko pediu um pequeno descanso. Por favor, aguarde 1 minuto e recarregue a página");
      } finally {
        setLoading(false);
      }
    };
    loadCoins();
  }, []);

  // Lógica de Filtro Básica e Derivada
  let filteredCoins = coins;
  
  if (currentTab === 'favorites') {
    filteredCoins = filteredCoins.filter(coin => favorites.includes(coin.id));
  }
  
  if (searchQuery.trim() !== '') {
    const lowerQuery = searchQuery.toLowerCase();
    filteredCoins = filteredCoins.filter(
      coin => coin.name.toLowerCase().includes(lowerQuery) || coin.symbol.toLowerCase().includes(lowerQuery)
    );
  }

  // Capturando qual é a moeda que devemos repassar ao gráfico e ao Mercado
  const selectedCoin = coins.find(c => c.id === selectedCoinId) || null;

  // Calculando somas e destaques baseados no que está filtrado na tela atual
  const totalBalance = filteredCoins.reduce((sum, coin) => sum + (coin.market_cap || 0), 0);
  
  const topGainer = filteredCoins.length > 0 
    ? [...filteredCoins].sort((a, b) => b.price_change_percentage_24h - a.price_change_percentage_24h)[0]
    : null;

  // Ações
  const handleToggleFavorite = (coinId: string) => {
    setFavorites(prev => prev.includes(coinId) 
      ? prev.filter(f => f !== coinId) 
      : [...prev, coinId]
    );
  };

  // Renderização Condicional Inicial
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
        <div className={styles['top-section']}>
          <OverallBalance totalBalance={totalBalance} topGainer={topGainer} />
          <OverviewChart selectedCoin={selectedCoin} />
        </div>

        <div className={styles['bottom-section']}>
          <CoinTable 
            coins={filteredCoins}
            selectedCoinId={selectedCoinId}
            favorites={favorites}
            onSelectCoin={(coin) => setSelectedCoinId(coin.id)}
            onToggleFavorite={handleToggleFavorite}
          />
          <MarketDetails selectedCoin={selectedCoin} />
        </div>

      </main>
    </div>
  );
}