import { Avatar } from '@material-ui/core'
import { ArrowDropDown, Clear, Group, } from '@material-ui/icons'
import React, { useRef, useState } from 'react'
import { db, storage } from '../../firebase'
import firebase from 'firebase'
import PersonAddIcon from '@material-ui/icons/PersonAdd';
import InsertEmoticonIcon from '@material-ui/icons/InsertEmoticon';
import RoomIcon from '@material-ui/icons/Room';
import VideocamIcon from '@material-ui/icons/Videocam';
import MoreHorizIcon from '@material-ui/icons/MoreHoriz';
import PhotoLibraryIcon from '@material-ui/icons/PhotoLibrary';

import './PopUp.css'
import { useSelector } from 'react-redux'
import { selectUser } from '../../features/userSlice'

function PopUp({setOpen}) {
    const [input, setInput] =  useState(null)
    const [image, setImage] = useState(null)
    const [file, setFile] = useState(null)
    const [user, setUser] = useState(null)
    const [progress, setProgress] = useState(0)
   const [imageUrl, setImageUrl] = useState('')
    const imageRef = useRef()
    const { displayName} = useSelector(selectUser)
    const surname = displayName.split(' ')


    const handleImage = (e) => {
        const objectFile = e.target.files[0]
     const url = URL.createObjectURL(e.target.files[0]
        )    
        setImage(url)
        setFile(objectFile)

    }

    const uplaodImage = () => {
        const uploadTask = storage.ref('images').child(file.name).put(file)
    
        uploadTask.on('state-changed',  (snapshot) => {
         //Progress function
     setProgress( Math.round( ( snapshot.bytesTransferred / snapshot.totalBytes) * 100))

      
        }, (error) => {
        //error function
         console.log(error)
        }, () => {
            storage.ref('images').child(file.name).getDownloadURL().then(url => {
                setImageUrl(url)
            })
        })
    
        }

    const post =  () => {
        if (image) {
            uplaodImage()         
           }
           console.log(imageUrl)
    
        if (imageUrl || imageUrl === "") {
            db.collection('posts').add({
                message: input,
                image: imageUrl  || "",
                timestamp: firebase.firestore.FieldValue.serverTimestamp() || "",
                })
                setOpen(false)
                
                
        }

      

    }
    return (
        <div className="PopUp">
            <div className="PopUp_Header">
                <h2>Create Post</h2>
                <Clear 
                style={{
                    padding: 5,
                    borderRadius: "50%",
                    backgroundColor: "#80808036"
                }}
                onClick={() => setOpen(false)}
                className="cancel"
                />
            </div>
            <div className="PopUp_content">
                <div className="PopUp_content-Header">
                    <Avatar />
                    <div className="header_name">
                    <h2>Oluwapelumi H. Ogundipe</h2>
                    <div className="friends">
                        <Group />
                        <h2>Friends</h2>
                        <ArrowDropDown />
                    </div>
                    </div>

                </div>
                <div className="popUp_content-content">
                    <textarea className={!image ? "textarea" : "textarea2" }
                    
                    placeholder={`What's on your mind, ${surname[1]}`}
                    value={input}
                    onChange={(e) => setInput(e.target.value)} />
                  { image && <div className="image_container">
                    <img src={image} alt="" />
                    <Clear  onClick={ () => setImage(null)} className="Clear"/>
                    </div>}
                
                </div>
            </div>

            <div className="popUp_footer">
                <div className="popUp_footer-createPost">
                <h2>Add to your Post</h2>
                <input type="file"
                ref={imageRef}
                 onChange={handleImage} style={{
                    display: "none"
                }} />
                <div className="attachments">
                   <PhotoLibraryIcon 
                   onClick={() => imageRef.current.click()}
                   style={{
                      fill: "#10c410ce" 
                   }}
                   
                    />
                   <PersonAddIcon style={{
                      fill: "#1877f2" 
                   }} />
                   <InsertEmoticonIcon
                   style={{
                    fill: "#e2e215" 
                 }} 
                   
                   />
                   <RoomIcon
                    style={{
                        fill: "#e22727d8" 
                     }} 
                       
                   />
                   <VideocamIcon 
                    style={{
                        fill: "#ff0000e7" 
                     }} 
                       
                   />
                   <MoreHorizIcon
                    style={{
                        fill: "#656768" 
                     }} 
                       
                   />
                </div>

                </div>
              
                <button
                onClick={post}
                disabled={!input}>Post</button>
               
            </div>
        </div>
    )
}

export default PopUp
