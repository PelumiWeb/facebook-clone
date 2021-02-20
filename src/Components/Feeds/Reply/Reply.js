import { Avatar } from '@material-ui/core'
import React from 'react'
import './Reply.css'

function Reply({replies, id}) {
    return (
        <div className="Reply">
            <div className="replyAvatar">
            <Avatar />
            </div>
            <div className="replyContent">
                <h3>Ogundipe Hassan Pelumi</h3>
            <p>{replies}</p>            

            </div>
        </div>
    )
}

export default Reply
