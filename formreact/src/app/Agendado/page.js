"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import queryString from 'query-string';
import Link from 'next/link';


export default function Agendado(){

  const [password, setPassword] = useState("");

  function generateRandomPassword(length) {
    const charset = "abcdefghijklmnopqrstuvwxyzABCDEFGHIJKLMNOPQRSTUVWXYZ0123456789";
    let password = "";
  
    for (let i = 0; i < length; i++) {
      const randomIndex = Math.floor(Math.random() * charset.length);
      password += charset.charAt(randomIndex);
    }
  
    return password;
  }

  useEffect(() => {
    const newPassword = generateRandomPassword(5);
    setPassword(newPassword);
  }, []);

  
    return(
        <div className='flex justify-center items-center flex-col sm:justify-center sm:items-center'>
        <Image 
          src="/images/Logo.png"
          alt="teste"
          width={300}
          height={300}
          />

        <h1 className='text-2xl'>Parabéns foi agendado com sucesso</h1>
        <Image 
          src="/images/ilustracao_sangue.png"
          alt="teste"
          width={300}
          height={300}
          />

        <span className='bg-[#454545] p-2 rounded-sm h-10 mt-2'>Senha: {password}</span>
        <p className='mt-2'>Agendamento: </p>
       
        <p className='mt-2'>Nós te enviaremos um SMS para avisar sobre a data caso tenha marcado essa opção, gostaria de colocar na sua agenda?</p>

        <Link href="https://calendar.google.com">
        <button className='bg-red-600 rounded-md pt-3 items-center hover:bg-red-400 py-3  px-5 w-48 mt-2'>Colocar na agenda</button>
        </Link>

        </div>
    )
}