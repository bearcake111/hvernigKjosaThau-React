export function sortByMal(malaskra, direction) {
  const alphabetical = malaskra.sort((a, b) => {
    const malNrA = a.newestMal.mal.name.trim();
    const malNrB = b.newestMal.mal.name.trim();

    return (
      malNrA.localeCompare(malNrB, "is", { sensitivity: "base" }) *
      (direction ? -1 : 1)
    );
  });
  return alphabetical;
}
