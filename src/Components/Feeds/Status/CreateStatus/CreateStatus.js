import React from 'react'
import Add from '@material-ui/icons/Add'
import './CreateStatus.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../features/userSlice'
import { useHistory } from 'react-router-dom'

function CreateStatus() {
    const {photoUrl} = useSelector(selectUser)
    const history = useHistory()
    return (
<div className="CreateStatus">
    <div className="createStatus_imageContainer">
        <img src={photoUrl} alt=""/>
        </div>
        <div className="CreateStatus-AddBakground" />
         <Add 
         style={{
            zIndex: 25,
            cursor: "pointer"

         }}
         onClick={() => {
             console.log('clicked')
             history.push('/stories/create')
         }}
         className="AddIcon" />  

         <h2>Create a Story</h2>
            
</div>
    )
}

export default CreateStatus
