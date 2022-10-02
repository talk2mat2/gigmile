import React from "react";
import { Card } from "antd";
import Piechats from "./piechat";
const ServiceRequest = () => {
  return (
    <div className="cards flex-1 w-[92%] md:max-w-[289px]  lg:max-w-[280px] h-[338px] m-1 p-4">
      <div className="mb-[9px] px-auto flex flex-row items-start">
        <h6 className="tt-header inline-block ">Service Request Breakdown</h6>
      </div>
      <span className="pl-auto">
        <p className="tt-sub-text-lg inline-block opacity-50 ">
          Total Working Capital Request so far
        </p>
      </span>
      <div className="mt-12 px-1">
        <Piechats />
      </div>
    </div>
  );
};

export default ServiceRequest;
