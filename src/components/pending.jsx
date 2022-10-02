import React from "react";
import { Space, Table, Switch, Avatar } from "antd";

const columns = [
  {
    title: "Captain",
    width: 170,
    dataIndex: "name",
    key: "name",
    fixed: "left",
    render: (data) => (
      <div>
        <Avatar
          ti
          size={25}
          style={{ background: "#1DB385", display: "inline-block" }}
        >{data?.[0]}</Avatar>
        <h6 className="inline-block ml-3">{data}</h6>
      </div>
    ),
  },

  {
    title: "Working Capital",
    dataIndex: "workingCapital",
    key: "1",
    width: 90,
  },
  {
    title: "Total Request Value",
    width: 90,
    dataIndex: "totalRequest",
    key: "age",
    fixed: "left",
  },
  {
    title: "Total Balance",
    dataIndex: "workingCapital",
    key: "2",
    width: 90,
  },
];
const data = [];

for (let i = 0; i < 7; i++) {
  data.push({
    key: i,
    name: `Michealson Alan Richard `,
    totalRequest: "N 1,090,890.00",
    workingCapital: `Fuel Advance`,
  });
}
const PendingTable = () => {
  const [fixedTop, setFixedTop] = React.useState(false);
  return (
    <Space className="min-h-[400px]  overflow-x-auto">
      <Table
        columns={columns}
        dataSource={data}
        scroll={{
          x: "100%",
        }}
        pagination={{
          position: ["none", "bottomCenter"],
        }}
      />
    </Space>
  );
};

export default PendingTable;
