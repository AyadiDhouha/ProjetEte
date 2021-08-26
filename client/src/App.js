import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import React,{useEffect,createContext,useReducer,useContext, useState} from 'react'
import {BrowserRouter,Route,Switch,useHistory} from 'react-router-dom'
import Nav from './components/Nav'
import Home from './pages/home/home'
import Nav2 from './components/Nav2/Nav2'
import Navbar from './components/Navbar/Navbar'
import Acceuil from './pages/Acceuil/Acceuil'
import Courses from './pages/Courses/Courses'
import Profile from './pages/Profile/Profile'
import AddPatient from './pages/AddPatient/AddPatient';
import Signin from './pages/Signin/Signin';
import Signup from './pages/Signup/Signup';
import AddCourse from './pages/AddCourse/AddCourse';
import FicheMalade from './pages/FicheMalade/FicheMalade'
import Search from './components/search/search'
import {reducer,initialState} from './reducers/userReducer'
const loader = document.querySelector(".loader");
const showLoader = () => loader.classList.remove("loader");
const addClass = () => loader.classList.add("loader-hide");
 export const UserContext=createContext()
 

//const Routing=()=>{
  //const history=useHistory()
  //const{state,dispatch}=useContext(UserContext)
 // useEffect(()=>{
    //const user=JSON.parse(localStorage.getItem("user"))
    //console.log(typeof(user),user)
   // if (user){
    //  dispatch({type:"USER",payload:user})
    //  history.push('/')
  //  }
   // history.push('/signin')

 // },[])
 // return (
    //<Switch>
    //<Route exact path='/'>
    //<Nav/>
   // </Route>
    //<Route path='/courses'>
     // <Courses/>
   // </Route>
   // <Route path='/profile'>
      ///<Profile/>
   // </Route>
   // <Route path='/addPatient'>
    //  <AddPatient/>
   /// </Route>
    ///<Route path='/signin'>
   //  <Signin/>
   // </Route>
    //<Route path='/signup'>
     // <Signup/>
   // </Route>
   // <Route path='/addCourse'>
    //  <AddCourse/>
   // </Route>
    //<Route path='/search'>
     // <Search/>
   // </Route>
   // </Switch>

 // )
//}

function App() {
  useEffect(() => {
    showLoader()
    addClass();
  }, []);
  //const[state,dispatch]=useReducer(reducer,initialState)
  
  return (
    //<UserContext.Provider value={{state,dispatch}}>
    <BrowserRouter>
    <Route  exact path='/'>
    <Home/>
    </Route>
     <Route  path='/home'>
    <Nav2/>
    </Route> 
    <Route path='/courses'>
      <Courses/>
    </Route>
    <Route path='/profile'>
      <Profile/>
    </Route>
    <Route path='/addPatients'>
      <FicheMalade/>
    </Route>
    <Route path='/signin'>
      <Signin/>
    </Route>
    <Route path='/signup'>
      <Signup/>
    </Route>
    <Route path='/addCourse'>
      <AddCourse/>
    </Route>
    <Route path='/search'>
      <Search/>
    </Route>
   
    </BrowserRouter>
   // </UserContext.Provider>
  );
}

export default App;
