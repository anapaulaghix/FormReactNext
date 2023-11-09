"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState,useEffect } from 'react';
import Calendar from 'react-calendar'; 
import '../Form3/Form3.css'
import Time from '../Time/page'
import Dia from '../Dia/page';

export default function Form3(){
  const [date, setDate] = useState(new Date())
  const [showTime, setShowTime] = useState(false) 

  const handleSubmit = () => {
    const dataToSend = {
      selectedDate: date,
      selectedTime: showTime
    };

    fetch('/api/inserirdados', {
      method: 'POST',
      headers: {
        'Content-Type': 'application/json',
      },
      body: JSON.stringify(dataToSend),
    })
      .then(response => response.json())
      .then(data => {
        console.log("Enviado com sucesso")
      })
      .catch(error => {
        console.error(error);
      });
  };

  
   return(
      <div className='grid grid-cols-2 my-2 py-3 gap-3 items-center max-sm:items-center  max-sm:justify-center'>
         <section className='flex flex-col p-4 max-sm:justify-center'>
          <div className='max-sm:hidden'>
         <Image 
          src="/images/Logo.png"
          alt="teste"
          width={300}
          height={300}
          />
          </div>

            <label className='max-sm:hidden'>Escolha o melhor dia disponível para você</label>
            <div className='lg:hidden sm:block'>
              <Dia/>
            </div>

            <div className='max-sm:hidden'>
            <Calendar onChange={setDate} value={date} onClickDay={() => setShowTime(true)}/>
            </div>
         </section>
     <section className='flex flex-col max-sm:hidden'>
      <p>Escolha o o melhor horário para você</p>
      <Time showTime={showTime} date={date}/>

      

      <div className='flex flex-col'>
        <input type="checkbox"></input>
        <p>Nós podemos te manter informado sobre a data de agendamento via SMS?</p>
          <Link href="/Agendado">
          <button className='bg-red-600 rounded-md pt-3 items-center hover:bg-red-400 py-3  px-5 w-48' onClick={handleSubmit}>Agendar</button>
          </Link>
        
        </div>

             </section>
      </div>
   )
}