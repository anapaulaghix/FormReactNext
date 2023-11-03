import { useState } from "react";

export default function Form2(){

    const [tatuagemAtiva, setTatuagemAtiva] = useState(false);
    const [pesoAtivo, setPesoAtivo] = useState(false);

    return(
        <div className="flex flex-col gap-4 self-center">
          <label for='yes'>Fez tatuagem a menos de 1 ano?</label>
            <section className="flex flex-row items-center">
        <button id="yes"  className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4 m-4 py-3 px-3 items-center  hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500"   >Sim</button>
        <button id="no" className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4  m-4 py-3 px-3 items-center pt-3 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500" >Nao</button>
            </section>

            <label for='yes'>Pesa mais de 50kg?</label>
            <section className="flex flex-row items-center">
        <button id="yes"  className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4 m-4 py-3 px-3 items-center  hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500" >Sim</button>
        <button id="no" className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4  m-4 py-3 px-3 items-center pt-3 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500" >Nao</button>
            </section>

            <label for='yes'>Tomou alguma vacina dentro de 36hrs?</label>
            <section className="flex flex-row items-center">
        <button id="yes"  className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4 m-4 py-3 px-3 items-center  hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500">Sim</button>
        <button id="no" className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4  m-4 py-3 px-3 items-center pt-3 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500" >Nao</button>
            </section>

            <label for='yes'>Tem mais de 18 anos?</label>
            <section className="flex flex-row items-center">
        <button id="yes"  className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4 m-4 py-3 px-3 items-center  hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500">Sim</button>
        <button id="no" className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4  m-4 py-3 px-3 items-center pt-3 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500" >Nao</button>
            </section>

            <label for='yes'>Você tem alguma tatuagem?</label>
            <section className="flex flex-row items-center">
        <button id="yes"  className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4 m-4 py-3 px-3 items-center  hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500">Sim</button>
        <button id="no" className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4  m-4 py-3 px-3 items-center pt-3 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500" >Nao</button>
            </section>

        </div>
    )
}