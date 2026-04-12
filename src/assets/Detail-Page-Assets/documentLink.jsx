export function DocumentLink({ link, text }) {
  return (
    <a id="mal-documents" href={link} target="_blank">
      {!text ? <p>Opna Skjal</p> : <p>{text}</p>}
    </a>
  );
}
