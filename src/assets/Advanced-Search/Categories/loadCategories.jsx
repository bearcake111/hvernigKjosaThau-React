import efnisflokkar from "../../Database/efnisflokkar.json";
import { CategoryButton } from "./categoryButton";

export function LoadCategories() {
  function createId(flokkur) {
    return flokkur.yfirflokkur.replaceAll(` `, `-`);
  }
  return (
    <div id="efnisflokkar" className="container">
      {efnisflokkar.toReversed().map((flokkur) => (
        <CategoryButton
          id={createId(flokkur)}
          text={flokkur.yfirflokkur}
          key={createId(flokkur)}
        />
      ))}
      <CategoryButton key="oll-mal" id="oll-mal" text="Öll mál" />
    </div>
  );
}
