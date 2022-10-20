import React, { useState, useEffect } from 'react'
// import UserPlaylistDetail from './UserPlaylistDetail';


// prop to pass "getPlaylistToDelete"
function Playlists() {
    const [userPlaylists, setUserPlaylists] = useState([])


        async function getPlaylists() {
            let response = await fetch('http://localhost:3000/api/playlists', {
                method: 'GET',
                headers: {
                    'Accept': "application/json",
                    'Content-Type': 'application/json',
                },
            })
            response = await response.json()
            console.log('USER PLAYLISTS', response)
            setUserPlaylists(response)
        }
        useEffect(() => {
            getPlaylists()
        }, [setUserPlaylists])

    const playlists = userPlaylists.items
    console.log('PLAYLIST ITEMS', playlists)


    return (
        <div className='content-block content-block-primary'>
            <h2>Your Spotify Playlists</h2>
            {/* <ul>{playlists?.map(item =>
                <UserPlaylistDetail
                    key={item.id}
                    playlist={item}
                    accessToken={accessToken}
                    getPlaylistToDelete={getPlaylistToDelete}/>)}</ul> */}
        </div>
    )
}

export default Playlists