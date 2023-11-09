import Image from "next/image"
import Link from "next/link"
export default function Dia(){
    return(
        
    <div className='flex justify-center items-center flex-col sm:justify-center sm:items-center'>
        <Image
            src="/images/Logo.png"
            alt="teste"
            width={300}
           height={300}
           />

           <p className="p-3">Escolha o melhor horario disponível pra você</p>
           <div className="flex flex-col">
            <button className='bg-[#454545] p-5 mb-2'> Sexta-feira, 27/10/2023
                </button>
            <button className='bg-[#454545] p-5 mb-2'> Sábado, 28/10/2023
                </button>
            </div>

   <Link href="/Tempo">
    <button className='bg-red-600 rounded-md pt-3 items-center hover:bg-red-400 py-3 px-5 w-48'>Proximo</button>
    </Link>
    <Link href="/">
    <button className='className="border-white border rounded-md pt-3 items-center hover:bg-red-400 py-3 px-5 mt-2 w-full"'>Voltar</button>
    </Link>
    </div>
    )
}