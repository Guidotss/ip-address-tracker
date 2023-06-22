"use client";
import { useStore } from "@/store";

export const IpData = () => {
  const { ipLocation } = useStore();
  console.log(ipLocation);

  return (
    <div className="flex flex-col justify-center sm:flex sm:flex-row  bg-slate-50 shadow-lg 2xl:w-[1200px] h-56 rounded-lg sm:p-10 z-10 w-[240px]">
      <div className="sm:border-r sm:border-gray-300 w-full font-bold flex flex-col items-center justify-center sm:block">
        <h4 className="text-gray-500 text-sm sm:mb-4">Ip Address</h4>
        <span className="text-xl">{ipLocation?.ip}</span>
      </div>
      <div className="sm:border-r sm:border-gray-300 w-full font-bold text-sm sm:ml-4 flex flex-col items-center justify-center sm:block">
        <h4 className="text-gray-500 mb-2 text-sm">Location</h4>
        <span className="text-xl">{ipLocation?.city}</span>
      </div>
      <div className="sm:border-r sm:border-gray-300 w-full font-bold sm:ml-4 sm:text-start flex flex-col items-center justify-center sm:block">
        <h4 className="text-sm text-gray-500 sm:mb-4">Timezone</h4>
        <span className="text-xl ">{ipLocation?.timezone}</span>
      </div>
      <div className="w-full font-bold sm:ml-4 flex flex-col items-center justify-center sm:block">
        <h4 className="text-sm text-gray-500 sm:mb-3">ISP</h4>
        <span className="text-xl">{ipLocation?.isp}</span>
      </div>
      
    </div>
  );
};
