import { Avatar } from '@material-ui/core'
import React from 'react'
import './StoryOption.css'

function StoryOption({onClick}) {
    return (
        <div className="stories"
        onClick={onClick}
        >
            <div className="storiesAvatar">
            <Avatar />
            </div>
            <div className="storiesName">
            <h3>Ogundipe Hassan Pelumi</h3>
            <p>3hr</p>
            </div>
            
        </div>
    )
}

export default StoryOption
