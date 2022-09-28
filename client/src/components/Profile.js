import React from 'react'
import { Link } from "react-router-dom"
import TopArtistCardContainer from './TopArtistCardContainer';


function Profile({ currentUser }) {
    const { profile_img_url, display_name, spotify_url } = currentUser
console.log("Profile", currentUser)
    // const [userPlaylists, setUserPlaylists] = useState([])
    // const [userTopArtists, setUserTopArtists] = useState([])

// useEffect(() => {
    //     async function fetchMyTopArtists() {
    //         let response = await fetch('https://api.spotify.com/v1/me/top/artists?limit=12', {
    //             method: 'GET',
    //             headers: {
    //                 'Accept': "application/json",
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${accessToken}`
    //             },
    //         })
    //         response = await response.json()
    //         // console.log(response)
    //         setUserTopArtists(response)
    //     }

    //     fetchMyTopArtists()

    // }, [accessToken, setUserTopArtists])


// const topArtists = userTopArtists.items
// console.log(topArtists)


    return (
        <>
    <div>
            <h1>Hello, {display_name}</h1>

            <a
            href={spotify_url}>
            <img src={profile_img_url}  alt="profileImg"/>
            </a>

            {/* <Link to={`/rules/grouping`}>
                <button>Let's get Started!</button>
            </Link> */}

            </div>
            </>
  )
}

export default Profile

