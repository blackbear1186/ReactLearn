import React from "react";
import { Redirect } from "react-router-dom";

// set isAuthed to false to automatically get redirected to home page
// set isAuthed to true to get to the ProtectedPage
export const ProtectedPage = () => {
  const isAuthed = false;
  return isAuthed ? (
    <h1>Only authorized users should be able to see this page.</h1>
  ) : (
    <Redirect to="/" />
  );
};
