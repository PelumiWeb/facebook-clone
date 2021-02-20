import { Avatar } from '@material-ui/core'
import { Comment, ThumbUp } from '@material-ui/icons'
import React, {useState, useEffect, useRef, forwardRef} from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../../features/userSlice'
import { db } from '../../../../firebase'
import SidebarOption from '../../../SidebarOption/SidebarOption'
import Comments from '../../Comments/Comments'
import firebase from 'firebase'
import './Posts.css'

const Posts = forwardRef(({PostId, message, image}, ref) => {
    const [showComments, setShowComments] = useState(false)
    const [unlike, setUnlike] = useState(false)
    const [likeArray, setLikesArray] = useState([])
    const [likes, setLikes] = useState(0)
    const [comments, setComments] = useState([])
    const {displayName} = useSelector(selectUser)
  
    const commentRef = useRef()
   
    const user = useSelector(selectUser)
    const Likes = () => {
        db.collection('posts').doc(PostId).collection('likes').add({
           userId: user.userId,

        })
        setUnlike((prevState) => !prevState)
    }
    const unLike = () => {
 
        const id = likeArray[0]
        db.collection('posts').doc(PostId).collection('likes').doc(id?.id).delete()
        setUnlike((prevState) => !prevState)

    }

    useEffect(async() => {
      
             await db.collection('posts').doc(PostId).collection('likes').onSnapshot((snapshot) =>  {
                 console.log(snapshot.docs?.length)
                 setLikes(snapshot.docs?.length)
             })

             await db.collection('posts').doc(PostId).collection('likes').onSnapshot((snapshot) =>  {
                
                setLikesArray(snapshot.docs?.map(doc => ({
                    id : doc.id,
                    data: doc.data()
                })))
            })

            await db.collection('posts').doc(PostId).collection('comments').orderBy('timestamp', 'asc').onSnapshot((snapshot) =>  {
                setComments(snapshot.docs?.map(doc => ({
                    id : doc.id,
                    data: doc.data()
                })))
            })
      
    }, [])

  const postComment = (e) => {
      e.preventDefault()
      let commentInput = commentRef.current.value
      db.collection('posts').doc(PostId).collection('comments').add({
          comment : commentInput,
          timestamp: firebase.firestore.FieldValue.serverTimestamp()
      })

      commentRef.current.value = ""
  }
 
    
    return (
        <div 
        ref={ref}
        className="Posts">
            <div className="Posts_Header">
                <Avatar src={user.photoUrl}/>
                <h2>{user.displayName}</h2>
            </div>
            <div className="Posts_Content">
                <p>{message}</p>
                <div className="
                ">
                    {image &&   <img src={image} alt=""/> }
              
                </div>
             
            </div>
            <div className="Posts_InputOptions">
               { unlike ? 
               <SidebarOption
               onClick={() => unLike()}
                   Icon={ThumbUp}  
                   Text={`Like ${likes}`}
                   color="green"
               />
               
               : <SidebarOption
                onClick={() => Likes()}
                    Icon={ThumbUp}  
                    Text={`Like ${likes}`}
                />}
                 <SidebarOption
                    onClick={() => {
                        commentRef.current.focus()
                    }
                    }
                    Icon={Comment}  
                    Text={`Comments ${comments.length}`}
                />
            </div>

            <div className="Posts_Comments">
                <h2 
                style={{
                    cursor: 'pointer'
                }}
                onClick={() => setShowComments((prevState) => !prevState)
                }>View Comments</h2>

                
                { comments.map(({id, data: {comment, timestamp}}) => 
                    showComments &&  <Comments
                        key={id}
                        commentId={id}
                        comment={comment}
                        timestamp={timestamp}
                        PostId={PostId}
                    />
                    )}
              
                <div className="comment_box">
                    <Avatar src={user.photoUrl} />
                    <form onSubmit={postComment}>
                    <input
                    ref={commentRef}
                    placeholder="Enter your comment" 
                    type="text"
                    />
                    </form>
                  
                </div>
            </div>
        </div>
    )
})

export default Posts
