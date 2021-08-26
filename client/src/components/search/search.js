import React, { useEffect, useRef, useState } from 'react';
import { makeStyles } from '@material-ui/core/styles';

import Grid from '@material-ui/core/Grid';
import Autocomplete from '@material-ui/lab/Autocomplete';

import TextField from '@material-ui/core/TextField';

import SearchIcon from '@material-ui/icons/Search';



;

const useStyles = makeStyles((theme) => ({
    root: {
      width: '50%',
      maxWidth: 50,
      backgroundColor: theme.palette.background.paper,
    },
  }));



export default function CustomizedInputBase() {
  const classes = useStyles();
  const  searchModal = useRef(null)
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
    console.log(results)
      setPatientDetails(results.patient)
  })
}

  return (
//       <div>
//     <div className={classes.margin}>
//     <Grid container spacing={1} alignItems="flex-end">
//       <Grid item>
//         <SearchIcon />
//       </Grid>
//       <Grid item>
//         <TextField id="input-with-icon-grid" label="With a grid" value={search}
//             onChange={(e)=>fetchPatients(e.target.value)} />
//       </Grid>
//     </Grid>
//    </div>
//    <List component="nav" className={classes.root} aria-label="contacts">
//        {patientDetails.map(item=>{
//            return (
//             <ListItem button>
//             <ListItemText  inset  primary={item.name} />
//           </ListItem>
//            )
//        })}
      
//     </List>
//    </div>

<Autocomplete
        id="free-solo-demo"
        freeSolo
        options={patientDetails.map((option) => option.name)}
        renderInput={(params) => (
           
            <TextField {...params} label="search Patients" margin="normal" variant="outlined" onChange={(e)=>fetchPatients(e.target.value)} />
            
          
        )}
      />

  );
}

