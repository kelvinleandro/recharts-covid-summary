"use client";

import React, { useEffect, useState } from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Tooltip,
  ResponsiveContainer,
} from "recharts";
import { apiService } from "@/services/api";
import { TimeLine } from "@/types";

interface Props {
  country: string;
}

const VaccineChart = ({ country }: Props) => {
  const [coverageData, setCoverageData] = useState<TimeLine | null>(null);

  useEffect(() => {
    const fetchData = async () => {
      const data = await apiService.getVaccineCoverage(country);
      const timeline = ("country" in data ? data.timeline : data) as TimeLine;

      setCoverageData(timeline);
    };

    fetchData();
  }, [country]);

  const chartData = coverageData
    ? Object.entries(coverageData).map(([date, value]) => ({
        date,
        value,
      }))
    : [];

  return (
    <div style={{ width: "100%", height: 400 }}>
      {chartData.length > 0 ? (
        <ResponsiveContainer width="100%" height="100%">
          <LineChart data={chartData}>
            <XAxis
              dataKey="date"
              tickFormatter={(date) => new Date(date).getFullYear().toString()}
              label={{
                value: "Year",
                position: "insideBottomRight",
                offset: -5,
              }}
            />
            <YAxis
              tickFormatter={(value) => `${Math.floor(value / 1_000_000_000)}B`}
              label={{
                value: "Coverage",
                angle: -90,
                position: "insideLeft",
              }}
            />
            <Tooltip
              formatter={(value: number) =>
                `${(value / 1_000_000_000).toFixed(2)}B`
              }
              labelFormatter={(label) => `Date: ${label}`}
              labelStyle={{ color: "black" }}
              itemStyle={{ color: "black" }}
            />
            <Line
              type="monotone"
              dataKey="value"
              stroke="#8884d8"
              dot={false}
            />
          </LineChart>
        </ResponsiveContainer>
      ) : (
        <p>Loading data...</p>
      )}
    </div>
  );
};

export default VaccineChart;
