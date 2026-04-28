import { InfoBox } from "../Detail-Page-Assets/Info-Box/infoBox";
import { LoadTable } from "../../assets/Table/LoadGeneralMalTable";
import { TableHead } from "../../assets/Table/Head/tableHead";
import { LoadTableRows } from "../../assets/Table/Body/loadGeneralTableRows";
import { CurrMalContext } from "../../pages/MalDetails";
import { useFilterMalaskra } from "../Helpers/Filters/useFilterMalaskra";
import { TableRow } from "../Table/Body/tableRow";
import { useContext, useState } from "react";
import { CurrThingmContext } from "../../pages/ThingmennDetails";
import { InfoBoxThingmenn } from "../Thingmenn-Details-assets/infoBoxThingmenn";
import { AdvSearchSection } from "../Advanced-Search/advSearchSection";
import { SearchMalInput } from "../Advanced-Search/searchMalInput";
import { UNSAFE_decodeViaTurboStream } from "react-router-dom";
import { VoteExplenation } from "../Table/voteExplenation";
import arrMalaskra from "../Database/malaskra.json";
import { foldMal } from "../Helpers/foldMal";
import { useSortMalaskra } from "../Helpers/Sorting/useSortMalaskra";

export function ThingmDetailsContent({ arrThingmenn }) {
  const { currThingm, setCurrThingm } = useContext(CurrThingmContext);

  const [filter, setFilter] = useState({
    cat: `Öll mál`,
    date: `any`,
    name: ``,
  });

  const [sorting, setSorting] = useState({ sorting: "date", direction: false });

  const filtered = useFilterMalaskra(arrMalaskra, filter);
  const folded = foldMal(filtered);
  const processedMalaskra = useSortMalaskra(folded, sorting);

  return (
    <section id="thingmadur-valinn">
      <InfoBoxThingmenn thingmadur={currThingm} />
      <SearchMalInput setFilter={setFilter} />
      <AdvSearchSection setFilter={setFilter} />
      <VoteExplenation />
      <LoadTable>
        <TableHead
          fold={true}
          dags={true}
          mal={true}
          more={true}
          votesColor={true}
          results={true}
          sorting={sorting}
          setSorting={setSorting}
        />
        <LoadTableRows>
          {processedMalaskra?.length > 0 &&
            processedMalaskra.map((malNr, i) => (
              <TableRow
                key={malNr.newestMal.mal.atkvGrNr}
                content={malNr.newestMal.mal}
                thingmadur={currThingm}
                mal={malNr.newestMal.mal}
                index={i}
                older={malNr.olderMal}
                newest={true}
                dags={true}
                name={true}
                more={true}
                votesColor={true}
                results={true}
              />
            ))}
        </LoadTableRows>
      </LoadTable>
    </section>
  );
}
