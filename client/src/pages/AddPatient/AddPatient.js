// import React,{useState} from 'react'
// import { useHistory } from 'react-router'
// import M from 'materialize-css'
// const AddPatient =()=>{
//     const history=useHistory()
//     const [name,setName]=useState("")
//     const[phone,setPhone]=useState("")
//     const[status,setStatus]=useState("")
//     const[age,setAge]=useState("")
//     const[doctor,setDoctor]=useState("")
    
//     const postDetails=()=>{
//         fetch("/addPatient",{
//             method:"post",
//             headers:{
//                 "Content-Type":"application/json",
//                 "Authorization":"Bearer "+localStorage.getItem("jwt")
//             },
//             body:JSON.stringify({ 
//                 name,
//                 phone,
//                 status,
//                 doctor,
//                 age
//             })
//         }).then(res=>res.json())
//         .then(data=>{
//             if(data.error){
//                 M.toast({html: data.error,classes:"#c62828 red darken-3"})
//             }
//             else{
//                 M.toast({html:"created post success",classes:"#00c853 green accent-4"})
//                 history.push('/')
//             }
//             console.log(data)
//         }).catch(err=>{
//             console.log(err)
//         })
    
       

//     }
    
//     return(
//         <div className="card input-filed"
//         style={{margin:"10px auto",
//                 maxWidth:"500px",
//                 padding:"20px",
//                 textAlign:"center"}}>
//             <input
//             type="text"
//             placeholder="Name"
//             value={name}
//             onChange={(e)=>setName(e.target.value)}
//             />
//             <input
//             type="text"
//             placeholder="Phone"
//             value={phone}
//             onChange={(e)=>setPhone(e.target.value)}/>
//             <input
//             type="text"
//             placeholder="Doctor"
//             value={doctor}
//             onChange={(e)=>setDoctor(e.target.value)}/>
//             <input
//             type="text"
//             placeholder="status"
//             value={status}
//             onChange={(e)=>setStatus(e.target.value)}/>
//             <input
//             type="text"
//             placeholder="age"
//             value={age}
//             onChange={(e)=>setAge(e.target.value)}/>

            
//              <button className="btn waves-effect waves-light #aed581 light-green lighten-2" onClick={()=>postDetails()}>
//                  Submit Post
//               </button>

//         </div>

//     )
// }
// export default AddPatient