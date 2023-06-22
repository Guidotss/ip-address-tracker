"use client";
import { useStore } from "@/store";

export const IpData = () => {
  const { ipLocation } = useStore();
  console.log(ipLocation);

  return (
    <div className="flex bg-slate-50 shadow-lg 2xl:w-[1200px] h-40 rounded-lg p-8 z-10">
      <div className="border-r border-gray-300 w-full items-center font-bold">
        <h4 className="text-gray-500 text-sm mb-4">Ip Address</h4>
        <span className="text-xl">{ipLocation?.ip}</span>
      </div>
      <div className="border-r border-gray-300 w-full font-bold text-sm ml-4 items-center">
        <h4 className="text-gray-500 mb-2 text-sm">Location</h4>
        <span className="text-xl">{ipLocation?.city}</span>
      </div>
      <div className="border-r border-gray-300 w-full font-bold items-center ml-4 text-start">
        <h4 className="text-sm text-gray-500 mb-4">Timezone</h4>
        <span className="text-xl">{ipLocation?.timezone}</span>
      </div>
      <div className="w-full font-bold items-center ml-4">
        <h4 className="text-sm text-gray-500 mb-3">ISP</h4>
        <span className="text-xl">{ipLocation?.isp}</span>
      </div>
      
    </div>
  );
};
