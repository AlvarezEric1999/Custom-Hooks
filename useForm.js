// import React from 'react'
import { useState } from "react";

export const useForm = (initialForm = {}) => {

    const [ formState , setFormState] = useState(initialForm)


    // const {username ,email,password} = formState;


    const onInputChange = ({target})=> {

        // todo:desestructurar el objeto evento y extraer name para utilizar las propiedades computadas de los objetos
        const { name ,value} = target;

        setFormState({
            ...formState,
            [name]:value
        })
    }

    const resetForm = ()=>{

        setFormState(initialForm)
    }
  

    return {
        ...formState,
        formState,
        onInputChange,
        resetForm

    }

    

  
}

 