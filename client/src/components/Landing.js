import React, { useEffect, useState } from 'react';
// import { Link } from "react-router-dom"
// import TopArtistCardContainer from './TopArtistCardContainer';


function Landing({ accessToken }) {
    console.log({accessToken})
    // const [spotifyUser, setSpotifyUser] = useState([])
    // const [userPlaylists, setUserPlaylists] = useState([])
    // const [userTopArtists, setUserTopArtists] = useState([])
    // const [tuneStackUser, setTuneStackUser] = useState([])

    // useEffect(() => {
    //     async function fetchMyAPI() {
    //         let response = await fetch('https://api.spotify.com/v1/me', {
    //             method: 'GET',
    //             headers: {
    //                 'Accept': "application/json",
    //                 'Content-Type': 'application/json',
    //                 'Authorization': `Bearer ${accessToken}`
    //             },
    //         })
    //         response = await response.json()
    //         // console.log('SPOTIFY USER', response)
    //         setSpotifyUser(response)
    //     }

    //     fetchMyAPI()

    // }, [accessToken, setSpotifyUser])

    // const userProfilePicture = spotifyUser.images
    // console.log(userProfilePicture)


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
    <div>
                <div className='landing-and-confirmation-pages'>
                    <h2 className='fade-in-text'> Welcome to TuneStack</h2>

                    <div className='welcome-paragraph'>
                        <p>Connect to your Spotify account and organize your saved songs <br></br>in dynamic new ways.</p>

                        <p>TuneStack will organize your saved songs into playlists based on <br></br> your preferences.</p>

                        <p>After sigining in to Spotify, you will choose how to group, filter, and <br></br>order the songs on your newly created playlists!</p>
                    </div>

                    <h2 className='sign-in-prompt'>Sign in to Spotify to get started:</h2>

                    <a href="http://localhost:3000/api/v1/login">
                        <button className='button button-secondary'>Sign in with Spotify</button>
                    </a>
                </div>

            </div>
)
}

export default Landing
