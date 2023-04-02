import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.CLIENT_ID;





const eventDetails = () => {
    let params = useParams();
    const [fullDetails, setFullDetails] = useState(null);
    console.log(fullDetails)
    useEffect(() => {
        const getEventDetail = async () => {
            const details = await fetch(`https://api.seatgeek.com/2/events?id=${params.id}&client_id=MzI2OTE3ODd8MTY4MDAzNDAxMC4yNzMxODcy`)
            const detailsJson = await details.json()
            setFullDetails(detailsJson)
        }
    })

    return (
     <div></div>
    );
  };
  
  export default eventDetails;