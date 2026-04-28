import { filterByName } from "./filterByName";
import { filterByDate } from "./filterByDate";
import { filterByCategory } from "./filterByCategory";

export function useFilterMalaskra(malaskra, filter) {
  return filterByName(
    filterByDate(filterByCategory(malaskra, filter.cat), filter.date),
    filter.name,
  );
}
