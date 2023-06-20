import { SearchIp } from "@/components";
import Image from "next/image";


export default function Home() {
  return (
    <main className="">
      <header className="w-full">
        <Image
          src="/images/pattern-bg-desktop.png"
          alt="Header Image"
          width={1440}
          height={400}
        />
        <div className="absolute left-[550px] top-5">
          <h1 className="text-slate-50 text-2xl font-semibold tracking-wider">IP Address Tracker</h1>
        </div>
        <div className="absolute top-24 left-[450px]">
          <SearchIp/>
        </div>
      </header>
    </main>
  )
}
