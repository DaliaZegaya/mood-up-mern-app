import { createContext, useEffect, useState } from "react";
import getAllQuotes from "../services/quotes";

export const quotesContext = createContext();

function QuotesProvider({ children }) {
  const [quotes, setQuotes] = useState([]);
  useEffect(() => {
    getAllQuotes().then(res => setQuotes(res.data));
  }, []);
  return (
    <quotesContext.Provider value={{ quotes, setQuotes}}>
      {children}
    </quotesContext.Provider>
  );
}

export default QuotesProvider;