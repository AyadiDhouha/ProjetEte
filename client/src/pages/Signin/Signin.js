import React,{useState,useContext} from 'react'
import{Link,useHistory} from 'react-router-dom'
import './Signin.css'
import {UserContext} from '../../App'
import M from 'materialize-css'
const Signin =()=>{
    //const{state,dispatch}=useContext(UserContext)
    const history=useHistory()
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const PostData =()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           return  M.toast({html:"invalid email",classes:"#c62828 red darken-3"})
           
        }
        fetch("/signin",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                password,
                email
            })
        }).then(res=>res.json())
        .then(data=>{
            console.log(data)
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                localStorage.setItem("jwt",data.token)
                localStorage.setItem("user",JSON.stringify(data.user))
               // dispatch({type:"USER",payload:data.user})
                M.toast({html:"SignedIn Successfully",classes:"#00c853 green accent-4"})
                history.push('/home')
            }
            
        }).catch(err=>{
            console.log(err)
        })

    }
   

    return(
        <div className="container1">
        <div className="forms-container1">
          <div className="signup">
            <div encType="multipart/form-data">
              <h2 className="title1">Sign in</h2>
              <div className="input-field1">
                <i className="fas fa-envelope"></i>
                <input 
                type="text"
                 placeholder="Email"
                 value={email}
                onChange={(e)=>setEmail(e.target.value)}
                  />
              </div>
              <div className="input-field1">
                <i className="fas fa-lock"></i>
                <input
                 type="password" 
                 placeholder="Mot de Passe"
                 value={password}
              onChange={(e)=>setPassword(e.target.value)}
                  />
              </div>
              
              <input type="submit" className="bt" value="Sign in" onClick={()=>PostData()} />
  
              <h5>
                <Link to="/signup">Dont have an account ?</Link>
              </h5>
              
            </div>
          </div>
        </div>
       
      </div>
       
)
}


export default Signin