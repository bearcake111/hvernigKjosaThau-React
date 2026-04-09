import { useContext } from "react";
import { CurrMalContext } from "../../../pages/MalDetails";

import { TableRow } from "./tableRow";

//BUG Rows are not assigned perfectly
export function LoadTableRows({ malaskra, thingmenn }) {
  const { currMal, setCurrMal } = useContext(CurrMalContext);
  return (
    <>
      {thingmenn.map((thingmadur, i) => (
        <TableRow
          key={thingmadur.id}
          content={thingmadur}
          thingmadur={thingmadur}
          mal={currMal}
          index={i}
          name={true}
          party={true}
          votesColor={true}
        />
      ))}
    </>
  );
}
