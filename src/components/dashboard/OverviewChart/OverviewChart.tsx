import { useMemo } from 'react';
import { AreaChart, Area, ResponsiveContainer, XAxis } from 'recharts';
import type { ICoin } from '../../../types';
import styles from './OverviewChart.module.css';

interface OverviewChartProps {
  selectedCoin: ICoin | null;
}

export const OverviewChart: React.FC<OverviewChartProps> = ({ selectedCoin }) => {
  const chartData = useMemo(() => {
    if (!selectedCoin || !selectedCoin.sparkline_in_7d) return [];
    
    const prices = selectedCoin.sparkline_in_7d.price;
    const days = ['Seg', 'Ter', 'Qua', 'Qui', 'Sex', 'Sab', 'Dom'];
    
    const step = Math.floor(prices.length / 7);
    return Array.from({ length: 7 }).map((_, i) => {
      const priceIndex = i * step;
      return {
        name: days[i],
        val: prices[priceIndex] || 0
      }
    });
  }, [selectedCoin]);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles['title-info']}>
          <h3 className={styles['coin-name']}>{selectedCoin ? selectedCoin.name : 'Selecione uma moeda'}</h3>
          <span className={styles['overview-text']}>Visão Geral</span>
        </div>
        <div className={styles['avg-text']}>Média Mensal</div>
      </div>

      <div className={styles['chart-wrapper']}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart data={chartData}>
            <XAxis dataKey="name" />
            <Area type="monotone" dataKey="val" stroke="#4c8ff8" fill="#4c8ff8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};