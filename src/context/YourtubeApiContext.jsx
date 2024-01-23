import { createContext, useContext } from "react";
import Yourtube from "../api/yourtube";

export const YourtubeApiContext = createContext();

const yourtube = new Yourtube();

export function YourtubeApiProvider({ children }) {
  return (
    <YourtubeApiContext.Provider value={{ yourtube }}>
      {children}
    </YourtubeApiContext.Provider>
  );
}

export function useYourtubeApi() {
  return useContext(YourtubeApiContext);
}
