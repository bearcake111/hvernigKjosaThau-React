export function parseDT(date, time = "00:00:00") {
  return new Date(
    date.split(".").reverse().join("-") + (time ? "T" + time : ``),
  );
}
