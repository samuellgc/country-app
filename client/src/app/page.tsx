"use client";

import { PageLoading } from "@/shared/components/PageLoading";
import { useLogic } from "./home/hooks/useLogic";
import { Icon } from "@iconify/react";
import { useRedirect } from "@/shared/hooks/useRedirect";
import { SearchInput } from "@/shared/components/SearchInput";

export default function Home() {
  const { filteredCountries, isLoading, handleSearchText, searchText } =
    useLogic();
  const { goTo } = useRedirect();

  if (isLoading) return <PageLoading />;

  return (
    <div className="flex w-full h-full flex-col gap-5">
      <div className="flex gap-2 items-center text-xl font-semibold">
        <h2>
          Do you wanna know more about any Country? Just click on it and enjoy!
        </h2>
        <Icon icon="subway:world-1" />
      </div>
      <div className="bg-white rounded-lg shadow p-4 space-y-4">
        <div className="flex flex-col gap-2">
          <p>Search for a specific country!</p>
          <SearchInput
            value={searchText}
            placeholder="Find your country here!"
            onChange={(e) => handleSearchText(e.target.value)}
          />
        </div>
        <ul className="space-y-3">
          {filteredCountries &&
            filteredCountries.map((country) => (
              <li
                key={country.countryCode}
                onClick={() => goTo(`/country/${country.countryCode}`)}
                className="h-14 cursor-pointer flex items-center border rounded-md px-3 hover:bg-gray-50/60"
              >
                {country.name}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
