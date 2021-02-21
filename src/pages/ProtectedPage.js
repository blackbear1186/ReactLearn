import React, {useEffect} from "react";
import { useHistory } from "react-router-dom";

// set isAuthed to false to automatically get redirected to home page
// set isAuthed to true to get to the ProtectedPage
// use useHistory and useEffect to redirect to home page
export const ProtectedPage = () => {

  const history = useHistory();
  const isAuthed = true;

  useEffect(() => {
    if(!isAuthed){
      history.push('/');
    }
  })

  return (
    <h1>Only authorized users should be able to see this page.</h1>
  )
};
