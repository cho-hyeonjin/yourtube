import { createContext, useContext } from "react";
import Yourtube from "../api/yourtube";
import FakeYourtubeClient from "../api/fakeYourtubeClient";
import YourtubeClient from "../api/yourtubeClient";

export const YourtubeApiContext = createContext();

// const client = new FakeYourtubeClient();
const client = new YourtubeClient();
const yourtube = new Yourtube(client);

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
