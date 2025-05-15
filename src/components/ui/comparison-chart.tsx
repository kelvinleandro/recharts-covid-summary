"use client";

import React, { useEffect, useState } from "react";
import {
  BarChart,
  Bar,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { CovidTimelineKey } from "@/types";
import { apiService } from "@/services/api";

type Props = {
  sortBy: CovidTimelineKey;
};

interface CountryCovidData {
  country: string;
  cases: number;
  deaths: number;
  recovered: number;
}

const ComparisonChart = ({ sortBy }: Props) => {
  const [chartData, setChartData] = useState<CountryCovidData[]>([]);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiService.getCovidAllCountries(sortBy);

      const topFive = data.slice(0, 5);

      setChartData(topFive);
    };

    fetchData();
  }, [sortBy]);

  return (
    <div style={{ width: "100%", height: 400 }}>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <BarChart
            data={chartData}
            layout="vertical"
            margin={{ top: 20, right: 30, left: 100, bottom: 20 }}
          >
            <XAxis
              type="number"
              tickFormatter={(value) => `${(value / 1_000_000).toFixed(0)}M`}
            />
            <YAxis dataKey="country" type="category" />
            <Tooltip
              formatter={(value: number) =>
                `${(value / 1_000_000).toFixed(2)}M`
              }
              itemStyle={{ color: "black" }}
            />
            <Bar dataKey={sortBy} fill="#8884d8" />
          </BarChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default ComparisonChart;
