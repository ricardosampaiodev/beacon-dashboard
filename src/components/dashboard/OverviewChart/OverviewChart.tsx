import { AreaChart, Area, ResponsiveContainer, XAxis } from 'recharts';
import type { ICoin } from '../../../types';

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
    <div>
      {/* Gráfico */}
      <div>
        <div>
          <h3>{selectedCoin ? selectedCoin.name : 'Selecione uma moeda'}</h3>
          <span>Visão Geral</span>
        </div>
        <div>Média Mensal</div>
      </div>

      {/* Renderização do Recharts */}
      <div style={{ height: 200, marginTop: 20 }}>
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