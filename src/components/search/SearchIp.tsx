import { ArrowIcon } from "../icons"

export const SearchIp = () => {
  return (
    <form className="flex">
        <input className="w-[400px] p-3 rounded-l-lg px-10" type="text" placeholder="Search for any IP address or domain"/>
        <button className="bg-black text-white p-3 px-4 rounded-r-lg">
            <ArrowIcon/>
        </button>

    </form>
  )
}
