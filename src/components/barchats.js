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
} from "recharts";
const data = [
  {
    name: "Repair Advance",
    uv: 4000,
    value: 40000,
    amt: 2400,
  },
  {
    name: "Fuel Advance",
    uv: 3000,
    value: 30000,
    amt: 2210,
  },
  {
    name: "Salary Advance",
    uv: 2000,
    value: 18000,
    amt: 2290,
  },
];

const Barchats = () => {
  return (
    <div className="mt-auto" style={{ width: "100%", height: "172px" }}>
      <ResponsiveContainer width="95%"  height="100%">
        <BarChart
          className=""
          style={{ padding: "0", width: "100%" }}
          data={data}
        >
          <XAxis
            tick={{
              fill: "#808080",
              fontWeight: "300",
              fontFamily: "Roboto-light",
            }}
            dataKey="name"
          />
          <YAxis
            tick={{ fill: "#A0AEC0", fontWeight: "300" }}
            fontStyle={{ fontSize: "20px" }}
          />
          <Tooltip />

          <Bar dataKey="value" fill="#1DB385" />
        </BarChart>
      </ResponsiveContainer>
    </div>
  );
};

export default Barchats;

{
  /* <ResponsiveContainer width={400} height="80%">
<BarChart
  className=""
  style={{ padding: "0", width: "100%" }}
  data={data}
>


  <XAxis
    tick={{
      fill: "#808080",
      fontWeight: "300",
      fontFamily: "Roboto-light",
    }}
    dataKey="name"
  />
  <YAxis
    tick={{ fill: "#808080", fontWeight: "300" }}
    fontStyle={{ fontSize: "20px" }}
  />
  <Tooltip />
 
  <Bar dataKey="value" fill="#1DB385" />
</BarChart>
</ResponsiveContainer> */
}
/* <BarChart  className=""  style={{ padding:"0",width:"100%"}} barSize={110} width={460} height={172} data={data}> */
