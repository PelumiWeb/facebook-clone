import { Avatar } from '@material-ui/core'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../features/userSlice'
import {useHistory} from 'react-router-dom'
import './Statuses.css'

function Statuses() {
    const user = useSelector(selectUser)
    const history = useHistory()
    return (
        <div className="Statuses"
        onClick={() => history.push('/stories')}
        >
          <img
         
          className="Statuses-image"
          src={user.photoUrl} alt="Images" />

          <Avatar 
           src={user.photoUrl} className="Statuses-Avatar" />
            <h2>{user.displayName}</h2>
        </div>
    )
}

export default Statuses
