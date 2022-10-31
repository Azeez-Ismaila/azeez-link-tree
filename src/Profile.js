import React from "react";
import image from "../src/images/IMG_013622.jpg";
import { FaTwitter } from "react-icons/fa";
const Profile = () => {
  return (
    <div className="flex flex-col items-center gap-1 p-2 pt-4">
      <img
        src={image}
        id="profile__img"
        alt=""
        className="rounded-full mx-32 bg-green-400 h-24 w-24
                flex items-center justify-center"
      />
      <h1 id="twitter" className="flex items-center">
        <FaTwitter />
        @mr_zyzie
      </h1>
      <h1
      //   id="slack"
      >
        Azeez Ismaila
      </h1>
    </div>
  );
};

export default Profile;
