import { ProfileWrapperClick } from "./profileWrapperClick";
import { ProfileImg } from "./profileimg";

export function RenderProfiles({ thingmenn }) {
  return (
    <>
      {thingmenn.map((person) => (
        <ProfileWrapperClick key={person.id} id={person.id}>
          <ProfileImg img={person.img} name={person.name} />
        </ProfileWrapperClick>
      ))}
    </>
  );
}
