import { Clear } from '@material-ui/icons'
import React from 'react'
import { auth } from '../../../firebase'
import Modal from '../../Feeds/Modal/Modal'
import {useForm} from 'react-hook-form'
import './Register.css'
import {login, selectUser} from '../../../features/userSlice'
import {useSelector, useDispatch} from 'react-redux'
import { useHistory } from 'react-router-dom'

function Register({setRegisterModal, registerModal}) {
    const dispatch = useDispatch()
    const userNow = useSelector(selectUser)
    console.log(userNow)
    const { register, handleSubmit, errors } = useForm()
    const history = useHistory()
 
const onSubmit = async ({email, password, firstname, lastname}) => {
    try {
        const {user} = await auth.createUserWithEmailAndPassword(email, password)
        await user.updateProfile({
            displayName: firstname + " " + lastname
        })

        dispatch(login({
           displayName: user.displayName,
           email: user.email,
           userId: user.uid 
        }))
        
   
       

    } catch (e) {
        alert(e)
    }
  

}

    return (
        <>
         <Modal
         registerModal={registerModal}
         setRegisterModal={setRegisterModal} />
         <div className="Register">
            <div className="Register_header">
                <div className="Register_up">
                <h1>Sign Up</h1>
             <p>it's quick and easy.</p>
                </div>
            
             <div className="icon">
             <Clear style={{
                 cursor: "pointer"
             }} onClick={() => setRegisterModal(false)} />

             </div>
            </div>
            <form onSubmit={handleSubmit(onSubmit)} className="Register_body">
                <div className="fullname">
                <input name="firstname" ref={register({required: true})} type="text" placeholder="First name"
                />
                <input type="text" 
                name="lastname"
                 ref={register({required: true})} placeholder="lastname"/>
                </div>
                <div className="emailPassword">
                <input 
                 ref={register({required: true})} 
                 name="email"
                type="email" placeholder="Mobile number or email address"/>
                <input
                name="password"
                
                 ref={register({required: true})} 
                type="password" placeholder="New password"/>
                </div>
                
                
          
            <div className="dateOfBirth">
                <select name="days" className="days">
                    <option value="number">1</option>
                    <option value="number">2</option>
                    <option value="number">3</option>
                    <option value="number">4</option>
                    <option value="number">5</option>
                    <option value="number">6</option>
                    <option value="number">7</option>
                    <option value="number">8</option>
                    <option value="number">9</option>
                    <option value="number">10</option>
                    <option value="number">11</option>
                    <option value="number">12</option>
                    <option value="number">13</option>
                    <option value="number">14</option>
                    <option value="number">15</option>
                    <option value="number">16</option>
                    <option value="number">17</option>
                    <option value="number">18</option>
                    <option value="number">19</option>
                    <option value="number">20</option>
                    <option value="number">21</option>
                    <option value="number">22</option>
                    <option value="number">23</option>
                    <option value="number">24</option>
                    <option value="number">25</option>
                    <option value="number">26</option>
                    <option value="number">27</option>
                    <option value="number">28</option>
                    <option value="number">29</option>
                    <option value="number">30</option>

                </select>
                <select name="days" className="days">
                    <option value="1">Jan</option>
                    <option value="2">Feb</option>
                    <option value="3">March</option>
                    <option value="4">April</option>
                    <option value="5">May</option>
                    <option value="6">June</option>
                    <option value="7">July</option>
                    <option value="8">August</option>
                    <option value="9">September</option>
                    <option value="10">October</option>
                    <option value="11">November</option>
                    <option value="12">December</option>
                </select>
                <select name="years" className="years">
                    <option value="1">2021</option>
                    <option value="2">2020</option>
                    <option value="3">2019</option>
                    <option value="4">2018</option>
                    <option value="5">2017</option>
                    <option value="6">2016</option>
                    <option value="7">2015</option>
                    <option value="8">2014</option>
                    <option value="9">2013</option>
                    <option value="10">2012</option>
                    <option value="11">2011</option>
                    <option value="12">2010</option>
                </select>
                
             

            </div>
            <div className="gender">
                <div>
                <input type="radio" id="male" name="sex" selected/>
                <label for="male">Male</label>
  
                </div>
                <div>
                <input type="radio" id="female" name="sex" />
                <label for="female">Female</label>
  
                </div>
                <div>
                <input type="radio" id="custom" name="sex" />
                <label for="custom">custom</label>
  
                </div>
                
                </div>
                <div className="button">
                  
            <button onSubmit={handleSubmit(onSubmit)} type="submit">Sign Up</button>
           

                </div>
            </form>
                <p>By clicking Sign Up, you agree to our Terms, Data Policy and Cookie Policy. You may receive SMS notifications from us and can opt out at any time.</p>
             
         
           </div>
        </>
       
    )
}

export default Register
