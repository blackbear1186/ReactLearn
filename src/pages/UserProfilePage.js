import React from "react";
import { useUserData } from '../useUserData';

export const UserProfilePage = () => {
  // use the the custom useUserData hook
  // data comes a hook instead of from props
  const user = useUserData();
  return (
    <div>
      <h3>
        Name: {user.name.first} {user.name.last}
      </h3>
      <p>Email: {user.email}</p>
    </div>
  );
};
