import React, { useState } from 'react'
import Status from './Status/Status'
import './Feeds.css'
import Post from './Post/Post'

function Feeds() {
   
    return (
        <div className="Feeds">
          <Status />
          <div className="Post">
                <Post  />
            </div>
            
            
        </div>
    )
}

export default Feeds
