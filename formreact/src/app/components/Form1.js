import { useState } from "react";
import Form from './Form'

export default function Form1({ onFormDataChange, page }){

    const [nome, setNome] = useState("");
    const [telefone, setTelefone] = useState("");

    const handleNomeChange = (e) => {
        setNome(e.target.value);
        onFormDataChange({ nome: e.target.value, telefone });
    }

    const handleTelefoneChange = (e) => {
        setTelefone(e.target.value);
        onFormDataChange({ nome, telefone: e.target.value });
    }


    return(
        <div className="flex flex-col gap-4 self-center">
        <label for='name'>Qual seu nome completo?</label>
        <input className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8" type="text" placeholder="  Insira seu nome" name="nome"
        value={nome}
        onChange={handleNomeChange}
        ></input>

        <label for='name'>Qual seu telefone completo?</label>
        <input className="bg-slate-500 rounded-md border border-[#a5a7b3] h-8" type="tel" placeholder="  Insira seu telefone" name="telefone"
                value={telefone}
                onChange={handleTelefoneChange}></input>
        </div>
    )
}