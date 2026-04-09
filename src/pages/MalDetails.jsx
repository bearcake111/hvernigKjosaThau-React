import "./MalDetails.css";

import { useParams } from "react-router-dom";
import { useState, createContext } from "react";

import arrMalaskra from "../assets/Database/malaskra.json";
import arrThingmenn from "../assets/Database/thingmenn.json";

import { InfoBox } from "../assets/Detail-Page-Assets/Info-Box/infoBox";
import { LoadTable } from "../assets/Table/LoadGeneralMalTable";
import { TableHead } from "../assets/Table/Head/tableHead";
import { LoadTableRows } from "../assets/Table/Body/loadGeneralTableRows";

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
        <section id="thingmadur-valinn">
          <InfoBox mal={currMal} />
          <LoadTable>
            <TableHead name={true} party={true} votesColor={true} />
            <LoadTableRows malaskra={arrMalaskra} thingmenn={arrThingmenn} />
          </LoadTable>
        </section>
      </CurrMalContext.Provider>
    </main>
  );
}
