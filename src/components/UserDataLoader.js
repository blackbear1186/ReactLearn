import React, { useState, useEffect } from 'react'

export const UserDataLoader = ({ children }) => {
  const [user, setUser] = useState({ name: {} });

  // use the useEffect to fetch user data from api
  // add empty array at end so that data flow only happens once when first visit page
  useEffect(() => {
    const fetchUser = async () => {
      const response = await fetch("https://randomuser.me/api/");
      const data = await response.json();
      // get first user of the array
      setUser(data.results[0]);
    };

    // call the fetchuser function
    fetchUser();
  }, []);

  return React.Children.map(children, child => 
    React.cloneElement(child, { user}))
}
 