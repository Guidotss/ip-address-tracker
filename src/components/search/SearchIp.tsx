"use client"
import { useState } from 'react';
import { useStore } from '@/store'; 
import { ArrowIcon } from "../icons";


export const SearchIp = () => {
  const { fetchIp } = useStore();
  const [ ip, setIp ] = useState<string>("");

  const handleSubmit = (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    fetchIp(ip);
    setIp("");  
  }; 
  

  return (
    <form className="flex" onSubmit={handleSubmit}>
      <input
        className="w-[400px] 2xl:w-[500px] p-3 rounded-l-lg px-10"
        type="text"
        placeholder="Search for any IP address or domain"
        value={ip}
        onChange={(e) => setIp(e.target.value)}
      />
      <button className="bg-black text-white p-3 px-4 rounded-r-lg">
        <ArrowIcon />
      </button>
    </form>
  );
};
