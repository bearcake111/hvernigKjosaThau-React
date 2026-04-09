import { YesVote } from "./colorVotes/yesVote";
import { NoVote } from "./colorVotes/noVote";
import { AbstainVote } from "./colorVotes/abstainVote";
import { AwayVote } from "./colorVotes/awayVote";
import { AbscentVote } from "./colorVotes/abscentVote";
import { NullVote } from "./colorVotes/nullVote";

export function VotesColCell(vote) {
  function chosenVote() {
    switch (vote) {
      case `já`:
        return <YesVote />;
      case `nei`:
        return <NoVote />;
      case `greiðir-ekki-atkvæði`:
        return <AbstainVote />;
      case `jboðaði-fjarvistá`:
        return <AwayVote />;
      case `fjarverandi`:
        return <AbscentVote />;
      default:
        return <NullVote />;
    }
  }
  return <>{chosenVote()}</>;
}
