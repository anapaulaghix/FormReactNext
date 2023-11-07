"use client"
import Image from 'next/image'
import { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import queryString from 'query-string';


export default function Agendado(){

    return(
        <div className='flex justify-center items-center flex-col'>
        <Image 
          src="/images/Logo.png"
          alt="teste"
          width={300}
          height={300}
          />

        <h1>Parabéns foi agendado com sucesso</h1>
        <Image 
          src="/images/ilustracao_sangue.png"
          alt="teste"
          width={300}
          height={300}
          />

        <span>Senha:</span>
        <p>Data selecionada: </p>
       
        <p>Nós te enviaremos um SMS para avisar sobre a data caso tenha marcado essa opção, gostaria de colocar na sua agenda?</p>
        <button>Colocar na agenda</button>

        </div>
    )
}