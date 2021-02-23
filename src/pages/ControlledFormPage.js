import React, { useState } from "react";
import { SuccessButton } from "../components/Button";

export const ControlledFormPage = () => {
  // create useState variables, functions and initialize to empty string
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [favoriteColor, setFavoriteColor] = useState("");

  // set value equal to useState variable and use useState function to receive event target
  // value input as the input changes with onChange event handler
  // pass buttonColor value to Button tag

  return (
    <form>
      <h3>Please enter your information:</h3>
      <div>
        <input
          type="text"
          placeholder="Name"
          value={name}
          onChange={(e) => setName(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
        />
      </div>
      <div>
        <input
          type="text"
          placeholder="Favorite Color"
          value={favoriteColor}
          onChange={(e) => setFavoriteColor(e.target.value)}
        />
      </div>
      <SuccessButton
        onClick={(e) => {
          alert(`
          Your name is ${name},
          your email is ${email},
          and your favorite color is ${favoriteColor}!  
        `);
          e.preventDefault();
        }}
      >
        Submit
      </SuccessButton>
    </form>
  );
};
