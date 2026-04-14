import "./MalDetails.css";

import { useParams } from "react-router-dom";
import { useState, createContext } from "react";

import arrMalaskra from "../assets/Database/malaskra.json";
import arrThingmenn from "../assets/Database/thingmenn.json";
import { MalDetailsContent } from "../assets/Content-pages/malDetailsContent";

export const CurrMalContext = createContext();

export function MalaskraDetails() {
  const { id } = useParams();

  const [currMal, setCurrMal] = useState(
    arrMalaskra.find((mal) => mal.atkvGrNr === id),
  );
  const currentMal = { currMal, setCurrMal };

  if (!currMal) {
    return <h1>Mál fannst ekki</h1>;
  }

  return (
    <main className="app">
      <CurrMalContext.Provider value={currentMal}>
        <MalDetailsContent arrThingmenn={arrThingmenn} />
      </CurrMalContext.Provider>
    </main>
  );
}
