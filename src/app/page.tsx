import { SearchIp } from "@/components";
import { IpData, Map } from "@/components/ui";
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <header className="w-full">
        <Image
          className="w-full object-contain"
          src="/images/pattern-bg-desktop.png"
          alt="Header Image"
          width={1440}
          height={400}
        />
        <div className="absolute left-[550px] 2xl:left-[750px] 2xl:top-14 top-5">
          <h1 className="text-slate-50 text-2xl 2xl:text-4xl font-semibold tracking-wider">IP Address Tracker</h1>
        </div>
        <div className="absolute 2xl:top-40 2xl:left-[660px] top-28 left-[450px] ">
          <SearchIp/>
        </div>
      </header>
        <div className="flex absolute top-48 left-[190px] 2xl:top-72 2xl:left-[310px] z-10 shadow-xl">  
          <IpData/>
        </div>
        <div className="w-full absolute">
          <Map/>
        </div>
    </main>
  )
}
