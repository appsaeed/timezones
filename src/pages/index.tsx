import { useCallback, useMemo, useState } from "react";
import { MdRefresh } from "react-icons/md";
import timezone from "../../public/assets/timezones.json";
import { cn } from "../app/utiles";
import ButtonGGreen from "../components/ButtonGGreen";
import TimezoneCard from "../components/TimezoneCard";
import useApplication from "../hooks/useApplication";
import { Timezone } from "../types";
import Navbar from "./layout/Navbar";
import SearchBar from "./layout/SearchBar";

// Main Component
export default function Index() {
  return (
    <>
      <Navbar />
      <TimezoneCardGroup />
    </>
  );
}

// Timezone Card Group Component
export function TimezoneCardGroup() {
  const [search, setSearch] = useState("");
  const { locale } = useApplication();

  // Debounced search input handler
  const updateSearch = useCallback((e: React.ChangeEvent<HTMLInputElement>) => {
    setSearch(e.target.value);
  }, []);

  // Filter and sort timezones
  const filteredTimezones = useMemo(() => {
    const key = search.trim().toLowerCase();
    const filtered = timezone.filter((item) => {
      return (
        item.timezone.toLowerCase().replace(/\//, " ").includes(key) ||
        item.country_name.toLowerCase().includes(key) ||
        item.more.standard_name?.toLowerCase().includes(key)
      );
    });

    // Custom sort: Bring the user's locale to the top
    return filtered.sort((a, b) => {
      if (a.country_code === locale?.locale) return -1;
      if (b.country_code === locale?.locale) return 1;
      return 0;
    });
  }, [search, locale]);

  // Handler to refresh the filtered list
  const sortTimezone = useCallback(() => {
    setSearch((prevSearch) => prevSearch); // Trigger re-filtering if needed
  }, []);

  return (
    <div className="p-6">
      <div className="flex gap-4 justify-between my-4">
        <ButtonGGreen onClick={sortTimezone} className="group">
          <MdRefresh className={cn("mr-1 text-lg transition-all group-active:animate-refresh")} />
          Refresh
        </ButtonGGreen>
        <SearchBar value={search} onChange={updateSearch} />
      </div>
      <div className="flex flex-col md:grid md:grid-cols-3 justify-center gap-4 mb-8">
        {filteredTimezones.map((item: Timezone, index) => (
          <TimezoneCard key={index} {...item} />
        ))}
      </div>
    </div>
  );
}
