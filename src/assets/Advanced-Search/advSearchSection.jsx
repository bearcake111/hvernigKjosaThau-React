import { useState } from "react";

import { AdvSearchButton } from "./advSearchButton";
import { DateSearchbar } from "./dateSearchbar";
import { LoadCategories } from "./Categories/loadCategories";

export function AdvSearchSection({ setFilter }) {
  const [isShown, setIsShown] = useState(false);

  const hideElement = () => {
    setIsShown((current) => !current);
  };

  return (
    <div id="advanced-search-container" className="container">
      <AdvSearchButton onClick={hideElement} />
      {isShown && <DateSearchbar setFilter={setFilter} />}
      {isShown && <LoadCategories setFilter={setFilter} />}
    </div>
  );
}
