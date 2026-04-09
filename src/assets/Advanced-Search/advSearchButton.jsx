export function AdvSearchButton({ onClick }) {
  return (
    <button
      className="advanced-search-btn"
      aria-label="Ítarleg leit"
      onClick={onClick}
    >
      <span className="text">Ítarleg leit</span>
    </button>
  );
}
