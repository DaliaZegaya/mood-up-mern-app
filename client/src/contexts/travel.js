import { createContext, useEffect, useState } from "react";
import getAllTravelPlaces from "../services/travel";

export const travelContext = createContext();

function TravelProvider({ children }) {
    const [travelPlaces, setTravelPlaces] = useState([])
  useEffect(() => {
    getAllTravelPlaces().then(res => setTravelPlaces(res));
  }, []);
  return (
    <travelContext.Provider value={{ travelPlaces, setTravelPlaces}}>
      {children}
    </travelContext.Provider>
  );
}

export default TravelProvider;