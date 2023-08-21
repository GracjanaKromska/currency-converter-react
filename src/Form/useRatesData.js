import axios from "axios";
import { useEffect, useState } from "react";

const url = "https://api.exchangerate.host/latest?base=PLN";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    const fetchRates = async () => {
      try {
        const response = await axios.get(url);
        const { rates, date } = response.ratesData;
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