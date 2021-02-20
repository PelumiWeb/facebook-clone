import { Avatar } from '@material-ui/core'
import { Add, ArrowDropDown, Close, Settings, NotificationImportant, Image } from '@material-ui/icons'
import React , {useState, useEffect, useRef} from 'react'
import {useHistory} from 'react-router-dom'
import BackgroundColorOption from '../StoriesCreate/BackgroundColorsOption/BackgroundColorOption'
import './StoriesCreate.css'

function StoriesCreate() {
    const history = useHistory()
    const inputRef = useRef()
    const [text, setText] = useState('start typing')
    const [showInputFields, setShowInputFields] = useState(false)
    const [image, setImage] = useState('')
    const [backgroundColors, setBackgroundColors] = useState(["#7aaa329f","#883030da","#701870bb","royalblue","aliceblue","burlywood","#d2691e","#3a281c","blueviolet","aquamarine","cyan","greenyellow","#999918","#0ea10e83",])
    const [textBackgroundColor, setTextBackgroundColor] = useState('#7aaa329f')
    const createTextStory = () => {
        setShowInputFields(true)
    }
    const handleText = (e) => {
        // setText(e.target.placeholder)
        setText(e.target.value)
    }
const handleImage = (e) => {
    // setImage(e.target.files[0])
    const images = URL.createObjectURL(e.target.files[0])
    setImage(images)
        setShowInputFields(true)
    
}

    return (
        <div className="StoriesCreate">
           
            {/* CreateSidebar */}
            <div className="createSidebar">
                <div className="createSidebar_header">
                    
                    <Close 
                    onClick={() => history.goBack()}
                    className="createSidebar_header-Close" />
                    <img src="https://facebookbrand.com/wp-content/uploads/2019/04/f_logo_RGB-Hex-Blue_512.png?w=512&h=512" alt=""/>
                </div>
                <div className="createSidebar_myStories">
                    <div className="createSidebar_myStories-settings ">
                        <h2>Your Story</h2>
                        <Settings className="settings" />
                    </div>
                    <div className="createSidebar_myStories-avatar ">
                        <Avatar />
                        <h3>Ogundipe Hassan Pelumi</h3>
                    </div>
                </div>
                {showInputFields &&  <div className="main_section-input">

                            <textarea name="textarea" className="textarea"  placeholder="Start typing" value={text} onChange={handleText}/>
                            <select name="" id="" className="selectFont" >
                                <option value="">Aa Hello</option>
                            </select>
                            <div className="background_images">

                                {backgroundColors.map((backgroundColor, index) => (
                                <BackgroundColorOption 
                                key={index}
                                backgroundColor={backgroundColor}
                                onClick={() => setTextBackgroundColor(backgroundColor)}
                                />
                                    
                                ))}

                                    
                             </div>
                             <div className="stories_buttons">
                                 <button onClick={() => history.goBack()}>Discard</button>
                                 <button>Share to Story</button>

                             </div>

                         </div> 

                }
              
            </div>
               
            <div className="main_section">
                <div className="main_section-icons">
                    <Add />
                    <NotificationImportant />
                    <ArrowDropDown />
                </div>
                {!showInputFields ?  <div className="main_section-myStories">
                    <input type="file" style={{display: "none"}} ref={inputRef}
                    onChange={handleImage}
                    
                    />
                    <div className="main_section-myStories-card photo_card"
                    onClick={() => {
                        inputRef.current.click()   
                    }}
                    >
                        <Image />
                        <p>create a photo story</p>
                    </div>
                    <div className="main_section-myStories-card text_card"
                    onClick={createTextStory}
                    >
                        <h3>Aa</h3>
                        <p>create a text story</p>
                    </div>
                    
                </div> :
                <div className="preview">
                    <p>Preview</p>
                    <div className="previewBox">
                      { !image ?  <div className="preview_content" 
                        style={{
                            backgroundColor: textBackgroundColor
                        }}>
                            <p>{text.toUpperCase()}</p>
                        </div>  
                        :
                        <div className="image_content">
                            <img src={image} alt="images"/>
                        </div>
                        }


                    </div>
                </div>
                
                }
             
              

            </div>
            {/* mainSection */}
        </div>
    )
}

export default StoriesCreate
