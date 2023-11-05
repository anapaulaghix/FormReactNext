"use client"
import { useState } from "react";
import Form1 from '../components/Form1'
import Form2 from "../components/Form2";
import Cadastrado from "../components/Cadastrado";

const Form = () => {
    const [page, setPage] = useState(0)
    const formTitle = ["Insira seus dados"]
    const [complete, setComplete] = useState(false)
    const [formData, setFormData] = useState({ nome: "", telefone: "", tatoo: "" });

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
    
    return(
      <div className='flex flex-col gap-4 self-center'>
       {complete ? (
                <Cadastrado />
            ) : (
                <section className='flex flex-col gap-4 self-center'>
         <h1>{formTitle[page ]}</h1>
         <div>{pageDisplay()}</div>

       <button className="bg-red-600 rounded-md pt-3 items-center hover:bg-red-400 py-3 px-5"
       onClick={() => {
        page === formTitle.length ? setComplete(true) :
        setPage((currPage) =>  currPage + 1)}}
       >  
       {page === formTitle.length ? "Enviar" : "Proximo"}
       </button>
       </section>
        
        )}
       </div>
    )
}

export default Form