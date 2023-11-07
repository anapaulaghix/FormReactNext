import { useState } from "react";
import Form from '../Form/page'

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
        <div className="md:w-1/2 flex-col flex-end h-1/2">

        <label htmlFor='name' >Qual seu nome completo?</label>
        <input className="bg-[#6E6E6E33] rounded-md border border-[#8A8A8A] h-8" type="text" placeholder="  Insira seu nome" name="nome"
        value={nome}
        onChange={handleNomeChange}
        ></input>

        <label htmlFor='tel'>Qual seu telefone completo?</label>
        <input className="bg-[#6E6E6E33] rounded-md border border-[#8A8A8A] h-8" type="tel" placeholder="  Insira seu telefone" name="telefone"
        value={telefone}
        onChange={handleTelefoneChange}
        >
       </input>
        </div>
    )
}