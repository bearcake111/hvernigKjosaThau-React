import { useContext } from "react";
import { FilterContext } from "../../../pages/SearchMalaskra";

export function CategoryButton({ id, text }) {
  const { filter, setFilter } = useContext(FilterContext);
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
