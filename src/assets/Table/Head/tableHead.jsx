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
}) {
  return (
    <>
      <thead>
        <tr className="table-descriptions">
          {fold && <FoldArrowHead />}
          {dags && <DateHead />}
          {name && <NameHead />}
          {party && <PartyHead />}
          {mal && <MalHead />}
          {more && <MoreHead />}
          {votesColor && <VotesColHead />}
          {voteTotal && <VoteTTHead />}
          {results && <ResultHead />}
        </tr>
      </thead>
    </>
  );
}
