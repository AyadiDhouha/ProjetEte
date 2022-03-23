import React, { useEffect, useState } from 'react'

import axios from "axios"
import './BienvenuePage.css'
import Navbar from '../../components/nav2/Navbar'
import List from '../../components/list/List'

function BienvenuePage({ categories }) {
    const [lists, setLists] = useState([])


    useEffect(() => {
        const getrandomLists = async () => {
            const res = await axios.get(`lists${categories ? "?categories=" + categories : ""}`,
                {
                    headers: {
                        token:
                            "Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJfaWQiOiI2MTFmOWJjNjRlMzkyZjIwMTA0YmY5MTEiLCJpYXQiOjE2Mjk0NjkyMTZ9.5GFLKQXNiznhlDCbTrj53P_qXLBEoFOnDWzPRmvHwHc"
                    },
                }
            );
            //console.log(res)
            setLists(res.data);
        };
        getrandomLists();
    }, []);
    return (
        <div>
            <div id='mm'>
                <Navbar />

                <div className='back'>
                    <h1><span>Bienvenue</span>, Doctor</h1>
                    <div className="button">
                        <a href='/fiche' className="ajout">Ajouter patient</a>
                    </div>


                </div>
               
            </div>
            {lists.map((list) => (
                    <List list={list} />
                ))}
        </div>
    )
}

export default BienvenuePage