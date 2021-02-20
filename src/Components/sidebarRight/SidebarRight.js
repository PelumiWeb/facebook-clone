import { Avatar, Button,  } from '@material-ui/core'
import { Search, MoreVertOutlined } from '@material-ui/icons'
import React from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'
import './SidebarRight.css'

function SidebarRight() {
    const user = useSelector(selectUser) 
    return (
        <div className="SidebarRight">
           
                <div className="SidebarRight_Birthdays">
                <h2>Birthdays</h2>
                <p>Adejoke Raimot and 3 others have birthdays today
                </p>
                </div>
                <div className="SidebarRight_Contacts">
                <div className="SidebarRight_Contacts-header">
                    <h2>Contacts</h2>
                    <div className="contacts_icon">
                        <Search className="search" />
                        <MoreVertOutlined  className="verticalIcon"/>
                    </div>
                </div>
                <div className="SidebarRight_Contacts-Contacts">
                        <Avatar />
                        <h2>{user.displayName}</h2>
                    </div>
                    <div className="SidebarRight_Contacts-Contacts">
                        <Avatar />
                        <h2>Ogundipe Hassan Pelumi</h2>
                    </div>
                    <div className="SidebarRight_Contacts-Contacts">
                        <Avatar />
                        <h2>Ogundipe Hassan Pelumi</h2>
                    </div>
                    <div className="SidebarRight_Contacts-Contacts">
                        <Avatar />
                        <h2>Ogundipe Hassan Pelumi</h2>
                    </div>
                    <div className="SidebarRight_Contacts-Contacts">
                        <Avatar />
                        <h2>Ogundipe Hassan Pelumi</h2>
                    </div>
                </div>
            
            
        </div>
    )
}

export default SidebarRight
