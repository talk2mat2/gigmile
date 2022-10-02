import React from "react";
import { Card } from "antd";
const TotalRequest = () => {
  return (
    <div className="cards flex-1 w-[92%] md:max-w-[280px] lg:max-w-[280px] h-[338px] m-1 p-4">
      <div className="mb-[9px] px-auto flex flex-row items-start">
        <img className="inline-block mr-2" src="./assets/bars2.png" alt="" />
        <h6 className="tt-header inline-block ">Total Request Value</h6>
      </div>
      <span className="pl-auto">
        <p className="tt-sub-text-lg inline-block opacity-50 ">
          Overall Working Capital Request Value
        </p>
      </span>
      <div className="mt-6 px-4">
        <h6 className="inline-block tt-sub-text-lg">Overall</h6>
        <h4 className="pl-3 tt-header inline-block text-[24px]">
          N 2,643,890.0
        </h4>
      </div>
      <div className="mt-[29px] px-4 text-center">
        <p className="tt-sub-text-lg inline-block opacity-50 ">
          Total paid back
        </p>
        <h4 className="text-[2rem]">N1,200,210.O</h4>
        <span className="tt-sub-text-lg inline-block opacity-50 whiteapace-nowrap">
          <p className="inline-block  mr-1 text-[#1DB385]">300,000.00 </p>Increase this week
        </span>
      </div>
    </div>
  );
};

export default TotalRequest;
