import { useState } from "react";

export default function Form2(){

    return(
        <div className="flex flex-col">
          <label>Fez tatuagem a menos de 1 ano?</label>
            <section className="flex flex-row items-center">
        <button id="yes"  className=" rounded-md border border-[#ffffff] h-8 basis-1/2 p-6 m-4 py-3 px-3 items-center text-center">Sim</button>
        <button id="no" className=" rounded-md border border-[#ffffff] h-8 basis-1/2 p-4  m-4 py-3 px-3 items-center pt-3">Nao</button>
            </section>

            <label for='yes'>Pesa mais de 50kg?</label>
            <section className="flex flex-row items-center">
        <button id="yes"  className=" rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4 m-4 py-3 px-3 items-center" >Sim</button>
        <button id="no" className=" rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4  m-4 py-3 px-3 items-center pt-3" >Nao</button>
            </section>

            <label for='yes'>Tomou alguma vacina dentro de 36hrs?</label>
            <section className="flex flex-row items-center">
        <button id="yes"  className=" rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4 m-4 py-3 px-3 items-center ">Sim</button>
        <button id="no" className=" rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4  m-4 py-3 px-3 items-center pt-3" >Nao</button>
            </section>

            <label for='yes'>Tem mais de 18 anos?</label>
            <section className="flex flex-row items-center">
        <button id="yes"  className="rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4 m-4 py-3 px-3 items-center ">Sim</button>
        <button id="no" className=" rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4  m-4 py-3 px-3 items-center pt-3" >Nao</button>
            </section>

            <label for='yes'>Você tem alguma tatuagem?</label>
            <section className="flex flex-row items-center">
        <button id="yes"  className=" rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4 m-4 py-3 px-3 items-center ">Sim</button>
        <button id="no" className=" rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4  m-4 py-3 px-3 items-center pt-3" >Nao</button>
            </section>

        </div>
    )
}