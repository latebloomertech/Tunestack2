import { React, useEffect} from "react";
import Profile from "./Profile";
import { Redirect } from "react-router-dom"

function Callback({handleCode}) {


    const code = window.location.search.split("?code=")[1];

    useEffect(() => {
      handleCode(code)
      }, [])

  return (
    <>
    <Redirect to='/profile' />
    </>
  )

}

export default Callback