import { ProfileWrapper1 } from "./profileWrapper1";
import { ProfileImg } from "./profileimg";

export function RenderProfiles({ thingmenn }) {
  // function routTo() {
  //   navigate(to);
  // }
  return (
    <>
      {thingmenn.map((person) => (
        <ProfileWrapper1 key={person.id}>
          <ProfileImg img={person.img} name={person.name} />
        </ProfileWrapper1>
      ))}
    </>
  );
}
