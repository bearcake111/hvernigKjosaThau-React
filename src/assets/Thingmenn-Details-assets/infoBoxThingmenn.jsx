import { ProfileWrapper } from "../profiles/profileWrapper";

export function InfoBoxThingmenn({ thingmadur }) {
  return (
    <div id="profile-container" className="container">
      <ProfileWrapper img={thingmadur.img} name={thingmadur.name} />
      <h3>
        Flokkur:
        <p id="label-party">{thingmadur.flokkur}</p>
      </h3>
      <h3>
        Þingseta:
        <div id="container-thingseta">
          {thingmadur.thingsetaNr?.length > 0 &&
            thingmadur.thingsetaNr.map((nr, i) => (
              <p className="thingseta" key={i}>
                {nr}
              </p>
            ))}
        </div>
      </h3>
    </div>
  );
}
