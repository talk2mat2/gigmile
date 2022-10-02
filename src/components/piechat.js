import React from "react";
import {
  LineChart,
  Line,
  XAxis,
  YAxis,
  Bar,
  CartesianGrid,
  Tooltip,
  Legend,
  ReferenceArea,
  ReferenceLine,
  Area,
  AreaChart,
  ResponsiveContainer,
  BarChart,
  PieChart,
  Pie,
  Cell,
} from "recharts";

const data02 = [
  {
    name: "Group A",
    value: 2400,
  },
  {
    name: "Group B",
    value: 4567,
  },
  {
    name: "Group C",
    value: 1398,
  },
];
const COLORS = ["#f95d44", "dodgerblue", "#1DB385"];

const Piechats = () => {
  return (
    <div className="mt-auto" style={{ width: "100%", height: "172px" }}>
      <ResponsiveContainer width="95%" height="100%">
        <PieChart width={730} height={250}>
        <Tooltip />
          <Pie
            data={data02}
            dataKey="value"
            nameKey="name"
            cx="50%"
            cy="50%"
            innerRadius={60}
            outerRadius={80}
            fill="#82ca9d"
            
          >
            {data02.map((entry, index) => (
              <Cell fill={COLORS[index % COLORS.length]} />
            ))}
          </Pie>
        </PieChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Piechats;
