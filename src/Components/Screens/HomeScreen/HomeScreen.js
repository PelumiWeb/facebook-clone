import React, {useEffect} from 'react'
import './HomeScreen.css'
import Header from '../../Header/Header'
import Feeds from '../../Feeds/Feeds'
import SidebarLeft from '../../SidebarLeft/SIdebarLeft'
import SidebarRight from '../../sidebarRight/SidebarRight'
import {useSelector, useDispatch} from 'react-redux'
import {logout, selectUser,} from '../../../features/userSlice'
import {useHistory } from 'react-router-dom'


function HomeScreen() { 
    const dispatch = useDispatch()
    // useEffect(() => {
    //     dispatch(logout())
    // }, [])

    return (
        <div className="HomeScreen">
            <Header />
            <div className="HomeScreen_body">
                <SidebarLeft  className="SidebarLeft"/>
                <Feeds className="Feeds" />
                <SidebarRight  className="SidebarRight"/>
            </div>
         
            
        </div>
    )
}

export default HomeScreen
