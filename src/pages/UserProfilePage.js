import React from "react";

export const UserProfilePage = ({ user }) => {


  return (
    <div>
      <h3>
        Name: {user.name.first} {user.name.last}
      </h3>
      <p>Email: {user.email}</p>
    </div>
  );
};
