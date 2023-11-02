export default function Form2(){
    return(
        <div className="flex flex-col gap-4 self-center">
          <label for='yes'>Voce tem alguma tatuagem?</label>
            <section className="flex flex-row items-center">
        <button id="yes"  className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4 m-4 py-3 px-3 items-center  hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500">Sim</button>
        <button id="no" className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8 basis-1/2 p-4  m-4 py-3 px-3 items-center pt-3 hover:border-green-500 focus:outline-none focus:ring focus:ring-green-500" >Nao</button>
            </section>

        <label for='name'>Qual e seu telefone</label>
        <input className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8" type="tel" placeholder="  Insira seu telefone"></input>
        </div>
    )
}