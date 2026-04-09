export function sortByResult(malaskra, direction) {
  const resultSorted = malaskra.sort((a, b) => {
    const malNrA = a.newestMal.mal.atkv.afgr.trim();
    const malNrB = b.newestMal.mal.atkv.afgr.trim();

    return (
      malNrA.localeCompare(malNrB, "is", { sensitivity: "base" }) *
      (direction ? -1 : 1)
    );
  });
  return resultSorted;
}
