import { useContext } from "react";
import { FilterContext } from "../../../pages/SearchMalaskra";

import { filterByName } from "./filterByName";
import { filterByDate } from "./filterByDate";
import { filterByCategory } from "./filterByCategory";

export function useFilterMalaskra(malaskra) {
  const { filter, setFilter } = useContext(FilterContext);
  return filterByName(
    filterByDate(filterByCategory(malaskra, filter.cat), filter.date),
    filter.name,
  );
}
