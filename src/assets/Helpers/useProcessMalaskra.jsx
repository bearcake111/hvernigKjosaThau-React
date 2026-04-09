import { useFilterMalaskra } from "./Filters/useFilterMalaskra";
import { foldMal } from "./foldMal";
import { useSortMalaskra } from "./Sorting/useSortMalaskra";

export function useProcessMalaskra(arrMalaskra) {
  const filteredMalaskra = useFilterMalaskra(arrMalaskra);
  const foldedMalaskra = foldMal(filteredMalaskra);
  const sortedMalaskra = useSortMalaskra(foldedMalaskra);
  return sortedMalaskra;
}
