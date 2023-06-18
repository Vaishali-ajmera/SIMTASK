import React, { useEffect, useState } from 'react';
import './App.css';
import HomeScreen from './screens/HomeScreen';
import LoginScreen from './screens/LoginScreen';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import { auth } from './firebase';
import { useDispatch, useSelector } from 'react-redux';
import { login, logout, selectUser } from './features/userSlice';
import ProfileScreen from './screens/ProfileScreen';
import Loader from './Loader';





function App() {
  const user = useSelector(selectUser);
  const dispatch = useDispatch();
  const [isLoading, setIsLoading] = useState(true); // Add isLoading state



  useEffect(()=>{
   const unsubscribe =  auth.onAuthStateChanged((userAuth) =>{
      if(userAuth){
        // logged In
        // console.log(userAuth);
        dispatch(login({
          uid: userAuth.uid,
          email: userAuth.email
        })
        );
      }else{
        //logged out
        dispatch(logout());
      }
      setIsLoading(false); // Set isLoading to false after data is fetched

    });

    return unsubscribe;
  },[dispatch]);

 
  return (
    <div className="app">
      <Router>
        {isLoading ? (
          <Loader />
        ) : !user ? (
          <LoginScreen />
        ) : (
          <Routes>
            <Route path="/" exact element={<HomeScreen />} />
            <Route path="/profile" element={<ProfileScreen />} />
          </Routes>
        )}
      </Router>
    </div>
  );
  
}

export default App;
