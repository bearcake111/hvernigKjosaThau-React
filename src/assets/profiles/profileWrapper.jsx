import { ProfileImg } from "./profileimg";

export function ProfileWrapper({ img, name }) {
  return (
    <div className="profile-container">
      <ProfileImg img={img} name={name} />
    </div>
  );
}
