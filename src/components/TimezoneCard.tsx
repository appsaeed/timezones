import countries from '../assets/countries.json';
import { Timezone } from '../types';
import ClockCard from "./ClockCard";
export default function TimezoneCard(item: Timezone) {
  const country = countries.find(country => country.alpha2 === item.country_code);
  // console.log(country)
  return (
    <div className="bg-slate-50 dark:bg-slate-700 shadow-md p-6 rounded-2xl">
      <div className="flex justify-between gap-4 mb-6 w-full">
        <span className="w-8 h-8 items-start">
          {country?.emoji}
        </span>
        <div className="text-slate-600 dark:text-slate-300 text-right">
          <span className="">{item.country_name}</span>, {" "}
          <span className="">{item.capital}</span>
          <span className="text-sm"> ({item.timezone}) </span>
        </div>
      </div>
      <ClockCard timezone={item.timezone} />
    </div>
  );
}
