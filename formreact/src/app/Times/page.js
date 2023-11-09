import React from 'react'
import {useState, useEffect} from 'react';
import Calendar from 'react-calendar';

const time = ['08:00','09:00','10:00','14:00','15:00']

  function Times(props) {
  
   const [event, setEvent] = useState(null)
   const [info, setInfo] = useState(false)
  
   function displayInfo(e) {
     setInfo(true);
     setEvent(e.target.innerText);
  }
  
  return (
   
   <div className="m-auto">
     {time.map(times => {
      return (
      <div>
        <button className="bg-[#454545] p-2 mb-2 w-1/2 rounded-sm" onClick={(e)=> displayInfo(e)}> {times} </button>
      </div>
          )
       })}
      <div>
        {info ? `Your appointment is set to ${event} ${props.date.toDateString()}` : null}
      </div>
   </div>
    )
  }
  
  export default Times;