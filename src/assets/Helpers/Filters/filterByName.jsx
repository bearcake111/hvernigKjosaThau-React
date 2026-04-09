import { normalizeString } from "../normalizeString";

export function filterByName(malaskra, filter) {
  if (filter === ``) return malaskra;
  if (malaskra === ``) return malaskra;

  const filteredMalaskra = malaskra.filter((mal) =>
    normalizeString(mal.name).includes(normalizeString(filter)),
  );
  return filteredMalaskra;
}
