import Image from 'next/image'

export function Agendado(){
    return(
        <div>
        <Image 
          src="/images/Logo.png"
          alt="teste"
          width={300}
          height={300}
          />

        <h1>Parabens foi agendado com sucesso</h1>
        <Image 
          src="/images/ilustracao_sangue.png"
          alt="teste"
          width={300}
          height={300}
          />

        <span>Senha: </span>
        <h2>Agendamento: </h2>

        <p>Nós te enviaremos um SMS para avisar sobre a data caso tenha marcado essa opção, gostaria de colocar na sua agenda?</p>
        <button>Colocar na agenda</button>

        </div>
    )
}