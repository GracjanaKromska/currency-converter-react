import axios from "axios";
import { useEffect, useState } from "react";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get("https://api.exchangerate.host/latest?base=PLN");
        const { rates, date } = response.ratesData
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