import arrMalaskra from "../Database/malaskra.json";

import { SearchMalInput } from "../Advanced-Search/searchMalInput";
import { AdvSearchSection } from "../Advanced-Search/advSearchSection";
import { LoadTable } from "../Table/LoadGeneralMalTable";
import { TableHead } from "../Table/Head/tableHead";
import { LoadTableRows } from "../Table/Body/loadGeneralTableRows";
import { TableRow } from "../Table/Body/tableRow";

import { useProcessMalaskra } from "../Helpers/useProcessMalaskra";
import { useSortMalaskra } from "../Helpers/Sorting/useSortMalaskra";
import { foldMal } from "../Helpers/foldMal";
import { useFilterMalaskra } from "../Helpers/Filters/useFilterMalaskra";
import { useContext, useState } from "react";

export function SearchMalaskraContent() {
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
      <div id="search-section">
        <SearchMalInput setFilter={setFilter} />
        <AdvSearchSection setFilter={setFilter} />
      </div>

      <LoadTable>
        <TableHead
          fold={true}
          dags={true}
          mal={true}
          more={true}
          voteTotal={true}
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
                index={i}
                older={malNr.olderMal}
                newest={true}
                dags={true}
                name={true}
                more={true}
                voteTotal={true}
                results={true}
              />
            ))}
        </LoadTableRows>
      </LoadTable>
    </section>
  );
}
