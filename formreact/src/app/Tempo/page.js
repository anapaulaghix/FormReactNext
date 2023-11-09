import Link from "next/link";
import Image from "next/image";

export default function Tempo(){
    return(
        <div className="flex justify-center items-center flex-col sm:justify-center sm:items-center">

            <Image
            src="/images/Logo.png"
            alt="teste"
            width={300}
           height={300}
           />

          <p className="text-lg mb-6">Escolha o melhor horario disponível para você</p>
            <button className="bg-[#454545] p-2 mb-2 w-1/2 rounded-sm">09:00</button>
            <button className="bg-[#454545] p-2 mb-2 w-1/2 rounded-sm">10:00</button>
            <button className="bg-[#454545] p-2 mb-2 w-1/2 rounded-sm">11:00</button>
            <button className="bg-[#454545] p-2 mb-2 w-1/2 rounded-sm">13:00</button>
            <button className="bg-[#454545] p-2 mb-2 w-1/2 rounded-sm">14:00</button>

            <input type="checkbox"></input>
            <p>Nós podemos te manter informado sobre a data de agendamento via SMS?</p>
            <Link href="/Agendado"><button className="bg-red-600 rounded-md pt-3 items-center hover:bg-red-400 py-3 px-5 mt-2 w-auto">Finalizar Agendamento</button></Link>
            <Link href="/Form3"><button className="border-white border rounded-md pt-3 items-center hover:bg-red-400 py-3 px-5 mt-2 w-full">Voltar</button></Link>
        </div>
    )
}