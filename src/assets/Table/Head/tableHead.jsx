import { FoldArrowHead } from "./HeadCells/foldArrowHead";
import { DateHead } from "./HeadCells/dateHead";
import { NameHead } from "./HeadCells/nameHead";
import { PartyHead } from "./HeadCells/partyHead";
import { MalHead } from "./HeadCells/malHead";
import { MoreHead } from "./HeadCells/moreHead";
import { VotesColHead } from "./HeadCells/votesColHead";
import { VoteTTHead } from "./HeadCells/voteTTHead";
import { ResultHead } from "./HeadCells/resultHead";

export function TableHead({
  fold,
  dags,
  mal,
  name,
  party,
  more,
  votesColor,
  voteTotal,
  results,
  sorting,
  setSorting,
}) {
  return (
    <>
      <thead>
        <tr className="table-descriptions">
          {fold && <FoldArrowHead />}
          {dags && <DateHead sorting={sorting} setSorting={setSorting} />}
          {name && <NameHead sorting={sorting} setSorting={setSorting} />}
          {party && <PartyHead sorting={sorting} setSorting={setSorting} />}
          {mal && <MalHead sorting={sorting} setSorting={setSorting} />}
          {more && <MoreHead />}
          {votesColor && <VotesColHead />}
          {voteTotal && <VoteTTHead />}
          {results && <ResultHead sorting={sorting} setSorting={setSorting} />}
        </tr>
      </thead>
    </>
  );
}
