import { ProfileImg } from "./profileimg";

export function ProfileWrapper({ img, name }) {
  return (
    <div class="profile-container">
      <ProfileImg img={img} name={name} />
    </div>
  );
}
