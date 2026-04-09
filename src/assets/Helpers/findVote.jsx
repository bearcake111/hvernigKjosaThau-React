export function findVote({ thingmadur }, { mal }) {
  return mal.atkvListi.find((atkv) => atkv.nafn === thingmadur.name).nafn;
}
