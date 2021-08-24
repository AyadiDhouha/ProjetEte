import React,{useState} from 'react'
import { useHistory } from 'react-router'
import M from 'materialize-css'
const AddCourse =()=>{
    const history=useHistory()
    const [title,setTitle]=useState("")
    const[desc,setDesc]=useState("")
    const[genre,setGenre]=useState("")
    
    
    const postDetails=()=>{
        fetch("/addCourse",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            },
            body:JSON.stringify({ 
                title,
                desc,
                genre
            })
        }).then(res=>res.json())
        .then(data=>{
            if(data.error){
                M.toast({html: data.error,classes:"#c62828 red darken-3"})
            }
            else{
                M.toast({html:"created post success",classes:"#00c853 green accent-4"})
                history.push('/')
            }
            console.log(data)
        }).catch(err=>{
            console.log(err)
        })
    
       

    }
    
    return(
        <div className="card input-filed"
        style={{margin:"10px auto",
                maxWidth:"500px",
                padding:"20px",
                textAlign:"center"}}>
            <input
            type="text"
            placeholder="Title"
            value={title}
            onChange={(e)=>setTitle(e.target.value)}
            />
            <input
            type="text"
            placeholder="Desc"
            value={desc}
            onChange={(e)=>setDesc(e.target.value)}/>
            <input
            type="text"
            placeholder="Genre"
            value={genre}
            onChange={(e)=>setGenre(e.target.value)}/>
            

             <button className="btn waves-effect waves-light #aed581 light-green lighten-2" onClick={()=>postDetails()}>
                 Submit Post
              </button>

        </div>

    )
}
export default AddCourse