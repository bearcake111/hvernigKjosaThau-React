export function FoldArrow({ open, onClick }) {
  return (
    <th>
      <div
        className={`fold-arrow ${open ? "open" : ""}`}
        onClick={onClick}
      ></div>
    </th>
  );
}
