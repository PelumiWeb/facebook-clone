import { Avatar } from '@material-ui/core'
import React, {useState, useEffect} from 'react'
import { useSelector } from 'react-redux'
import { selectUser } from '../../../features/userSlice'
import { db } from '../../../firebase'
import firebase from 'firebase'
import Reply from '../Reply/Reply'
import './Comments.css'

function Comments({commentId, comment, timestamp, PostId}) {
    const {displayName} = useSelector(selectUser)
    const [showReplyInput, setShowReplyInput] = useState(false)
    const [replyInput, setReplyInput] = useState('')
    const [replies, setReplies] = useState([])
    const reply = () => {
        setShowReplyInput(prevState => !prevState)
    }

    useEffect(() => {
        db.collection('posts').doc(PostId).collection('comments').doc(commentId).collection('replies').orderBy('timestamp', 'asc').onSnapshot(snapshot => setReplies(snapshot.docs.map(doc => ({
            id: doc.id,
            data: doc.data()
        }))))
    }, [])

    const postReply = (e) => {
        e.preventDefault()
        if (replyInput !== '') {
            db.collection('posts').doc(PostId).collection('comments').doc(commentId).collection('replies').add({
                reply: replyInput,
                timestamp: firebase.firestore.FieldValue.serverTimestamp()
            })
    
            setReplyInput('')
        }
       
    }

    return (
        <div className="comments">
            <div className="comments_content">
            <Avatar />
            <div className="Content">
            <h3>{displayName}</h3>
            <p>{comment}</p>
            </div>
            </div>
            <div className="likesReply">
            <p>Like</p>
            <p onClick={reply}>{`Reply ${replies.length}`}</p>
            <p>2hrs</p>
            </div>
           {
           showReplyInput && 
           <>
           {replies.map(({id, data}) => (
               <>
               <Reply 
               key={id}
               replies={data.reply}
               /> 
            </>
           ))}
            <form onSubmit={postReply} className="replyForm">
               <Avatar className="avatar_reply" />
                <input type="text" value={replyInput} onChange={(e) => setReplyInput(e.target.value)}/>
            </form>
            </>
            }
        </div>
    )
}

export default Comments
