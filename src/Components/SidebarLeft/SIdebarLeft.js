import React from 'react'
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { Avatar } from '@material-ui/core';
import SidebarLeftOption from '../SidebarOption/SidebarOption'

import './SidebarLeft.css'
import { useSelector } from 'react-redux';
import { selectUser } from '../../features/userSlice';

function SIdebarLeft() {
    const user = useSelector(selectUser)
    return (
        <div className="SidebarLeft">
            <SidebarLeftOption 
            Icon={Avatar} src={user.photoUrl} Text={user.displayName}
            />
            <SidebarLeftOption 
            img='/Logo/kOxV5aCYUAE.png' Text="Covid-19 Information Center"
            />
            <SidebarLeftOption 
         
            img="/Logo/Friends.png"
            Text="Friends"
            />
            <SidebarLeftOption 
            img="/Logo/Groups.png" Text="Group"
            />
            <SidebarLeftOption 
           img="/Logo/Watch.png" Text="Watch"
            />
            
            <SidebarLeftOption 
            img="/Logo/Events.png"
            Text="Event"
            />
             <SidebarLeftOption 
             img="/Logo/Memories.png"
            Text="Memories"
            />
             <SidebarLeftOption 
            img="/Logo/Tag.png" 
            Text="Saved"
            />
             <SidebarLeftOption 
            img="Logo/Pages.png" Text="Pages"
            />
          
            <SidebarLeftOption 
            Icon={ExpandMoreRoundedIcon} Text="See more"
            />

           <div className="SidebarLeft-Shortcut">
               <h2>Your Shortcuts</h2>
           <SidebarLeftOption 
            Icon={Avatar} 
            src={user.photoUrl}
            Text="HpTv"
            />
           </div>
        </div>
    )
}

export default SIdebarLeft
