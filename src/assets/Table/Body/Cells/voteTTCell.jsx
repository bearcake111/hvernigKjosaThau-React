export function VoteTTCell({ atkv }) {
  return (
    <>
      <td className="vote-tt">{atkv.ja}</td>
      <td className="vote-tt">{atkv.nei}</td>
      <td className="vote-tt">{atkv.greiðirEkki}</td>
    </>
  );
}
