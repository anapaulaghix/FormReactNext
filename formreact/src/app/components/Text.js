import Image from 'next/image'
import React from 'react'
import Form from './Form'

const Text = () => {
    return(
      <section className='grid md:grid-cols-2 my-2 md:my-2 py-8 gap-5 items-center'>
        <div className='flex flex-col'>
        <nav className='basis-1/4'>
          <Image 
          src="/images/teste-de-sangue.png"
          alt="teste"
          width={100}
          height={50}
          />
          <h1>Doe sangue</h1>
        </nav>

        <section className='grid grid-cols-1 '> 
          <h1>Ola aqui iremos nos apresentar</h1>
          <p>Entao queremos dizer que lorem ipsum</p>
          <p>Lorem ipsum dolor sit amet. Ut eaque dolores id amet iure qui tempore natus est omnis fugit ex rerum explicabo non quia facere eos distinctio eaque. Id provident itaque ad similique enim aut libero</p>
        </section>
       </div>

       <Form />

    </section>
    )
}

export default Text