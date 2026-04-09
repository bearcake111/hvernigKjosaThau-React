export function FoldArrow({ open, onClick }) {
  return (
    <>
      <div
        className={`fold-arrow ${open ? "open" : ""}`}
        onClick={onClick}
      ></div>
    </>
  );
}
