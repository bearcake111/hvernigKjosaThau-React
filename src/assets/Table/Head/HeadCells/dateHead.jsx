import { HeadCell } from "./headCell";

export function DateHead({ sorting, setSorting }) {
  return (
    <>
      <HeadCell
        type={"date"}
        text={"Dags."}
        sorting={sorting}
        setSorting={setSorting}
      />
    </>
  );
}
