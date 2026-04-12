import arrThingskjol from "../../Database/thingskjol.json";
import { DocumentLink } from "../documentLink";

export function InfoDocuments({ malNr }) {
  const documents = arrThingskjol[0].documents.find(
    (mal) => mal.mal === malNr,
  ).docs;
  return (
    <>
      <p>Fylgiskjöl:</p>
      {documents.length === 0 ? (
        <p>Enging fylgiskjöl fundust</p>
      ) : (
        documents.map((doc, i) => (
          <DocumentLink link={doc} text={`Skjal ${i + 1}`} />
        ))
      )}
    </>
  );
}
