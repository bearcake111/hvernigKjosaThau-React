import altProfile from "../images/thingmenn-profile.jpg";

import "./profileimg.css";

export function ProfileImg({ img, name }) {
  return (
    <>
      <div className="image-wrapper">
        <img
          src={img || altProfile}
          alt="profile-picture"
          onError={(e) => {
            e.target.onerror = null;
            e.target.src = altProfile;
          }}
        />
        <div className="name-banner">
          <p className="name-text">{name}</p>
        </div>
      </div>
    </>
  );
}
