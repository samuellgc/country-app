"use client";

import { PageLoading } from "@/shared/components/PageLoading";
import { useRedirect } from "@/shared/hooks/useRedirect";
import Image from "next/image";
import { PopulationChart } from "./components/PopulationChart";
import { Icon } from "@iconify/react";
import { useLogic } from "./useLogic";

export default function Country() {
  const { isLoading, country } = useLogic();
  const { goTo } = useRedirect();

  if (isLoading) return <PageLoading />;

  return (
    <div className="bg-white rounded-lg shadow p-4 flex flex-col gap-3">
      <button
        type="button"
        onClick={() => goTo("/")}
        className="flex items-center gap-1"
      >
        <Icon icon="mdi-light:arrow-left" />
        Return
      </button>
      <div className="flex items-center gap-2">
        {country.flag && (
          <Image
            alt="ICountry image"
            width={40}
            height={40}
            src={country.flag}
          />
        )}
        <p>{country.commonName}</p>
      </div>
      <div className="w-full">
        <PopulationChart data={country.populationCounts} />
      </div>
      <div className="flex flex-col">
        <div>
          <p>Country borders</p>
          <p className="text-xs">
            Do you wanna know more about any border? Just click on it!
          </p>
        </div>
        <ul>
          {country.borders &&
            country.borders.map((border) => (
              <li
                key={border.countryCode}
                className="h-10 cursor-pointer flex items-center rounded-md"
                onClick={() =>
                  goTo(
                    `/country/${border.commonName.toLowerCase()}-${border.countryCode.toLowerCase()}`
                  )
                }
              >
                {border.commonName}
              </li>
            ))}
        </ul>
      </div>
    </div>
  );
}
