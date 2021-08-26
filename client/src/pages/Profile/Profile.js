import React,{useEffect, useState,useContext} from 'react'
import {UserContext} from '../../App'
import moi from '../../components/images/moi.jpg'
import DescriptionProfile from '../../components/DescriptionProfile/DescriptionProfile'
import SingleContent from '../../components/SingleContent/SingleContent'
 const Profile = () => {
     const [patientName,setpatientName]=useState([])
     const [userName,setUserName]=useState([])
    
     //const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/myPatient',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then (result=>{
            console.log(result)
           setpatientName(result.mypatient)
            
        })



        fetch('/user',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then (result=>{
           console.log(result)
           setUserName(result.user[0]) 
        })

      
    },[])
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
        <div>
            
                <DescriptionProfile
                key={userName._id}
                name={userName.name}
                lastName={userName.lastName}
                speciality={userName.speciality}
                phone={userName.phone}
                />

            
        </div>
       <div className="Profile">
           { patientName.map((item)=>(
        
                <SingleContent 
                key={item.id}
                name ={item.lastName}
                status={item.status}/>  
                
                 ))
           }
       </div>
        

        
        </div>
    
      
    )
}
export default Profile



