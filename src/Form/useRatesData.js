import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  const urlAPI = "https://api.exchangerate.host/latest?base=PLN"

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await fetch(urlAPI);

        if (!response.ok) {
          throw new Error(response.statusText);
        }

        const { rates, date } = await response.json();

        setRatesData({
          status: "success",
          rates,
          date,
        });
      }
      catch {
        setRatesData({
          status: "error",
        });
      }
    };

    setTimeout(fetchRates, 1000);

  }, []);

  return ratesData;

};