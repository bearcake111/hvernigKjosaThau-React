import { HeadCell } from "./headCell";

export function MalHead({ sorting, setSorting }) {
  return (
    <>
      <HeadCell
        type={"mal"}
        text={"Mál"}
        sorting={sorting}
        setSorting={setSorting}
      />
    </>
  );
}
