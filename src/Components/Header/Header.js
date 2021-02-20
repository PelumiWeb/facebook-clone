import React from 'react'
import './Header.css'
import HomeIcon from '@material-ui/icons/Home';
import TvIcon from '@material-ui/icons/Tv';
import GroupAddOutlinedIcon from '@material-ui/icons/GroupAddOutlined';
import SportsEsportsOutlinedIcon from '@material-ui/icons/SportsEsportsOutlined';
import SearchOutlinedIcon from '@material-ui/icons/SearchOutlined';
import AddOutlinedIcon from '@material-ui/icons/AddOutlined';
import MessageRoundedIcon from '@material-ui/icons/MessageRounded';
import ExpandMoreRoundedIcon from '@material-ui/icons/ExpandMoreRounded';
import { Avatar } from '@material-ui/core';
import { NotificationImportant } from '@material-ui/icons';
import { useDispatch, useSelector } from 'react-redux';
import { auth } from '../../firebase';
import { logout , selectUser } from '../../features/userSlice';
import { useHistory } from 'react-router-dom';

function Header() {
    const user = useSelector(selectUser)
    const dispatch = useDispatch()
    const history = useHistory()
    const Logout = () => {
        dispatch(logout())
        auth.signOut()
    }
    return (
        <div className="header">
        <div className="header_left">
            <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""/>
           <div className="header_search">
               <SearchOutlinedIcon className="header_search-Icon" />
               <input type="text" placeholder="Search Facebook"/>
           </div>
        </div>

        <div className="header_middle">
            <HomeIcon className="header_middle-Icon active" />
            <TvIcon 
            className="header_middle-Icon"
            />
            <GroupAddOutlinedIcon 
            className="header_middle-Icon"
            />
            <SportsEsportsOutlinedIcon 
            className="header_middle-Icon"
            />
        </div>

        <div className="header_right">
            <div className="header_right-avatar">
            <Avatar
            src={user?.photoUrl}
            onClick={Logout}
            className="avatar"/>
            <h2>{user?.displayName}</h2>
            </div>
            <AddOutlinedIcon className="header_right-icon"/>
            <MessageRoundedIcon 
            className="header_right-icon"
            />
            <NotificationImportant 
            className="header_right-icon"
            />
            <ExpandMoreRoundedIcon 
            className="header_right-icon"
            />
           

        </div>
          
        </div>
    )
}

export default Header
