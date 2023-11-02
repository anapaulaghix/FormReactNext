"use client"
import { useState } from "react";
import Form1 from './Form1'
import Form2 from "./Form2";
import Cadastrado from "./Cadastrado";

const Form = () => {
    const [page, setPage] = useState(0)
    const formTitles = ["Insira seus dados"]
    const [complete, setComplete] = useState(false)

    const pageDisplay = () =>{
        if(page === 0){
            return <Form1 />
        }
        if(page === 1){
            return <Form2 />
        }
    }

    return(
      <div className='flex flex-col gap-4 self-center'>

        <h1>{formTitles[page ]}</h1>
        <div>{pageDisplay()}</div>

       <button className="bg-red-600 rounded-md pt-6 items-center"
       onClick={() => {
        page === formTitles.length ? setComplete(true) :
        setPage((currPage) =>  currPage + 1)}}
       >  
       {page === formTitles.length ? "Enviar" : "Proximo"}
       </button>
        
        { complete && (<Cadastrado/>)}
       </div>
    )
}

export default Form