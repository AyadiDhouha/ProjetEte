import React,{useState} from 'react'
import { useHistory } from 'react-router'
import M from 'materialize-css'
const AddCourse =()=>{
    const history=useHistory()
    const [title,setTitle]=useState("")
    const[body,setBody]=useState("")
    const[categories,setCategories]=useState("")
    const [photo,setPhoto]=useState("")

    
    
    const postDetails=()=>{
        fetch("/courses",{
            method:"post",
            headers:{
                "Content-Type":"application/json",
                "Authorization":"Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFmOWJjNjRlMzkyZjIwMTA0YmY5MTEiLCJpYXQiOjE2Mjk0NjkyMTZ9.5GFLKQXNiznhlDCbTrj53P_qXLBEoFOnDWzPRmvHwHc"
            },
            body:JSON.stringify({ 
                title,
                body,
                categories,
                photo
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
            placeholder="body"
            value={body}
            onChange={(e)=>setBody(e.target.value)}
            style={{height:"400px",
            width:"800px"}}/>
            <input
            type="text"
            placeholder="categories"
            value={categories}
            onChange={(e)=>setCategories(e.target.value)}/>
                <input
            type="text"
            placeholder="photo"
            value={photo}
            onChange={(e)=>setPhoto(e.target.value)}/>
            

             <button className="btn waves-effect waves-light #aed581 light-green lighten-2" onClick={()=>postDetails()}>
                 Submit Post
              </button>

        </div>

    )
}
export default AddCourse