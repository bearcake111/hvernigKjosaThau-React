import { sortByDate } from "./sortByDate";
import { sortByMal } from "./sortByMal";
import { sortByResult } from "./sortByResult";

export function useSortMalaskra(malaskra, sorting) {
  if (sorting.sorting === `date`) {
    return sortByDate(malaskra, sorting.direction);
  }
  if (sorting.sorting === `mal`) {
    return sortByMal(malaskra, sorting.direction);
  }
  if (sorting.sorting === `result`) {
    return sortByResult(malaskra, sorting.direction);
  }
}
