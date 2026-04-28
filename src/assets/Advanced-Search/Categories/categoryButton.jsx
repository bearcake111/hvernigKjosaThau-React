export function CategoryButton({ id, text, setFilter }) {
  function updateFilter() {
    setFilter((prev) => ({ date: `any`, name: ``, cat: text }));
  }

  return (
    <div className="yfirflokkur-div" onClick={updateFilter}>
      <p id={id} className="yfirflokkur-txt">
        {text}
      </p>
    </div>
  );
}
