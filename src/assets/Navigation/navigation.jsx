import { NavButton } from "./navButton";

export function Navigation() {
  return (
    <nav>
      <div className="page-title">
        <h1>Hvernig kjósa þau?</h1>
      </div>
      <NavButton id="tab-thingmenn" text="Þingmenn" to="/" />
      <NavButton
        id="tab-malaskra"
        text="Leita í málaskrá"
        to="/leita-i-malaskra"
      />
      <NavButton id="tab-about" text="Um síðuna" to="/um-siduna" />
      <NavButton id="tab-details" text="Mal Details" to="/mal-details" />
    </nav>
  );
}
