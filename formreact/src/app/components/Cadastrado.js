import Image from 'next/image'

export default function Cadastrado(){
    return (
        <div>
        <h1>Parabens seu cadastro foi feito com sucesso!</h1>
        <p>Em breve, você receberá um SMS no número <span></span> com a confirmação e um link para
        você escolheras datas que melhor se encaixam na sua agenda.</p>
        <Image 
          src="/images/Mensagem.png"
          alt="teste"
          width={300}
          height={300}
          />
        </div>
    )
}