import React, { createContext, useContext, useState } from "react";
export type SceneSpotContent = {
  city: number;
  setCity: (c: number) => void;
};

export const initValues = {
  city: 10, // set a default value
  setCity: () => {},
};

export const SceneSpotContext = createContext<SceneSpotContent>(initValues);
export const useSceneSpotContext = () => useContext(SceneSpotContext);

export const SceneSpotContextProvider: React.FC = (props) => {
  // this state will be shared with all components
  const [city, setCity] = useState(initValues.city);

  return (
    // this is the provider providing state
    <SceneSpotContext.Provider value={{ city, setCity }}>
      {props.children}
    </SceneSpotContext.Provider>
  );
};
