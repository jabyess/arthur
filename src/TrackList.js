import React from 'react'
import Track from './Track'
import { useState } from 'react';

const TrackList = ({ tracks }) => {

    const [expanded, setExpanded] = useState([])

    return (
        tracks.map((track, i) => 
                <Track track={track} key={i} />
        )
        
    )
}

export default TrackList