import { useEffect, useState } from "react";

import { MdRefresh } from "react-icons/md";
import { default as timezone, default as timezoneList } from "../../public/assets/timezones.json";
import { cn } from "../app/utiles";
import ButtonGGreen from "../components/ButtonGGreen";
import TimezoneCard from "../components/TimezoneCard";
import useApplication from "../hooks/useApplication";
import { Timezone } from "../types";
import Navbar from "./layout/Navbar";
import SearchBar from "./layout/SearchBar";

export default function Index() {


  return (
    <>
      <Navbar />
      <TimezoneCardGroup />
    </>
  );
}

export function TimezoneCardGroup() {
  const [timezones, setItmezone] = useState(timezoneList);
  const [search, setSearch] = useState("");
  const { locale } = useApplication()

  const updateTimezone = (value: string) => {
    const key = value.toLowerCase();
    const found = timezone.filter((item) => {
      return (
        item.timezone.toLowerCase().replace(/\//, " ").includes(key) ||
        item.timezone.toLowerCase().includes(key) ||
        item.country_name.toLowerCase().includes(key) ||
        item.more.standard_name?.toLowerCase().includes(key)
      );
    });
    setItmezone(found);
  };

  useEffect(() => {
    if (search && search !== "") {
      updateTimezone(search);
    }
  }, [search]);

  const sortTimezone = () => {
    // const sort = timezone.sort(function () {
    //   return 0.5 - Math.random();
    // });
    updateTimezone(search);
    // setItmezone([sort[0]]);
  };

  const customSort = (a: Timezone, b: Timezone) => {
    if (a.country_code === locale?.locale) {
      return -1; // `a` comes before `b` if it's the element to bring to the top
    } else if (b.country_code === locale?.locale) {
      return 1; // `b` comes before `a` if it's the element to bring to the top
    } else {
      return 0; // Keep the order unchanged for other elements
    }
  };

  return (
    <div className="p-6">
      <div className="flex gap-4 justify-between my-4">
        <ButtonGGreen onClick={sortTimezone} className="group">
          <MdRefresh className={cn(
            "mr-1 text-lg transition-all  duration-[1s] group-active:rotate-[360deg]"
          )} />
          Refresh
        </ButtonGGreen>
        <SearchBar
          value={search}
          onChange={(e) => setSearch(e.target.value)}
        />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 justify-center gap-4 mb-8">
        {timezones.sort(customSort).map((item: Timezone, index) => (
          <TimezoneCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
