import { Avatar } from '@material-ui/core'
import { Message, Photo, VideoCallOutlined } from '@material-ui/icons'
import React, { useState, useEffect } from 'react'
import SentimentVerySatisfiedIcon from '@material-ui/icons/SentimentVerySatisfied';
import SidebarOption from '../../SidebarOption/SidebarOption'
import './Post.css'
import {db} from '../../../firebase'
import Posts from './Posts/Posts';
import Modal from '../Modal/Modal'
import PopUp from '../../PopUp/PopUp'
import {useSelector} from 'react-redux'
import Flipmove from 'react-flip-move'
import {selectUser} from '../../../features/userSlice'

function Post() {
    const [open, setOpen] = useState(false)
    const [posts, setPosts] = useState([])
    const { displayName} = useSelector(selectUser)
    const surname = displayName.split(' ')

    useEffect(  () => {
     const unsubscribe =  db.collection('posts').orderBy('timestamp' , 'desc').onSnapshot(snapshot => (setPosts(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        })))))
        return unsubscribe
        }, [])

    return (
        <div className="Post">
            <div className="Post_CreatePost">
        <div className="Post_CreatePost-header">
                <Avatar 
                className="CreatePost-Avatar"
                />
                <input placeholder={`"What's on your mind, ${surname[1]}?"`} type="text" onClick={() => setOpen(true) } />
        </div>
        <div className="Post_CreatePost-footer">
                <SidebarOption 
                Icon={VideoCallOutlined}
                Text="Live Video"
                color="red"
                />
                <SidebarOption
                Icon={Photo}
                Text="Photo/Video"
                color="green"
                />
                <SidebarOption 
                Icon={SentimentVerySatisfiedIcon}
                Text="feeling/Activity"
                color="yellow"
                />
               
        </div>
            </div>
             <Flipmove>
            {posts.map(({id, data}) => (
               
                <Posts 
                key={id}
                PostId={id}
                message={data.message}
                image={data.image}
                />
            ))}
            </Flipmove>

            
            {open  &&  
            <>
           
            <Modal setOpen={setOpen}/>
            <PopUp setOpen={setOpen}/>
          
            </>
            }
           
            
        </div>
    )
}

export default Post
