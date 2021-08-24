import React, { useEffect, useRef, useState,useContext } from 'react'
import {Link,useHistory} from 'react-router-dom'
import {UserContext} from '../App'
import M from 'materialize-css'
const Nav =()=>{
  let history=useHistory()
  const  searchModal = useRef(null)
  const [search,setSearch] = useState('')
  const [patientDetails,setPatientDetails] = useState([])
 // const {state,dispatch} = useContext(UserContext)
  //const renderList=()=>{
   // if (state){
     // return[
       // <li key="1"><Link to="/courses">Courses</Link></li>,
       // <li key="2"><Link to="/profile">Profile</Link></li>,
        //<li key="3"><i data-target="modal1" className="material-icons modal-trigger"style={{color:'black'}} >search</i></li>
       
     // ]

  //  }else{
     // return [
     ///  <li key="4"><Link to="/signin">SignIn</Link></li>,
      //  <li key="5"><Link to="/signup">SignUp</Link></li>
    //  ]

  //  }
 // }
    
    useEffect(()=>{
      M.Modal.init(searchModal.current)
      
  },[])
  const fetchPatients=(query)=>{
    setSearch(query)
    fetch('/search-patients',{
        method:"post",
        headers:{
            "Content-Type":"application/json"
        },
        body:JSON.stringify({
            query
        })
    }).then(res=>res.json())
    .then(results=>{
      console.log(results)
        setPatientDetails(results.patient)
    })

}

    return(
        <nav>
        <div className="nav-wrapper white">
          <a href="#" className="brand-logb left">Covid</a>
          <ul id="nav-mobile" className="right ">
          <li key="1"><Link to="/courses">Courses</Link></li>,
        <li key="2"><Link to="/profile">Profile</Link></li>,
        <li key="3"><i data-target="modal1" className="material-icons modal-trigger"style={{color:'black'}} >search</i></li>
        
           
           
         
          </ul>
        </div>
        <div>
        <button className="waves-effect waves-light btn " onClick={()=>{history.push('/addpatient')}}>Ajout malade</button>
        <button className="waves-effect waves-light btn " >Chercher un cours </button>

        </div>
        
        <div id="modal1" class="modal" ref={searchModal} style={{color:"black"}}>
          <div className="modal-content">
          <input
            type="text"
            placeholder="search Patients"
            value={search}
            onChange={(e)=>fetchPatients(e.target.value)}
            />
            <ul className="collection">
               {patientDetails.map(item=>{
                 return <li className="collection-item">{item.name}</li>
                  
               })}
               
              </ul>
          </div>
          <div className="modal-footer">
            <button className="modal-close waves-effect waves-green btn-flat" onClick={()=>setSearch('')}>close</button>
          </div>
        </div>

        
      </nav>
      
    )
}
export default Nav