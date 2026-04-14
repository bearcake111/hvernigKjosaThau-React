import { HeadCell } from "./headCell";

export function PartyHead({ sorting, setSorting }) {
  return (
    <>
      <HeadCell
        type={"party"}
        text={"Flokkur"}
        sorting={sorting}
        setSorting={setSorting}
      />
    </>
  );
}
