import { SortingArrow } from "./sortingArrow";

export function HeadCell({ type, text, sorting, setSorting }) {
  //BUG Clicking on the div doesn't allways update the sorting, not sure why.
  function updateSorting() {
    setSorting((prev) =>
      prev.sorting === type
        ? { ...prev, direction: !prev.direction }
        : { sorting: type, direction: false },
    );
  }

  const isActiveColumn = sorting.sorting === type;

  return (
    <>
      <th className={`category-${type}`}>
        <div
          className="heading-container"
          onClick={() => {
            updateSorting();
          }}
        >
          <h2 className="heading-label">{text}</h2>
          <SortingArrow rotated={isActiveColumn && sorting.direction} />
        </div>
      </th>
    </>
  );
}
