import { useState } from 'react';
import type { ICoin } from './types';
import styles from './App.module.css';

export default function App() {
  // Estados Principais de API
  const [coins, setCoins] = useState<ICoin[]>([]);
  const [loading, setLoading] = useState(true);
  const [error, setError] = useState<string | null>(null);

  // Renderização Condicional de Feedback
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
    </div>
  );
}
