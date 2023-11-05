import Image from 'next/image'

export default function Form3(){
   return(
      <div>
         <section>
         <Image 
          src="/images/Logo.png"
          alt="teste"
          width={300}
          height={300}
          />
            <label>Escolha o melhor dia disponível para você</label>
            <input type="date"></input>
         </section>

         <section>
            <label>Escolha o melhor horário disponível para você</label>
            <button>09:00</button>
            <button>10:00</button>
            <button>11:00</button>
            <button>14:00</button>
            <button>15:00</button>

            <input type='checkbox'  />
            <label>Nós podemos te manter informado sobre a data do seu agendamento via SMS?</label>
         </section>

         <button>Agendar</button>
      </div>
   )
}