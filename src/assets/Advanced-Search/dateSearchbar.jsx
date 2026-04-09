import { useContext, useState } from "react";
import { FilterContext } from "../../pages/SearchMalaskra";

import { ErrorChooseDate } from "./ErrorMessages/errorChooseDate";
import { ErrorWrongDateOrder } from "./ErrorMessages/errorIncorrectDateOrder";

export function DateSearchbar() {
  const { filter, setFilter } = useContext(FilterContext);
  const [startDate, setStartDate] = useState(``);
  const [endDate, setEndDate] = useState(``);

  const [errChDt, setErrChDt] = useState(false);
  const [errWrOr, setErrWrOr] = useState(false);

  function checkDate() {
    setErrChDt(!startDate || !endDate);
    setErrWrOr(startDate > endDate);
    return !errChDt && !errWrOr;
  }

  function updateFilter() {
    if (!checkDate()) return;
    setFilter((prev) => ({
      ...prev,
      date: { start: startDate, end: endDate },
      name: ``,
    }));
    setStartDate(``);
    setEndDate(``);
  }
  return (
    <div id="date-searchbar" className="container">
      <div>
        <p>Flokka eftir dagsetningu:</p>
      </div>
      <div className="choose-date">
        <p>Frá</p>
        <input
          type="date"
          value={startDate}
          onChange={(e) => setStartDate(e.target.value)}
          id="input-date-first"
          className="date-first"
        />
      </div>
      <div className="choose-date">
        <p>Til</p>
        <input
          type="date"
          value={endDate}
          onChange={(e) => setEndDate(e.target.value)}
          id="input-date-second"
          className="date-second"
        />
      </div>
      <div className="date-button">
        {errChDt && <ErrorChooseDate />}
        {errWrOr && <ErrorWrongDateOrder />}
        <input
          type="button"
          onClick={updateFilter}
          id="search-date-button"
          className="button"
          value="Leita"
        />
      </div>
    </div>
  );
}
