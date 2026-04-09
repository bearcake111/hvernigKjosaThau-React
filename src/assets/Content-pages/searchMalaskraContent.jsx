import arrMalaskra from "../Database/malaskra.json";

import { SearchMalInput } from "../Advanced-Search/searchMalInput";
import { AdvSearchSection } from "../Advanced-Search/advSearchSection";
import { LoadTable } from "../Table/LoadGeneralMalTable";
import { TableHead } from "../Table/Head/tableHead";
import { LoadTableRows } from "../Table/Body/loadGeneralTableRows";
import { TableRow } from "../Table/Body/TableRow";

import { useProcessMalaskra } from "../Helpers/useProcessMalaskra";

export function SearchMalaskraContent() {
  const processedMalaskra = useProcessMalaskra(arrMalaskra);

  return (
    <section id="thingmadur-valinn">
      <div id="search-section">
        <SearchMalInput />
        <AdvSearchSection />
      </div>
      <LoadTable>
        <TableHead
          fold={true}
          dags={true}
          mal={true}
          more={true}
          voteTotal={true}
          results={true}
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
