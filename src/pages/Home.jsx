import arrThingmenn from "../assets/Database/thingmenn.json";

import { RenderProfiles } from "../assets/profiles/renderProfiles.jsx";
import { NameInput } from "../assets/nameInput.jsx";

import { useState } from "react";
import "./Home.css";
import { normalizeString } from "../assets/Helpers/normalizeString.jsx";

export function Home() {
  const [filter, setFilter] = useState(``);

  const filteredThingmenn = arrThingmenn.filter((person) =>
    normalizeString(person.name).includes(normalizeString(filter)),
  );

  return (
    <main className="app">
      <section id="searchbar">
        <NameInput filter={filter} setFilter={setFilter} />
      </section>
      <section id="profiles">
        <RenderProfiles thingmenn={filteredThingmenn} />
      </section>
    </main>
  );
}
