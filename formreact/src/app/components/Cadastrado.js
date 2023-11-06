import Image from 'next/image'
import Link from 'next/link'

export default function Cadastrado({ formData }){
    return (
        <div>
          <div className='block xl:hidden align-center'>
          <Image 
          src="/images/Logo.png"
          alt="teste"
          width={300}
          height={300}
          /> 
          </div>

          <div className='block xl:hidden align-center'>
          <Image 
          src="/images/Mensagem.png"
          alt="teste"
          width={300}
          height={300}
          />
          </div>
        <h1>Parabéns, <span className='text-red-600'>{formData.nome}</span> seu cadastro foi feito com sucesso!</h1>
        <p>Em breve, você receberá um SMS no número <span>{formData.telefone}</span> com a confirmação e um link para
        você escolheras datas que melhor se encaixam na sua agenda.</p>

        <div className='hidden xl:block'>
        <Image 
          src="/images/Mensagem.png"
          alt="teste"
          width={300}
          height={300}
          />
        </div>

        <Link href="/Form3">Ir p form3</Link>
        </div>

    )
}