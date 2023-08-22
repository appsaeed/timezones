import { Clock } from "react-feather";

export default function ClockCard({ timezone }: { timezone: string }) {
  return (
    <div className="w-full flex gap-4 text-white tracking-wider text-[16px]">
      {" "}
      <Clock />{" "}
      {new Date().toLocaleString("en-US", {
        timeZone: timezone,
        hour: "2-digit",
        minute: "2-digit",
        year: "numeric",
        month: "long",
      })}
    </div>
  );
}
