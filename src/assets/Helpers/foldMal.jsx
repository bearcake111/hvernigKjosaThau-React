import { parseDT } from "./parseDT";

export function foldMal(malaskra) {
  if (malaskra.length === 0) return;

  const groups = new Map();

  malaskra.forEach((mal) => {
    const nr = mal.nr;
    const date = mal.date;
    const time = mal.time;

    if (!groups.has(nr)) groups.set(nr, []);
    groups.get(nr).push({ mal, date, time });
  });

  const foldedArr = [];

  groups.forEach((malNr) => {
    if (malNr.length === 1) {
      return;
    }

    malNr.sort((a, b) => {
      return parseDT(b.date, b.time) - parseDT(a.date, a.time);
    });

    foldedArr.push({
      newestMal: malNr[0],
      olderMal: malNr.slice(1).map((x) => x.mal),
    });
  });
  const foldedMalaskra = foldedArr.toReversed();

  return foldedMalaskra;
}
