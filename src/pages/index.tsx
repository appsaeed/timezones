import { useEffect, useState } from "react";
import timezone from "../assets/timezone";
import ButtonGGreen from "../components/ButtonGGreen";
import Navbar from "./layout/Navbar";
import SearchBar from "./layout/SearchBar";
import TimezoneCard from "./layout/TimezoneCard";

export default function Index() {
  return (
    <>
      <Navbar />
      <TimezoneCardGroup />
    </>
  );
}

export function TimezoneCardGroup() {
  const [zones, setItmezone] = useState(timezone);
  const [search, setSearch] = useState("");

  const updateTimezone = (value: string) => {
    const key = value.toLowerCase();
    const found = timezone.filter((item) => {
      return (
        item.name.toLowerCase().replace(/\//, " ").includes(key) ||
        item.value.toLowerCase().replace(/\//, " ").includes(key) ||
        item.value.toLowerCase().includes(key) ||
        item.name.toLowerCase().includes(key)
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
        {zones.map((item, index) => (
          <TimezoneCard key={index} timezone={item.value}  />
        ))}
      </div>
    </div>
  );
}
