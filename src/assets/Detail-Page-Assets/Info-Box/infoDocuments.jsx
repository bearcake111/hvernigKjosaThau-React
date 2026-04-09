import { DocumentLink } from "../documentLink";

export function InfoDocuments({ documents }) {
  const documentExist = Boolean(documents);
  return (
    <>
      <p>Fylgiskjöl:</p>
      {!documentExist ? (
        <p>Enging fylgiskjöl fundust</p>
      ) : (
        <DocumentLink link={documents} />
      )}
    </>
  );
}
