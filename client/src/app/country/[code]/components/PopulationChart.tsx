import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from "recharts";
import { PopulationCounts } from "../page";

interface PopulationChartProps {
  data: PopulationCounts[];
}

export function PopulationChart({ data }: PopulationChartProps) {
  return (
    <ResponsiveContainer width="100%" height={300}>
      <LineChart
        width={500}
        height={300}
        data={data}
        margin={{
          top: 5,
          right: 30,
          left: 20,
          bottom: 5,
        }}
      >
        <CartesianGrid strokeDasharray="3 3" />
        <XAxis dataKey="year" />
        <YAxis dataKey="value" />
        <Tooltip
          formatter={(value: number, name: string) => {
            if (name === "value") {
              return new Intl.NumberFormat("en-US").format(value);
            }
            return value;
          }}
        />
        <Legend />
        <Line
          type="monotone"
          dataKey="value"
          stroke="#8884d8"
          activeDot={{ r: 8 }}
        />
        <Line type="monotone" dataKey="year" stroke="#82ca9d" />
      </LineChart>
    </ResponsiveContainer>
  );
}
