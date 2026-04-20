import { YesVote } from "./colorVotes/yesVote";
import { NoVote } from "./colorVotes/noVote";
import { AbstainVote } from "./colorVotes/abstainVote";
import { AwayVote } from "./colorVotes/awayVote";
import { AbscentVote } from "./colorVotes/abscentVote";
import { NullVote } from "./colorVotes/nullVote";

import { normalizeString } from "../../../Helpers/normalizeString";

export function VotesColCell({ thingmadur, mal }) {
  const vote = mal.atkvListi.find(
    (name) =>
      normalizeString(name.nafn.trim()) === normalizeString(thingmadur.trim()),
  );
  function chosenVote() {
    if (!vote) return <NullVote />;
    switch (vote.atkv) {
      case `já`:
        return <YesVote />;
      case `nei`:
        return <NoVote />;
      case `greiðir-ekki-atkvæði`:
        return <AbstainVote />;
      case `boðaði-fjarvist`:
        return <AwayVote />;
      case `fjarverandi`:
        return <AbscentVote />;
      default:
        return <NullVote />;
    }
  }
  return <>{chosenVote()}</>;
}
