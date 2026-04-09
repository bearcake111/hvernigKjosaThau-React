import { createContext, useState } from "react";
import "./SearchMalaskra.css";

import { SearchMalaskraContent } from "../assets/Content-pages/searchMalaskraContent";

export const FilterContext = createContext();

export function SearchMalaskra() {
  const [filter, setFilter] = useState({
    cat: `Öll mál`,
    date: `any`,
    name: ``,
  });
  const categories = { filter, setFilter };

  return (
    <main className="app">
      <FilterContext.Provider value={categories}>
        <SearchMalaskraContent />
      </FilterContext.Provider>
    </main>
  );
}
