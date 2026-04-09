import arrEfnisflokkar from "../../Database/efnisflokkar.json";

export function filterByCategory(malaskra, selectedCat) {
  if (selectedCat === `Öll mál`) return malaskra;
  if (malaskra === ``) return malaskra;

  const setNr = new Set(
    arrEfnisflokkar
      .find((yf) => yf.yfirflokkur === selectedCat)
      .undirflokkar.flatMap((uf) => uf.mal)
      .map((mal) => mal.nr),
  );

  const filteredMalaskra = malaskra.filter((mal) => setNr.has(mal.nr));
  return filteredMalaskra;
}
