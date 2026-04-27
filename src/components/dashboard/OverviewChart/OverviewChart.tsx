import { AreaChart, Area, ResponsiveContainer, XAxis } from 'recharts';
import type { ICoin } from '../../../types';
import styles from './OverviewChart.module.css';

interface OverviewChartProps {
  selectedCoin: ICoin | null;
}

const mockData = [
  { name: 'Seg', val: 10 },
  { name: 'Ter', val: 15 },
  { name: 'Qua', val: 8 },
  { name: 'Qui', val: 12 },
  { name: 'Sex', val: 20 },
  { name: 'Sab', val: 18 },
  { name: 'Dom', val: 25 },
];

export const OverviewChart: React.FC<OverviewChartProps> = ({ selectedCoin }) => {
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
          <AreaChart data={mockData}>
            <XAxis dataKey="name" />
            <Area type="monotone" dataKey="val" stroke="#4c8ff8" fill="#4c8ff8" />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};