import React from "react";
import { ProfileList } from "./ProfileList.js";
import "../styles.css/userprofiles.css";

function UserProfiles({ user }) {
  // let [title, firstName, lastName] = ProfileList;
  let filteredUserList = ProfileList.filter((profile) => {
    let { title, firstName, lastName } = profile;
    let fullName = (title + firstName + lastName).toLowerCase();
    return fullName.includes(user.toLowerCase());
  });

  let UserProfile = filteredUserList.map((profile) => (
    <div key={profile.id} className="userprofile">
      <div className="img-container">
        <img
          className="profile-img"
          src={profile.picture}
          alt="user profile avatar"
        />
      </div>
      <div className="profile-info">
        <p className="profile-id">{profile.id}</p>
        <p className="profile-name">
          {profile.title} {profile.firstName} {profile.lastName}
        </p>
      </div>
    </div>
  ));
  return <div className="userprofiles-container">{UserProfile}</div>;
}

export default UserProfiles;
