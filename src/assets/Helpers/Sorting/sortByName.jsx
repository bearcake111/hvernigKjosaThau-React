export function sortByName({ arrThingmenn }, direction) {
  const alphabetical = arrThingmenn.sort((a, b) => {
    const nameA = a.name.trim();
    const nameB = b.name.trim();

    return (
      nameA.localeCompare(nameB, "is", { sensitivity: "base" }) *
      (direction ? -1 : 1)
    );
  });
  return alphabetical;
}
