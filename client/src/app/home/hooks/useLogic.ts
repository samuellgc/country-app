import { useEndpoints } from "@/shared/hooks/useEndpoints";
import { useToaster } from "@/shared/hooks/useToaster";
import { handleAxiosError } from "@/shared/utils/handleAxiosError";
import { useEffect, useState } from "react";

type Countries = {
  countryCode: "string";
  name: "string";
};

export function useLogic() {
  const [isLoading, setIsLoading] = useState(false);
  const [countries, setCountries] = useState<Countries[]>([]);
  const [searchText, setSearchText] = useState("");
  const { toaster } = useToaster();
  const { listCountries } = useEndpoints();

  const handleSearchText = (text: string) => setSearchText(text);

  const filteredCountries = countries.filter((country) =>
    country.name.toLowerCase().includes(searchText.toLowerCase())
  );

  const fetchCountries = async () => {
    setIsLoading(true);
    try {
      const response = await listCountries();
      setCountries(response);
    } catch (e) {
      const { message } = handleAxiosError(e);
      toaster("error", message);
    } finally {
      setIsLoading(false);
    }
  };

  useEffect(() => {
    fetchCountries();
  }, []);

  return {
    isLoading,
    searchText,
    handleSearchText,
    filteredCountries,
  };
}
