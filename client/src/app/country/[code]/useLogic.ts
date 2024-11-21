import { useEndpoints } from "@/shared/hooks/useEndpoints";
import { useToaster } from "@/shared/hooks/useToaster";
import { handleAxiosError } from "@/shared/utils/handleAxiosError";
import { useParams } from "next/navigation";
import { useEffect, useState } from "react";
import { ICountry } from "./types";

export function useLogic() {
  const [isLoading, setIsLoading] = useState(false);
  const [country, setCountry] = useState<ICountry>({} as ICountry);
  const { toaster } = useToaster();
  const { showCountry, getCountryFlagImage, getCountryPopulation } =
    useEndpoints();
  const { code } = useParams();

  const fetchCountryData = async () => {
    const countryCode = code as string;
    const [countryName, iso2] = countryCode.split("-");
    setIsLoading(true);
    try {
      const [countryDetails, flagImage, populationData] = await Promise.all([
        showCountry(iso2),
        getCountryFlagImage({ iso2 }),
        getCountryPopulation({ country: countryName }),
      ]);

      const data: ICountry = {
        commonName: countryDetails.commonName,
        officialName: countryDetails.officialName,
        countryCode: iso2,
        region: countryDetails.region,
        borders: countryDetails.borders || [],
        flag: flagImage.data.flag,
        populationCounts: populationData.data.populationCounts,
      };

      setCountry(data);
    } catch (e) {
      const { message } = handleAxiosError(e);
      toaster("error", message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    if (!code) return;
    fetchCountryData();
  }, []);

  return {
    isLoading,
    country,
  };
}
