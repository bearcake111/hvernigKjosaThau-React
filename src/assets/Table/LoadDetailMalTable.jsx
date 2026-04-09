import { createContext, useState } from "react";

import arrThingmenn from "../Database/thingmenn.json";
import arrMalaskra from "../Database/malaskra.json";

import { VoteExplenation } from "./voteExplenation";
import { TableHead } from "./Head/tableHead";
import { LoadTableRows } from "./Body/loadGeneralTableRows";

export const TableContext = createContext();

export function LoadTable() {
  const [sorting, setSorting] = useState({ sorting: "date", direction: false });
  const sort = { sorting, setSorting };
  console.log(sort);

  return (
    <TableContext.Provider value={sort}>
      <div className="table-wrap">
        <VoteExplenation />
        <table>
          <thead>
            <TableHead name={true} party={true} votesColor={true} />
          </thead>
          <tbody className="mal-container">
            <LoadTableRows malaskra={arrMalaskra} thingmenn={arrThingmenn} />
          </tbody>
        </table>
      </div>
    </TableContext.Provider>
  );
}
