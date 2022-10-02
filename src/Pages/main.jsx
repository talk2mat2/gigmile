import {
  SearchOutlined,
  BellOutlined,
  UserOutlined,
  FormOutlined,
  DownOutlined,
  MenuOutlined
} from "@ant-design/icons";
import { Input } from "antd";
import { Avatar } from "antd";
import CaptinsTable from "../components/captainstable";
import ServiceCard from "../components/servicecard";
import ServiceRequest from "../components/Servicerequest";
import TotalRequest from "../components/Totalrequest";
const Main = ({toggleNav}) => {

  
  return (
    <div className="pt-5 md:pt-[38px] lg:pt-[38px]">
      <nav className="fixed md:static top-0 z-[8] bg-[white] h-[63px] flex flex-row items-center justify-between w-full">
        <span className="hidden md:block lg:block">
          <h6 className="tt-header">Hello Mickeal!</h6>
        </span>
        <span onClick={toggleNav} className=" md:hidden lg:hidden">
        <MenuOutlined  style={{ fontSize:"25px" ,color:"#474f54"}}/>
        </span>

        <div className="flex flex-row items-center">
          <div className="input-group w-[56%] md:w-[400px] lg:w-[400px] mr-4">
            <SearchOutlined
              style={{ fontSize: "1rem", color: "#474F54" }}
              className="mx-4"
            />
            <input placeholder="Search" className="w-[50%] md:w-[80%] h-full" />
          </div>
          <FormOutlined style={{ fontSize: "1rem" }} className="mr-4" />
          <BellOutlined className="mr-3" style={{ fontSize: "1rem" }} />
          <Avatar src="./Avatar.png" size={30} icon={<UserOutlined />} />
          <DownOutlined className="mx-2" />
        </div>
      </nav>
      <section className="mt-[32px] gap-2 flex  justify-between flex-row gap-y-2 md:grid-cols-3  lg:grid-cols-3  flex-wrap md:flex-nowrap lg:flex-nowrap max-w-[68.75rem]">
        <ServiceCard />
        <TotalRequest />
        <ServiceRequest />
      </section>
      <CaptinsTable />
    </div>
  );
};

export default Main;
