import React,{useState}  from 'react'
import{Link,useHistory} from 'react-router-dom'
import './Signup.css'
import M from 'materialize-css'
const Signup =()=>{
    const history=useHistory()
    const[name,setName]=useState("")
    const[password,setPassword]=useState("")
    const[email,setEmail]=useState("")
    const[speciality,setSpeciality]=useState("")
    const[phone,setPhone]=useState("")
    const[lastName,setlastName]=useState("")
    const PostData =()=>{
        if(!/^(([^<>()\[\]\\.,;:\s@"]+(\.[^<>()\[\]\\.,;:\s@"]+)*)|(".+"))@((\[[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}\.[0-9]{1,3}])|(([a-zA-Z\-0-9]+\.)+[a-zA-Z]{2,}))$/.test(email)){
           return  M.toast({html:"invalid email",classes:"#c62828 red darken-3"})
        }
        fetch("/signup",{
            method:"post",
            headers:{
                "Content-Type":"application/json"
            },
            body:JSON.stringify({
                name,
                password ,
                email,
                speciality,
                phone,
                lastName,
            })
        }).then(res=>res.json())
        .then(data=>{
            
            if(data.error){
              M.toast({html: data.error,classes:"#c62828 red darken-3"})
          }
            else{
                M.toast({html:data.message,classes:"#00c853 green accent-4"})
                history.push('/signin')
            }
            console.log(data)
        }).catch(err=>{
            console.log(err)
        })

    }

    return(
        <div className="container1">
      <div className="forms-container1">
        <div className="signup">

          <div encType="multipart/form-data" className="sign-up-form1">
            <h2 className="title1">Sign up</h2>
            <div className="input-field1">
              <i className="fas fa-user"></i>
              <input type="text"
               placeholder="Nom"
               value={name}
                onChange={(e)=>setName(e.target.value)}
                />
            </div>
            <div className="input-field1">
              <i className="fas fa-user"></i>
              <input type="text"
               placeholder="Prenom"
               value={lastName}
                onChange={(e)=>setlastName(e.target.value)}
                />
            </div>
            <div className="input-field1">
              <i className="fas fa-envelope"></i>
              <input type="text" 
              placeholder="email"
              value={email}
            onChange={(e)=>setEmail(e.target.value)}
              />
            </div>
            <div className="input-field1">
            <i className="fas fa-phone-alt"></i>
              <input  type='text'
            placeholder='Telephone'
            value={phone}
            onChange={(e)=>setPhone(e.target.value)} />
            </div>

            <div className="input-field1">
            <i className="fas fa-user-md"></i>
            <input type="text"
               placeholder="Specialité"
               value={speciality}
            onChange={(e)=>setSpeciality(e.target.value)} />
            </div>

            <div className="input-field1">
              <i className="fas fa-lock"></i>
              <input type="text"
               placeholder="Mot de Passe"
               value={password}
            onChange={(e)=>setPassword(e.target.value)} />
            </div>
           
          <input type="submit" className="btn1" value="Sign up"
          onClick={()=>PostData()} />
          <h5>
                <Link to="/signin">Already have an account ?</Link>
            </h5>
          </div>
        </div>
      </div>
     
     
    </div>

       
)
}


export default Signup