import { HeadCell } from "./headCell";

export function NameHead({ sorting, setSorting }) {
  return (
    <>
      <HeadCell
        type={"name"}
        text={"Þingmaður"}
        sorting={sorting}
        setSorting={setSorting}
      />
    </>
  );
}
