import { createContext, useState } from "react";

export const TableContext = createContext();

export function LoadTable({ children }) {
  const [sorting, setSorting] = useState({ sorting: "date", direction: false });
  const sort = { sorting, setSorting };

  return (
    <TableContext.Provider value={sort}>
      <div className="table-wrap">
        <table>{children}</table>
      </div>
    </TableContext.Provider>
  );
}
