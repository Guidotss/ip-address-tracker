import { SearchIp } from "@/components";
import { IpData, Map } from "@/components/ui";
import Image from "next/image";

export default function Home() {
  return (
    <main className="overflow-hidden">
      <header className="w-full">
        <Image
          className="w-full object-contain hidden sm:block"
          src="/images/pattern-bg-desktop.png"
          alt="Header Image"
          width={1440}
          height={400}
        />

        <Image
          className="w-full object-contain sm:hidden"
          src="/images/pattern-bg-mobile.png"
          alt="Header Image"
          width={375}
          height={400}
        />
        <div className="absolute left-[550px] 2xl:left-[750px] 2xl:top-14 top-5">
          <h1 className="text-slate-50 text-2xl 2xl:text-4xl font-semibold tracking-wider">
            IP Address Tracker
          </h1>
        </div>
        <div className="absolute 2xl:top-40 2xl:left-[660px] top-16 left-11  ">
          <SearchIp />
        </div>
      </header>
      <div className="absolute top-48 sm:left-[190px] 2xl:top-72 2xl:left-[310px] z-10 shadow-xl left-16">
        <IpData />
      </div>
      <div className="w-full absolute">
        <Map />
      </div>
    </main>
  );
}
