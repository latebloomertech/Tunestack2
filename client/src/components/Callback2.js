// import { React, useEffect, useState} from "react";
// // import { Redirect } from "react-router-dom"
// import Profile from "./Profile";

// function Callback2() {
//     const [currentUser, setCurrentUser] = useState(null)

//     const handleCode = async (code) => {
//         console.log("code", code)
//         let response = await fetch('http://localhost:3000/api/login', {
//           method: 'POST',
//           headers: {
//             'Accept': 'application/json',
//             'Content-Type': 'application/json'
//           },
//           body: JSON.stringify({ code })
//         })
//         response = await response.json();
//         console.log("response", response)
//         setCurrentUser(response)
//       }
//       console.log("currentUser", currentUser)



//   const code = window.location.search.split("?code=")[1];

//     useEffect(() => {
//       handleCode(code)
//       },[])

//   return (
//   <>
//     <Profile currentUser={currentUser}/>
//     </>
//   )
// }

// export default Callback2