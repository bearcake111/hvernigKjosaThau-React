export function NameCell({ name, link }) {
  return (
    <>
      <th className="name">
        <a href={link}>{name}</a>
      </th>
    </>
  );
}
