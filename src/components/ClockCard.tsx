import { Clock } from "react-feather";

export default function ClockCard({ timezone }: { timezone: string }) {
  return (
    <div className="w-full flex gap-4 text-slate-600 dark:text-slate-300 tracking-wider text-base">
      {" "}
      <Clock />{" "}
      {(new Date()).toLocaleString("en-US", {
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
  );
}
