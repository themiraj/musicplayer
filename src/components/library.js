import React from 'react';
import LibrarySong from './librarySongs';

const Library = (songs) => {
    return (
        <div className="library">
            <h2>Library</h2> 
            <div className="library-songs">
            {songs.songs.map((song) => (
                <LibrarySong  song={song} key={song.name}/>
            ))}
            </div>
        </div>
    )
}

export default Library;