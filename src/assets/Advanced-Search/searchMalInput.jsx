import { useState, useContext } from "react";
import { FilterContext } from "../../pages/SearchMalaskra";

export function SearchMalInput() {
  const { filter, setFilter } = useContext(FilterContext);
  const [inputValue, setInputValue] = useState(``);

  function updateFilter() {
    setFilter((prev) => ({ ...prev, name: inputValue }));
    setInputValue(``);
  }

  return (
    <div className="container">
      <h3 id="malaskra-searchbar-text">Leita í málaskrá</h3>
      <input
        type="text"
        value={inputValue}
        onChange={(e) => setInputValue(e.target.value)}
        id="search-malaskra-input"
        placeholder="Leita að máli"
      />
      <input
        type="button"
        id="search-malaskra-button"
        className="button"
        value="Leita"
        onClick={updateFilter}
      />
    </div>
  );
}
