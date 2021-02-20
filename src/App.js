import React, { useEffect } from 'react';
import './App.css';
import {useDispatch, useSelector} from 'react-redux'
import {login, logout, selectUser} from './features/userSlice'
import HomeScreen from  './Components/Screens/HomeScreen/HomeScreen';
import LoginScreen from './Components/Screens/LoginScreen/LoginScreen'
import { Route, Switch} from "react-router-dom"
import { auth } from './firebase';
import StoriesCreate from './Components/Screens/Stories/StoriesCreate/StoriesCreate';
import Stories from './Components/Screens/Stories/Stories';


function App() {
  const user = useSelector(selectUser)
  const dispatch = useDispatch()
  useEffect(() => {
    auth.onAuthStateChanged((userLoggedIn) => {
      if (userLoggedIn) {
       
          dispatch(
            login({
              displayName: userLoggedIn.displayName,
              email: userLoggedIn.email,
              userId: userLoggedIn.uid,
              photoUrl: userLoggedIn.photoURL || ""

           })
        )
      
      } else {
        return dispatch(logout())
      }
      
  })
 
  }, [])
  const firstPage = () => {
    if (user) {
      return <HomeScreen /> 
    }
    return <LoginScreen />  
  }



  return (
    <div className="App">
  
        
          <Switch>
          {/* <Route path='/' exact component={firstPage} /> */}
            <Route path={user ? '/' : 'login'} exact component={firstPage} />
            <Route path='/stories/create'  component={StoriesCreate} />
          </Switch>
          <Switch>
          <Route path='/stories'component={Stories} />
          </Switch>

    </div>
  );
}

export default App;
