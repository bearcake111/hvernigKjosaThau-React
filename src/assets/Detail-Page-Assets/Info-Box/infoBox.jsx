import { InfoHeading } from "./infoHeading";
import { InfoDate } from "./infoDate";
import { InfoStatus } from "./infoStatus";
import { InfoDocuments } from "./infoDocuments";

export function InfoBox({ mal }) {
  return (
    <div id="description-container" className="container">
      <InfoHeading name={mal.name} />
      <InfoDate date={mal.date} />
      <InfoStatus status={mal.atkv.afgr} />
      <InfoDocuments documents={mal.skjalPdf} />
    </div>
  );
}
