import React, { useEffect, useState } from 'react'
import { Chip } from "@material-ui/core";
import moi from '../../components/images/moi.jpg'
import SingleContent from '../../components/SingleContent/SingleContent'
 const Courses = () => {
    const [title,setTitle]=useState([])
    const [genres, setGenres] = useState([])
  const [selectedGenres, setSelectedGenres] = useState([]);
    useEffect(()=>{
        fetch('allCourses',{
            headers:{
                "Authorization":"Bearer "+localStorage.getItem("jwt")
            }
        }).then(res=>res.json())
        .then (result=>{
            console.log(result)
           setTitle(result.courses)
           setGenres(result.courses)
            
        })

      
    },[])
    const handleAdd = (item) => {
        setSelectedGenres([...selectedGenres, item]);
        setGenres(genres.filter((g) => g.genre !== item.genre));
      
      };
    
      const handleRemove = (item) => {
        setSelectedGenres(
          selectedGenres.filter((selected) => selected.genre !== item.genre)
        );
        setGenres([...genres, item]);
      
      };
    

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
            <h4>All Courses</h4>
            
        </div>
        </div>
        <div style={{ padding: "6px 0" }}>
      {selectedGenres.map((item) => (
        <Chip
          style={{ margin: 2 }}
          label={item.genre}
          key={item.id}
          color="primary"
          clickable
          size="small"
          onDelete={() => handleRemove(item)}
        />
      ))}
      {genres.map((item) => (
        <Chip
          style={{ margin: 2 }}
          label={item.genre}
          key={item.id}
          clickable
          size="small"
          onClick={() => handleAdd(item)}
        />
      ))}
    </div>
     
        <div className="Profile">
           { title.map((item)=>(
        
                <SingleContent 
                key={item._id}
                name ={item.title}/>
                  
                
                 ))
           }
       </div>

        
        </div>
    
      
    )
}
export default Courses