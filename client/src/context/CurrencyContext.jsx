import { createContext, useState } from "react";

export const CurrencyContext = createContext();

export const CurrencyContextProvider = ({ children }) => {
  const [currency, setCurrency] = useState("LKR");

  const toggleCurrency = () => {
    setCurrency((prev) => (prev === "LKR" ? "USD" : "LKR"));
  };

  return (
    <CurrencyContext.Provider value={{ currency, toggleCurrency }}>
      {children}
    </CurrencyContext.Provider>
  );
};
