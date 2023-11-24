import axios from "axios";
import { useEffect, useState } from "react";

const urlAPI = "https://api.currencyapi.com/v3/latest?apikey=cur_live_8JKIIYnnJLtZY3IfgcEELXdrG1Xm4DoI3OWKhCrJ&currencies=&base_currency=PLN";

export const useRatesData = () => {
  const [ratesData, setRatesData] = useState({
    state: "loading",
  });

  useEffect(() => {
    setTimeout(() => {
      (async () => {
        try {
          const response = await axios.get(urlAPI);
          setRatesData({
            state: "success",
            data: response.data,
            meta: response.data.meta
          });
        }
        catch (error) {
          setRatesData({
            state: "error",
          });
        }
      })();
    }, 1000);
  }, []);

  return ratesData;

};