import React,{useEffect, useState,useContext} from 'react'
import {UserContext} from '../../App'
import moi from '../../components/images/moi.jpg'
import SingleContent from '../../components/SingleContent/SingleContent'
 const Profile = () => {
     const [name,setName]=useState([])
     //const {state,dispatch} = useContext(UserContext)
    useEffect(()=>{
        fetch('/myPatient',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then (result=>{
            console.log(result)
           setName(result.mypatient)
            
        })
      
    },[])
    return (
        <div style={{maxWidth:"550px",margin:"0px auto"}}>
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px", borderBottom:"1px solid grey"
        }} >
        <div >
            <img src={moi} style={{width:"160px",height:"160px",borderRadius:"80px"}}/>
        </div>
        <div>
           <h4> UserName</h4>
            <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                <h6> 40 posts </h6>
                <h6> 40 followers</h6>
                <h6> 40 following</h6>
            </div>
        </div>
        </div>
       <div className="Profile">
           { name.map((item)=>(
        
                <SingleContent 
                key={item.id}
                name ={item.name}/>
                  
                
                 ))
           }
       </div>
        

        
        </div>
    
      
    )
}
export default Profile



