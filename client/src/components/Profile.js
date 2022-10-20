import { React, useEffect, useState } from 'react'
import { Link } from "react-router-dom"
import TopArtistCardContainer from './TopArtistCardContainer';


function Profile({ currentUser }) {
    const { profile_img_url, display_name, spotify_url } = currentUser
    console.log("Profile", currentUser)
    // const [userPlaylists, setUserPlaylists] = useState([])
    const [userTopArtists, setUserTopArtists] = useState([])


    async function getTopArtists() {
        let response = await fetch('http://localhost:3000/api/topartists', {
            method: 'GET',
            headers: {
                'Accept': "application/json",
                'Content-Type': 'application/json'
            },
        })
        response = await response.json()
        console.log("top artists response", response)
        setUserTopArtists(response)
    }
    useEffect(() => {
        getTopArtists()
    }, [setUserTopArtists])

// console.log("the top artists", userTopArtists)

const topArtists = userTopArtists.items
console.log("topArtists", topArtists)


    return (
        <>
            <div className='profile-page'>
                <h1>Hello, {display_name}</h1>

                <a
                    href={spotify_url}>
                    <img src={profile_img_url} alt="profileImg" />
                </a>
                <h3>Your Top Artists:</h3>
                    <TopArtistCardContainer topArtists={topArtists} />
                {/* <Link to={`/rules/grouping`}>
                <button>Let's get Started!</button>
            </Link> */}

            </div>
        </>
    )
}

export default Profile

// const handleCode = async (code) => {
//     console.log("code", code)
//     let response = await fetch('http://localhost:3000/api/login', {
//       method: 'POST',
//       headers: {
//         'Accept': 'application/json',
//         'Content-Type': 'application/json'
//       },
//       body: JSON.stringify({ code })
//     })
//     response = await response.json();
//     console.log("response", response)
//     setCurrentUser(response)

//   }

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