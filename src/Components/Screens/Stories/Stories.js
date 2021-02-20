import { Avatar } from '@material-ui/core'
import { Add, ArrowDropDown, Close, Settings, NotificationImportant, Image, ChevronLeft, ChevronRight } from '@material-ui/icons'
import React , {useState, useEffect, useRef} from 'react'
import {useHistory, Link} from 'react-router-dom'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice'

import './Stories.css'
import StoryOption from './StoryOption/StoryOption'

function Stories() {
    const history = useHistory()
    const array = [[0,1,2,34], [3,4,535]]
    // const user = useSelector(selectUser)
    
    return (
  
        <div className="Stories">
       
           
           <div className="Sidebar">
              <div className="Sidebar_header">
                <Close 
                onClick={() => history.goBack()}
                className="Sidebar_header-Close" />
                <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""/>
            </div>
            <div className="Sidebar_myStories">
                <div className="Sidebar_myStories-settings ">
                    <h2>Your Story</h2>
                    <Settings className="settings" />
                </div>
                <div className="Sidebar_myStories-avatar ">
                    <Avatar />
                    <h3>Ogundipe Hassan Pelumi</h3>
                </div>
            </div>
           <div className="main_section-input">
               <h3>Stories</h3>
               
               <StoryOption 
                 onClick={() => history.push('/')}
               />
             
            </div> 
          
        </div>
           
        <div className="main_section">
            <div className="main_section-icons">
                    <Add />
                    <NotificationImportant />
                    <ArrowDropDown />
            </div>
             <div className="main_section-myStories">
                <div className="preview">
                <p>Preview</p>
                <div className="previewBox" style={{
                    backgroundColor: "black"
                }}>
                   
                      <div className="stories_container">
                        <img src="" alt=""/>
                        </div> 
             </div>
            </div>         
        </div>
                
    </div>
    </div>
    )
}

export default Stories
