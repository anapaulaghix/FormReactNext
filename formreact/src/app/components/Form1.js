export default function Form1(){
    return(
        <div className="flex flex-col gap-4 self-center">
        <label for='name'>Qual e seu nome</label>
        <input className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8" type="text" placeholder="  Insira seu nome"></input>

        <label for='name'>Qual e seu telefone</label>
        <input className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8" type="tel" placeholder="  Insira seu telefone"></input>
        </div>
    )
}