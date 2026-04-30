// Aqui renderizamos o gráfico bonito usando Recharts.
import { useMemo } from "react";
import { AreaChart, Area, ResponsiveContainer, Tooltip, XAxis } from "recharts";
import type { ICoin } from "../../../types";
import styles from "./OverviewChart.module.css";

interface OverviewChartProps {
  selectedCoin: ICoin | null;
}

export const OverviewChart: React.FC<OverviewChartProps> = ({
  selectedCoin,
}) => {
  const chartData = useMemo(() => {
    if (!selectedCoin || !selectedCoin.sparkline_in_7d) return [];

    const prices = selectedCoin.sparkline_in_7d.price;
    const days = ["Seg", "Ter", "Qua", "Qui", "Sex", "Sab", "Dom"];

    const step = Math.floor(prices.length / 7);
    return Array.from({ length: 7 }).map((_, i) => {
      const priceIndex = i * step;
      return {
        name: days[i],
        val: prices[priceIndex] || 0,
      };
    });
  }, [selectedCoin]);

  return (
    <div className={styles.card}>
      <div className={styles.header}>
        <div className={styles["title-info"]}>
          <h3 className={styles["coin-name"]}>
            {selectedCoin ? selectedCoin.name : "Selecione uma moeda"}
          </h3>
          <span className={styles["overview-text"]}>Visão Geral</span>
        </div>

        <div className={styles["avg-text"]}>Média Mensal</div>
      </div>

      <div className={styles["chart-wrapper"]}>
        <ResponsiveContainer width="100%" height="100%">
          <AreaChart
            data={chartData}
            margin={{ top: 10, right: 15, left: 15, bottom: 0 }}
          >
            <defs>
              <linearGradient id="colorVal" x1="0" y1="0" x2="0" y2="1">
                <stop offset="5%" stopColor="#4c8ff8" stopOpacity={0.3} />
                <stop offset="95%" stopColor="#4c8ff8" stopOpacity={0} />
              </linearGradient>
            </defs>
            <Tooltip
              contentStyle={{
                background: "#0e0f11",
                border: "1px solid #5f646d",
                borderRadius: "8px",
              }}
              itemStyle={{ color: "#e9e9e9" }}
              labelStyle={{ display: "none" }}
              formatter={(value: any) => [
                `$${Number(value).toFixed(2)}`,
                "Preço",
              ]}
            />
            <XAxis
              dataKey="name"
              stroke="#7b7b7b"
              axisLine={false}
              tickLine={false}
              tick={{ fontSize: 14, fontFamily: "Poppins" }}
              dy={10}
              interval={0}
            />
            <Area
              type="monotone"
              dataKey="val"
              stroke="#4c8ff8"
              strokeWidth={3}
              fillOpacity={1}
              fill="url(#colorVal)"
            />
          </AreaChart>
        </ResponsiveContainer>
      </div>
    </div>
  );
};