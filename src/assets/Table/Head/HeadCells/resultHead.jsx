import { HeadCell } from "./headCell";

export function ResultHead({ sorting, setSorting }) {
  return (
    <>
      <HeadCell
        type={"result"}
        text={"Niðurstaða"}
        sorting={sorting}
        setSorting={setSorting}
      />
    </>
  );
}
