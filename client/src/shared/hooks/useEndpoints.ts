import { useApi } from "@/shared/hooks/useApi";

export function useEndpoints() {
  const { api } = useApi();

  const listCountries = async () => {
    const { data } = await api.get("/countries");
    return data;
  };

  const showCountry = async (countryCode: string) => {
    const { data } = await api.get(`/countries/${countryCode}`);
    return data;
  };

  const getCountryFlagImage = async (body: { iso2: string }) => {
    const { data } = await api.post("/countries/flag", body);
    return data;
  };

  const getCountryPopulation = async (body: { country: string }) => {
    const { data } = await api.post("/countries/population", body);
    return data;
  };

  return {
    showCountry,
    listCountries,
    getCountryFlagImage,
    getCountryPopulation,
  };
}
