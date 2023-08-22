import { avatar } from "appmon/generate";
import ClockCard from "./ClockCard";
export default function TimezoneCard({ timezone = "Asia/Dhaka", name = "" }) {
  return (
    <div className="bg-slate-700 p-6 rounded-2xl flex-1">
      <div className="flex justify-between gap-6 mb-6 w-full">
        <div className="w-8 h-8">
          <img
            loading="lazy"
            decoding="async"
            src={avatar(timezone)}
            className=" object-cover w-full h-full rounded-full"
          />
        </div>
        <div className="link text-slate-300 w-20">{name}</div>
        <div className="flex text-slate-300">{timezone}</div>
      </div>
      <div className="">
        <ClockCard timezone={timezone} />
      </div>
    </div>
  );
}
