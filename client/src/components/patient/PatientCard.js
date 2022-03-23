import React, { useEffect } from 'react';
import { Link } from 'react-router-dom';
import { useState } from 'react'
import axios from 'axios';
import identif from '../../images/identif.png'
import './PatientCard.css'
function PatientCard({ id, name,lastName }) {



    return (
        <div className="card_patient"  >
            <img className="patientimg"
                src={identif}
                alt="" />
            <div className="courseInfo">
                <Link to={`/patient/${id}`} className="link">
                
                  <div className="ident">  
                      <span className="PatientName">{name} </span>
                      <span className="patientLastName">{lastName} </span>
                      </div>
                </Link>

            </div>

        </div>

    )
}

export default PatientCard