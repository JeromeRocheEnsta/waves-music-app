import React from 'react';

const LibrarySong = ( {song, songs, setCurrentSong, audioRef, isPlaying, setSongs} ) => {
    const songSelectHandler = () => {
        setCurrentSong(song);
        //Add active state
        const newSongs = songs.map((Song) => {
            if(Song.id === song.id){
                return{
                    ...Song,
                    active: true,
                }
            } else {
                return {
                    ...Song,
                    active: false,
                }
            }
        });
        setSongs(newSongs)
        if(isPlaying){
            const playPromise = audioRef.current.play();
            if (playPromise !== undefined){
                playPromise.then((audio) => {
                    audioRef.current.play();
                });
            }
        }
    }
    
    return(
        <div onClick={songSelectHandler} className={`library-song ${song.active ? 'selected' : ""} `}>
            <img alt={song.name} src={song.cover}></img>
            <div className="song-description">
                <h3>{song.name}</h3>
                <h4>{song.artist}</h4>
            </div>
        </div>
    )
}

export default LibrarySong;