import { useEffect, useState } from "react";

import { default as timezone, default as timezoneList } from "../assets/timezones.json";
import ButtonGGreen from "../components/ButtonGGreen";
import TimezoneCard from "../components/TimezoneCard";
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

  return (
    <div className="p-6">
      <div className="flex gap-4 sm:justify-end">
        <ButtonGGreen onClick={sortTimezone}>Refresh</ButtonGGreen>
        <SearchBar value={search} onChange={(e) => setSearch(e.target.value)} />
      </div>
      <div className="grid sm:grid-cols-3 justify-center gap-4 mt-6">
        {timezones.map((item: Timezone, index) => (
          <TimezoneCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
