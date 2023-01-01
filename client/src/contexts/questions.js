import { createContext, useEffect, useState } from "react";
import getAllQuestions from "../services/questions";

export const questionsContext = createContext();

function QuestionsProvider({ children }) {
  const [questions, setQuestions] = useState([]);
  useEffect(() => {
    getAllQuestions().then(res => setQuestions(res.data));
  }, []);
  return (
    <questionsContext.Provider value={{ questions, setQuestions}}>
      {children}
    </questionsContext.Provider>
  );
}

export default QuestionsProvider;