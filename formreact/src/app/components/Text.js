import Image from 'next/image'
import React from 'react'
import Form from './Form'
import Link from 'next/link'

const Text = () => {
    return(
      <section className='grid md:grid-cols-2 md:my-2 py-3 gap-3 items-center'>
        <div className=''>
          <Image 
          src="/images/Logo.png"
          alt="teste"
          width={300}
          height={300}
          />

        <section className='grid grid-cols-1 max-w-md '> 
        <div>
          <h1 className='text-2xl mt-10'>Seja bem vindo a iniciativa <span className='text-red-600'>Sangue</span> corinthiano</h1>
          <p className='mb-3 text-sm'>Na família corinthiana, a paixão pelo nosso clube é algo que nos une. Mas existe algo ainda mais poderoso que pode unir nossos corações: a solidariedade. </p>
          <p className='mb-3 text-sm'>Nossa iniciativa "Sangue Corinthiano" não é apenas para torcedores do corinthians mas é um convite para você se tornar parte de algo maior, algo que vai além das quatro linhas do campo. É um chamado para fazer parte de algo que pode salvar vidas, algo que pode ser ainda mais grandioso que um título de campeonato.</p>
          <p className='mb-3 text-sm'>Ao doar sangue, você se torna um verdadeiro herói fora do campo. Cada doação é um ato de amor, um gesto de compaixão que pode fazer a diferença na vida de alguém que precisa desesperadamente.</p>
          <p className='mb-3 text-sm'>Aperte no botão abaixo e siga os próximos passos para que você possa contribuir com essa causa maravilhosa!</p>
          <p></p>
          </div>
        </section>

        <Link href="/Form">
        <button className="lg:hidden bg-blue-500 text-white p-2 rounded">
        Botão para dispositivos móveis
        </button>
        </Link>
       </div>
      
      <div className='columns-5xl'>
       <Form/>
      </div>

    </section>
    )
}

export default Text