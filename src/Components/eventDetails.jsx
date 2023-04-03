import React, { Component, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
const API_KEY = import.meta.env.CLIENT_ID;



const eventDetails = () => {
    let params = useParams();
    const [fullDetails, setFullDetails] = useState([]);
    const [eventVenue, setVenue] = useState([])
    const [eventPerformers, setPerformers] = useState([])
    const [eventStats, setStats] = useState([])

    console.log(fullDetails)
    //console.log(eventVenue)

    useEffect(() => {
        const getEventDetail = async () => {
            const details = await fetch(`https://api.seatgeek.com/2/events?id=${params.id}&client_id=MzI2OTE3ODd8MTY4MDAzNDAxMC4yNzMxODcy`);
            const detailsJson = await details.json()
            setFullDetails(detailsJson.events[0])
            setVenue(detailsJson.events[0].venue)
            setPerformers(detailsJson.events[0].performers[0])
            setStats(detailsJson.events[0].stats)
        }

        getEventDetail().catch(console.error);
    }, [])

    return (
     <div>
        <h1>{fullDetails.title}</h1>
        <img src={eventPerformers.image} alt="" />
        <div> </div>
        <br></br>
        <table>
            <tbody>
                <tr>
                <th>Title </th>
                <td>{fullDetails.title}</td>
                </tr> 
                <tr>
                <th>Announce Date </th>
                <td>{fullDetails.announce_date} </td>
                </tr>
                <tr>
                <th>Type </th>
                <td>{fullDetails.type}</td>
                </tr>
                <tr>
                <th>Status </th>
                <td>{fullDetails.status}</td>
                </tr>
                <tr>
                <th>Performer Name</th>
                <td>{eventPerformers.name}</td>
                </tr>
                <tr>
                <th>Address </th>
                <td>{eventVenue.address} {eventVenue.extended_address}</td>
                </tr>
                <tr>
                <th>Venue Capacity </th>
                <td>{eventVenue.capacity}</td>
                </tr>
                <tr>
                <th>Buy Tickets</th>
                <td>{eventVenue.url}</td>
                </tr>
                <tr>
                <th>Ticket Price Start From : </th>
                <td>${eventStats.lowest_price} </td>
                </tr>
                
            </tbody>
        </table>

     </div>
    );
  };
  
  export default eventDetails;