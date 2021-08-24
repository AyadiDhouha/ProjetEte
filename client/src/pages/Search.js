import {
    Button, 
    Tab,
    Tabs,
    TextField,
    ThemeProvider,
  } from "@material-ui/core";
  //import "./Search.css";
  import SearchIcon from "@material-ui/icons/Search";
import { useState } from "react";

const Search = () => {

   const [search,setSearch] = useState('')
   const [patientDetails,setPatientDetails] = useState([])
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
           setPatientDetails(results.patient)
       })

   }

    return (
        <div>
          
        <div className="search">
          <TextField
            style={{ flex: 1 }}
            className="searchBox"
            label="Search"
            variant="filled"
            onChange={(e) => setSearch(e.target.value)}
          />
          <Button
           onClick={fetchPatients}
            variant="contained"
            style={{ marginLeft: 10 }}
          >
            <SearchIcon fontSize="large" />
          </Button>
        </div>
        <Tabs
          value={"hello"}
          indicatorColor="primary"
          textColor="primary"
         // onChange={(event, newValue) => {
            //setType(newValue);
            
          //}}
          style={{ paddingBottom: 5 }}
          aria-label="disabled tabs example"
        >
          <Tab style={{ width: "50%" }} label="Search Courses" />
          <Tab style={{ width: "50%" }} label="Search Patients" />
        </Tabs>
     
        </div>
    )
}

export default Search
