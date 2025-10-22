import React from "react";

const ProfileCard = ({ user }) => {
  return (
    <div className="border p-4 rounded shadow">
      <h3 className="font-bold">{user.name}</h3>
      <p>Email: {user.email}</p>
    </div>
  );
};

export default ProfileCard;
