import { createContext, useState } from "react";
import "./ThingmennDetails.css";
import arrThingmenn from "../assets/Database/thingmenn.json";

import { SearchMalaskraContent } from "../assets/Content-pages/searchMalaskraContent";
import { ThingmDetailsContent } from "../assets/Content-pages/thingmDetailsContent";
import { useParams } from "react-router-dom";

export const CurrThingmContext = createContext();

export function ThingmennDetails() {
  const { id } = useParams();

  const [currThingm, setCurrThingm] = useState(
    arrThingmenn.find((thingmadur) => thingmadur.id === id),
  );

  const currentThingm = { currThingm, setCurrThingm };

  if (!currThingm) {
    return <h1>Mál fannst ekki</h1>;
  }

  return (
    <main className="app">
      <CurrThingmContext.Provider value={currentThingm}>
        <ThingmDetailsContent arrThingmenn={arrThingmenn} />
      </CurrThingmContext.Provider>
    </main>
  );
}
