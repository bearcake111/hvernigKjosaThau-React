import { sortByName } from "./sortByName";
import { sortByParty } from "./sortByParty";

export function useSortThingmenn({ arrThingmenn }, sorting) {
  if (sorting.sorting === `name`) {
    return sortByName({ arrThingmenn }, sorting.direction);
  }
  if (sorting.sorting === `party`) {
    return sortByParty({ arrThingmenn }, sorting.direction);
  }
}
