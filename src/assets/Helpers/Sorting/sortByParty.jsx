export function sortByParty({ arrThingmenn }, direction) {
  const alphabetical = arrThingmenn.sort((a, b) => {
    const nameA = a.flokkur.trim();
    const nameB = b.flokkur.trim();

    return (
      nameA.localeCompare(nameB, "is", { sensitivity: "base" }) *
      (direction ? -1 : 1)
    );
  });
  return alphabetical;
}
