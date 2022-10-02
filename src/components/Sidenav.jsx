import React from "react";
import { Avatar } from "antd";
import { UserOutlined, CloseOutlined } from "@ant-design/icons";
import { Divider, List, Typography } from "antd";
const SideNav = ({ toggleNav }) => {
  return (
    <div className="side-nav fixed md:static lg:static z-10">
      <div
        onClick={toggleNav}
        className="md:hidden lg:hidden absolute right-4 top-4"
      >
        <CloseOutlined style={{ fontSize: "20px", color: "#474f54" }} />
      </div>
      <section>
        <img src="./logo.png" className="px-3" />
        <div className="mt-[24px] pl-4 flex flex-row items-center bg-grey rounded h-[70px]">
          <Avatar src="./Avatar.png" size={45} icon={<UserOutlined />} />
          <div className="ml-3">
            <h6 className="tt-header-sub">Micheal Essien</h6>
            <p className="tt-sub-text">Administrator</p>
          </div>
        </div>
      </section>
      <ul style={{ height: "89%" }} className="mt-[24px] flex flex-col">
        <li className="rounded-lg h-[40px] px-3 flex flex-row items-center mb-[6px] listitems cursor-pointer ">
          <img className="w-[20px]" src="./assets/Home.png" alt="" />
          <h6 className="px-2">Dashboard</h6>
        </li>
        <li className="rounded-lg h-[40px] px-3 flex flex-row items-center my-[4px]  listitems   cursor-pointer ">
          <img className="w-[20px]" src="./assets/people.png" alt="" />
          <h6 className="px-2"> Captains</h6>
        </li>
        <li className="rounded-lg h-[40px] px-3 flex flex-row items-center my-[4px]  listitems   cursor-pointer">
          <img className="w-[20px]" src="./assets/paper.png" alt="" />
          <h6 className="px-2">Service Request</h6>
        </li>
        <li className="rounded-lg h-[40px] px-3 flex flex-row items-center my-[4px]  listitems  cursor-pointer">
          <img className="w-[20px]" src="./assets/Group2.png" alt="" />
          <h6 className="px-2">Assets Finacing</h6>
        </li>
        <li className="rounded-lg h-[40px] px-3 flex flex-row items-center my-[4px]  listitems active cursor-pointer">
          <img className="w-[20px]" src="./assets/Group3.png" alt="" />
          <h6 className="px-2">Working Capital</h6>
        </li>
        <li className="rounded-lg h-[40px] px-3 flex flex-row items-center my-[4px]  listitems  cursor-pointer">
          <img className="w-[20px]" src="./assets/Gift.png" alt="" />
          <h6 className="px-2">Ancillary Services</h6>
        </li>
        <li className="rounded-lg h-[40px] px-3 flex flex-row items-center my-[4px]  listitems  cursor-pointer">
          <img className="w-[20px]" src="./assets/Work.png" alt="" />
          <h6 className="px-2">Services Partners</h6>
        </li>
        <li className="rounded-lg h-[40px] px-3 flex flex-row items-center my-[4px]  listitems  cursor-pointer">
          <img className="w-[20px]" src="./assets/Graph2.png" alt="" />
          <h6 className="px-2">Asset Metrics</h6>
        </li>
        <li className="rounded-lg h-[40px] px-3 flex flex-row items-center my-[4px]  listitems cursor-pointer">
          <img className="w-[20px]" src="./assets/Chart.png" alt="" />
          <h6 className="px-2">Repayments</h6>
        </li>
        <li className="rounded-lg h-[40px] px-3 flex flex-row  my-[4px]  items-center listitems cursor-pointer">
          <img className="w-[20px]" src="./assets/Setting.png" alt="" />
          <h6 className="px-2">Settings</h6>
        </li>
        <li className="mt-auto rounded-lg h-[40px] px-3 flex flex-row  my-[4px]  items-center listitems cursor-pointer">
          <img className="w-[20px]" src="./assets/log.png" alt="" />
          <h6 className="px-2">Log Out</h6>
        </li>
      </ul>
    </div>
  );
};

export default SideNav;
