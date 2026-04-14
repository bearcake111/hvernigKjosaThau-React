import { InfoBox } from "../Detail-Page-Assets/Info-Box/infoBox";
import { LoadTable } from "../../assets/Table/LoadGeneralMalTable";
import { TableHead } from "../../assets/Table/Head/tableHead";
import { LoadTableRows } from "../../assets/Table/Body/loadGeneralTableRows";
import { CurrMalContext } from "../../pages/MalDetails";
import { useSortThingmenn } from "../Helpers/Sorting/useSortThingmenn";
import { TableRow } from "../Table/Body/TableRow";
import { useContext, useState } from "react";

export function MalDetailsContent({ arrThingmenn }) {
  const { currMal, setCurrMal } = useContext(CurrMalContext);

  const [sorting, setSorting] = useState({ sorting: "name", direction: false });

  const processedArrThingmenn = useSortThingmenn({ arrThingmenn }, sorting);

  return (
    <section id="thingmadur-valinn">
      <InfoBox mal={currMal} />
      <LoadTable>
        <TableHead
          name={true}
          party={true}
          votesColor={true}
          sorting={sorting}
          setSorting={setSorting}
        />
        <LoadTableRows>
          {processedArrThingmenn.map((thingmadur, i) => (
            <TableRow
              key={thingmadur.id}
              content={thingmadur}
              index={i}
              name={true}
              party={true}
              votesColor={true}
              mal={currMal}
            />
          ))}
        </LoadTableRows>
      </LoadTable>
    </section>
  );
}
