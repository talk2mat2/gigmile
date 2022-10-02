import { Card } from "antd";
import React from "react";
import Barchats from "./barchats";

const ServiceCard = () => {
  return (
    <div
 
      className=" w-[92vw] md:w-[480px] lg:w-[480px] h-[339px] cards pt-4 m-1  flex flex-col pb-2 "
    >
      <div className="mb-[9px] px-4">
        <img className="inline-block mr-2" src="./assets/bars1.png" alt="" />
        <h6 className="tt-header inline-block">
          Working Capital Service Requests
        </h6>
      </div>
      <span className="px-4">
        <p className="tt-sub-text-lg inline-block opacity-50 ">
          Ongoing Gigmile Working Capital Service Requests{" "}
        </p>
        <h6 style={{ listStyleType:"circle" }} className="tt-sub-text-lg inline-block px-2 text-[1rem] opacity-50 ">Last 30 days</h6>
      </span>
      <div className="mt-6 pl-[70px]">
        {/* <img className="inline-block mr-2" src="./assets/group.png" alt="" /> */}
        <h6 className="inline-block tt-sub-text-lg">Overall</h6>
        <h4 className="pl-3 tt-header inline-block text-[24px]">678,767</h4>
      </div>
      
        <Barchats />
      
    </div>
  );
};

export default ServiceCard;
