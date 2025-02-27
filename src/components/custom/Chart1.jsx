"use client";
import { useState, useEffect } from "react";
import {
  Bar,
  BarChart,
  Tooltip,
  XAxis,
  YAxis,
  ResponsiveContainer,
  Legend,
  LabelList,
} from "recharts";
import { ChartContainer } from "@/components/ui/chart";

const fullChartData = [
  {
    month: "January",
    bajari: 150,
    eait: 100,
    bajarfot: 80,
    wood: 50,
    cement: 200,
  },
  {
    month: "February",
    bajari: 180,
    eait: 130,
    bajarfot: 90,
    wood: 70,
    cement: 250,
  },
  {
    month: "March",
    bajari: 200,
    eait: 140,
    bajarfot: 100,
    wood: 90,
    cement: 255,
  },
  {
    month: "April",
    bajari: 170,
    eait: 120,
    bajarfot: 85,
    wood: 60,
    cement: 220,
  },
  { month: "May", bajari: 190, eait: 150, bajarfot: 95, wood: 80, cement: 240 },
  {
    month: "June",
    bajari: 210,
    eait: 160,
    bajarfot: 110,
    wood: 100,
    cement: 280,
  },
];

const chartConfig = {
  bajari: { label: "Bajari", color: "#F59E0B" }, // Orange
  eait: { label: "Eait", color: "#EF4444" }, // Red
  bajarfot: { label: "Bajarfot", color: "#6366F1" }, // Blue
  wood: { label: "Wood", color: "#8B5CF6" }, // Purple
  cement: { label: "Cement", color: "#6B7280" }, // Gray
};

export default function Chart1() {
  const [chartData, setChartData] = useState(fullChartData);

  useEffect(() => {
    const updateChartData = () => {
      if (window.innerWidth < 768) {
        setChartData([fullChartData[0], fullChartData[2], fullChartData[4]]); // Show January, March, May
      } else {
        setChartData(fullChartData); // Show full data on large screens
      }
    };

    updateChartData(); // Run on load
    window.addEventListener("resize", updateChartData);
    return () => window.removeEventListener("resize", updateChartData);
  }, []);

  return (
    <ChartContainer config={chartConfig} className="w-full">
      <ResponsiveContainer width="100%" height={350}>
        <div className="ml-10 my-5 bg-muted/100 p-4 rounded-lg w-fit">
          <h2 className="text-xl font-semibold">Bar chart-Muitple</h2>
          <p className="text-gray-800"> January-june-2025</p>
        </div>

        <BarChart
          data={chartData}
          margin={{ top: 20, right: 30, left: 0, bottom: 10 }}
        >
          <XAxis dataKey="month" tick={{ fontSize: 12 }} />
          <YAxis allowDecimals={false} tick={{ fontSize: 12 }} />
          <Tooltip wrapperStyle={{ fontSize: "12px" }} />
          <Legend wrapperStyle={{ fontSize: "12px" }} />

          {Object.keys(chartConfig).map((key) => (
            <Bar
              key={key}
              dataKey={key}
              fill={chartConfig[key].color}
              radius={4}
              barSize={30}
            >
              <LabelList
                dataKey={key}
                position="top"
                style={{ fontSize: "12px", fill: "#333" }}
              />
            </Bar>
          ))}
        </BarChart>
      </ResponsiveContainer>
    </ChartContainer>
  );
}
