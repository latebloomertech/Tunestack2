import React from 'react';

function Landing({ currentUser }) {

return (

        // below original code used currentuser.id

        <>
                < div >
                    <h2> Welcome to TuneStack</h2>

                    <div>
                        <p>Connect to your Spotify account and organize your saved songs <br></br>in dynamic new ways.</p>

                        <p>TuneStack will organize your saved songs into playlists based on <br></br> your preferences.</p>

                        <p>After sigining in to Spotify, you will choose how to group, filter, and <br></br>order the songs on your newly created playlists!</p>
                    </div>

                    <h2>Sign in to Spotify to get started:</h2>

                    <a href="http://localhost:3000/api/auth">
                        <button>Sign in with Spotify</button>
                    </a>
                </div>
        </>
    )
}

export default Landing


