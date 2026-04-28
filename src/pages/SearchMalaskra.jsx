import { createContext, useState } from "react";
import "./SearchMalaskra.css";

import { SearchMalaskraContent } from "../assets/Content-pages/searchMalaskraContent";

export function SearchMalaskra() {
  return (
    <main className="app">
      <SearchMalaskraContent />
    </main>
  );
}
