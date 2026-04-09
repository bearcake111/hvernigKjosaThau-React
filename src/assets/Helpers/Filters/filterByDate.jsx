import { parseDT } from "../parseDT";

export function filterByDate(malaskra, filter) {
  if (filter === `any`) return malaskra;
  if (malaskra === ``) return malaskra;

  const startDate = new Date(filter.start);
  const endDate = new Date(filter.end);

  const filteredMalaskra = malaskra.filter((mal) => {
    const malDate = parseDT(mal.date);
    return malDate >= startDate && malDate <= endDate;
  });
  return filteredMalaskra;
}
