import { FiClock } from "react-icons/fi";
import { useApp } from "../app/AppProvidor";

export default function ClockCard({ timezone }: { timezone: string }) {
  const { locale } = useApp()
  const language = locale.replace('_', '-') || 'en-US';
  return (
    <div className="flex justify-between gap-4 text-slate-600 dark:text-slate-300 tracking-wider">
      {" "}
      <span className="">
        <FiClock className="text-2xl" />{" "}
      </span>
      <div className="text-base text-right">
        {(new Date()).toLocaleString(language, {
          timeZone: timezone,
          hour12: true,
          hour: '2-digit',
          minute: '2-digit',
          year: 'numeric',
          month: 'long',
          day: "2-digit",
          dayPeriod: "long",
          weekday: "long",
          timeZoneName: 'long'
        })}
      </div>
    </div>
  );
}
