"use client"
import Image from 'next/image'
import Link from 'next/link'
import React, { useState } from 'react';
import DatePicker from 'react-datepicker';
import 'react-datepicker/dist/react-datepicker.css';
import { useRouter } from 'next/navigation';
import { useEffect } from 'react';

export default function Form3(){
   const [selectedDate, setSelectedDate] = useState('');
   const [selectedTime, setSelectedTime] = useState('');
   const router = useRouter();
   const [horarios, setHorarios] = useState([
    '09:00',
    '10:00',
    '11:00',
    '13:00',
    '14:00',
    '15:00',
  ]);

  useEffect(() => {
    const storedSelectedTime = localStorage.getItem('selectedTime');
    if (storedSelectedTime) {
      setSelectedTime(storedSelectedTime);
    }
  }, []);

   const sendDatesToBackend = () => {
    if (selectedDate && selectedTime) {
      const dataToSend = {
        selectedDate: selectedDate,
        selectedTime: selectedTime,
      };

       // Store selectedTime in LocalStorage
       localStorage.setItem('selectedTime', selectedTime);
  
      fetch('/api/inserirdados', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(dataToSend),
      })
        .then((response) => response.json())
        .then((data) => {
          setSelectedDate(data.selectedDate);
          setSelectedTime(data.selectedTime);
          // Lide com a resposta do servidor, se necessário
        })
        .catch((error) => console.error(error));
    }
    if (selectedTime) {
      setHorarios((horarios) => horarios.filter((horario) => horario !== selectedTime));
      setSelectedTime('');
      localStorage.removeItem('selectedTime');
    }
  };

  const handleTimeSelection = (event) => {
    const horario = event.target;
  
    // Validar o formato do horário
    const formattedTime = `${horario}:00`;
    const isValidTime = /^\d{2}:\d{2}$/.test(formattedTime);
  
    if (isValidTime) {
      // Setar o valor do horário
      setSelectedTime(formattedTime);
  
      // Chamar a função sendDatesToBackend com o horário selecionado
      sendDatesToBackend(horario);
    } else {
      console.error(`Invalid time format: ${formattedTime}`);
    }
  };
  
   return(
      <div className='grid grid-cols-2 my-2 py-3 gap-3 items-center'>
         <section className='flex flex-col p-4'>
         <Image 
          src="/images/Logo.png"
          alt="teste"
          width={300}
          height={300}
          />
            <label>Escolha o melhor dia disponível para você</label>
            <div className='lg:block'>
              <DatePicker
              selected={selectedDate}
              onChange={date => setSelectedDate(date)}
              inline
              calendarClassName="bg-grey-600 border rounded-lg shadow-lg"
              />
            </div>
         </section>
     <section className='flex flex-col'>
      <p>Escolha o o melhor horário para você</p>
        {horarios.map((horario) => (
          <button
            key={horario}
            className='h-14 bg-gray-600 mr-10 mb-1 mt-5'
            onClick={() => {
              handleTimeSelection(horario);
            }}
          >
            {horario}
          </button>
        ))}

               <Link href="/Agendado">
               <button className='bg-red-600 rounded-md pt-3 items-center hover:bg-red-400 py-3  px-5 w-48' onClick={sendDatesToBackend}>Agendar</button>
               </Link>
             </section>
      </div>
   )
}