"use client"
import { useState } from "react";
import Form1 from '../components/Form1'
import Form2 from "../components/Form2";
import Cadastrado from "../components/Cadastrado";
import ProgressBar from "../Progressbar/page";
import Image from "next/image";

export default function Form(){
    const [page, setPage] = useState(0)
    const formTitle = ["Insira seus dados"]
    const [complete, setComplete] = useState(false)
    const [formData, setFormData] = useState({ nome: "", telefone: "", tatoo: "" });
    const totalSteps = 2
    const [formSubmitted, setFormSubmitted] = useState(false);

    const handleButtonClick = async (e) => {
        page === formTitle.length ? setComplete(true) : setPage((currPage) => currPage + 1);

        e.preventDefault();
        if (formData.nome && formData.telefone ) {
            try {
                const response = await fetch('/api/inserirdados', {
                    method: 'POST',
                    headers: {
                        'Content-Type': 'application/json',
                    },
                    body: JSON.stringify(formData),
                });
    
                if (response.ok) {
                    // Lida com a resposta do servidor (por exemplo, redireciona o usuário)
                    console.log("Formulário enviado com sucesso!");
                } else {
                    console.error("Erro ao enviar os dados:", response.statusText);
                }
            } catch (error) {
                console.error("Erro ao enviar os dados:", error);
            }
            setFormSubmitted(true);
        }
      };

    const pageDisplay = () =>{
        if(page === 0){
            return <Form1 onFormDataChange={handleFormDataChange} page={page}/>
        }
        if(page === 1){
            return <Form2 onFormDataChange={handleFormDataChange} page={page}/>
        }
    }

    const handleFormDataChange = (data) => {
        setFormData({ ...formData, ...data });
    }
    
    return (
      <div className='flex flex-col gap-4 flex-end h-1/2'>
       {complete ? (
                <Cadastrado formData={formData}/>
            ) : (

        <section className='flex flex-col gap-4 flex-end h-1/2'>
        <div className="block xl:hidden align-center">
        <Image 
          src="/images/Logo.png"
          alt="teste"
          width={300}
          height={300}
          /> 
        </div>
            <ProgressBar currentStep={page + 1} totalSteps={totalSteps}/>
         
         <div>{pageDisplay()}</div>

       <button className="bg-red-600 rounded-md pt-3 items-center hover:bg-red-400 py-3 px-5"
       onClick={handleButtonClick}
       >  
       {page === formTitle.length ? "Enviar" : "Proximo"}
       </button>
       </section>
        )}
       </div>
    )
}