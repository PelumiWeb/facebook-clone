import { Button } from '@material-ui/core'
import React, {useState}  from 'react'
import { useDispatch } from 'react-redux'
import { login } from '../../../features/userSlice'
import { auth, provider } from '../../../firebase'
import Register from '../Register/Register'
import {useHistory} from 'react-router-dom'
import './LoginScreen.css'

function LoginScreen() {
    const [registerModal, setRegisterModal] = useState(false)
    const [email, setEmail] = useState()
    const [password, setPassword] = useState()

    const history = useHistory()
    const dispatch = useDispatch()
    const registerWithGoogle = async () => {
        try {
            const {user} =  await auth.signInWithPopup(provider)
            console.log(user)
            dispatch(login({
                displayName: user.displayName,
                email: user.email,
                userId: user.uid,
                photoUrl: user.photoURL || ""
            }))


        } catch (e) {
            alert(e)
        }
     

      

    }
        const Login = async () => {
            try {
                const {user} = await auth.signInWithEmailAndPassword(email, password)
                dispatch(login({
                  displayName: user.displayName,
                  email: user.email,
                  userId: user.uid
              }))
      
              history.push('/')
             

            } catch (e) {
                alert(e)
            }
        }
   

    return (
        <div className="Login">
            <div className="login_wrap">
            <div className="Login_left">
                <h1>facebook</h1>
                <p>Facebook helps you connect and share with the people in your life</p>
            </div>
            <div className="Login_right">
                <div className="login_input">
                   
                     <input type="email" 
                     autoComplete
                     placeholder="Email and phone number" onChange={(e) => setEmail(e.target.value)} />
                     <input type="password" placeholder="Password"
                     onChange={(e) => setPassword(e.target.value)}
                     />

                        <button onClick={Login}>Log in</button>
                         <p>Forgotten Password?</p>
                 </div>
            <button onClick={() => setRegisterModal(true)}>Create New Account</button> 
            <div className="btn">
            <Button
            onClick={registerWithGoogle}            
              className="google_btn" variant="contained" color="primary">
                SignUp with Google
            </Button>  
            </div>
                
            </div>
            

            </div>
        {registerModal &&  
         <Register 
         registerModal={registerModal}
         setRegisterModal={setRegisterModal}/>
        }
          
           
        </div>
    )
}

export default LoginScreen
