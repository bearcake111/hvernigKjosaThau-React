export function SortingArrow({ rotated }) {
  const rotate = rotated ? "arrow-rotated" : ``;
  return (
    <>
      <div id="arrow-date" className={`filter-arrow arrow-up ${rotate}`}></div>
    </>
  );
}
