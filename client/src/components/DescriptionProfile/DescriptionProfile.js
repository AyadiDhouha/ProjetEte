import React from 'react'
import moi from '../../components/images/moi.jpg'
const DescriptionProfile = ({
    name,
    lastName,
    speciality,
    phone
}) => {
    return (
        <div style={{
            display:"flex",
            justifyContent:"space-around",
            margin:"18px 0px", borderBottom:"1px solid grey"
        }} >
        <div >
            <img src={moi} style={{width:"160px",height:"160px",borderRadius:"80px"}}/>
        </div>
        <div>
           <h4> {name}{lastName}</h4>
            <div style={{display:"flex",justifyContent:"space-between",width:"108%"}}>
                <h6> {speciality} </h6>
                <h6> {phone}</h6>
                
            </div>
        </div>
        </div>
    )
}

export default DescriptionProfile
