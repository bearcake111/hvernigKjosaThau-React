export function sortByDate(malaskra, direction) {
  return !direction ? malaskra : malaskra.toReversed();
}
