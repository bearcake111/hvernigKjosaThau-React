import { ProfileWrapper1 } from "./profileWrapper1";
import { ProfileImg } from "./profileimg";

export function RenderProfiles({ thingmenn }) {
  return (
    <>
      {thingmenn.map((person) => (
        <ProfileWrapper1 key={person.id} id={person.id}>
          <ProfileImg img={person.img} name={person.name} />
        </ProfileWrapper1>
      ))}
    </>
  );
}
