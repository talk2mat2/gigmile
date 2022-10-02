import React from "react";
import { Input, Button, Space, Row, Tabs } from "antd";
import { UserOutlined, SearchOutlined } from "@ant-design/icons";
import ActiveTable from "./activeTable";
import DeclinedTable from "./declined";
import PendingTable from "./pending";
import Completedtable from "./completed";
const CaptinsTable = () => {
  return (
    <div className="mt-[49px] m-1 max-w-[68.75rem]">
      <Row className=" justify-between items-center">
        <h6 className="tt-header">
          Gigmile Captains on Working Capital Service Requests
        </h6>
        <Row className="items-center flex-wrap">
          <Space className="w-[239px] h-[43px]">
            <Input
              style={{ border: "1px solid #D9DADE", borderRadius: "32px" }}
              placeholder="Search"
              suffix={<SearchOutlined />}
            />
          </Space>
          <Button
            style={{
              border: "1px solid #D9DADE",
              borderRadius: "32px",
              height: "33px",
              width: "106px",
              display:"flex",
              alignItems:"center",
              justifyContent:"center"
            }}
            type="ghost"
            size="small"
          >
            filter By <img className="ml-1" width="15px" src="./assets/filter-list.png"/>
          </Button>
        </Row>
      </Row>
      <Space
        className="w-[90vw] md:w-full lg:w-full mt-[35px] p-2 md:p-[30px] rounded-lg overflow-x-hidden"
        style={{ border: "0.5px solid #D9DADE" }}
      >
        <Tabs className="justify-start w-[80%] md:w-full overflow-x-scroll md:verflow-auto lg:overflow-auto"  defaultActiveKey="1">
          <Tabs.TabPane tab="Active" key="1">
            <ActiveTable />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Pending" key="2">
            <PendingTable />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Completed" key="3">
            <Completedtable />
          </Tabs.TabPane>
          <Tabs.TabPane tab="Declined" key="4">
          <DeclinedTable/>
          </Tabs.TabPane>
        </Tabs>
      </Space>
    </div>
  );
};

export default CaptinsTable;
