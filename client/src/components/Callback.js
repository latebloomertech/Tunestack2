import { React, useEffect } from "react";
// import { Redirect } from "react-router-dom"
import Profile from "./Profile";

function Callback({ handleCode, currentUser }) {

  const code = window.location.search.split("?code=")[1];


  useEffect(() => {
    console.log(code)
    if (code) {
      handleCode(code)
    }
  }, [])


  if (currentUser)
    return (
      <>
        <Profile currentUser={currentUser} />
      </>
    )
}

export default Callback

    // <>
    // <Redirect to='/profile' />
    // </>