import Image from 'next/image'
import Link from 'next/link'
import Agendado from '../Agendado/page'

export default function Form3(){
   return(
      <div className=''>
         <section className=''>
         <Image 
          src="/images/Logo.png"
          alt="teste"
          width={300}
          height={300}
          />
            <label>Escolha o melhor dia disponível para você</label>
            <input type="date"></input>
         </section>

         <section className=''>
            <label>Escolha o melhor horário disponível para você</label>
            <button className=''>09:00</button>
            <button className=''>10:00</button>
            <button className=''>11:00</button>
            <button className=''>14:00</button>
            <button className=''>15:00</button>

            <input type='checkbox'  />
            <label>Nós podemos te manter informado sobre a data do seu agendamento via SMS?</label>
         </section>
          
         <Link href="/Agendado">
          <button className=''>Agendar</button>
         </Link>
      </div>
   )
}