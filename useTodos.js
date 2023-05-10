import { useEffect, useReducer } from "react"
import { todoReducer } from "../components/08-useReducer/todoReducer"


const initialState = [
    //     id:1212,
    //     description:'sdknsvd',
    //     done:false
    // },
    ];




    const init  = ()=> {
        return JSON.parse(localStorage.getItem('todos')) || []  ;
    }





export const useTodos = () => {
  
    const [todos, dispatch] = useReducer(todoReducer,initialState,init)



    // save localStorage|
    useEffect(()=>{
        localStorage.setItem('todos',JSON.stringify(todos))
    },[todos])


    // handle todo input 
    const handleNewTodo = (todo)=> {        
        const action = {
            type:'[TODO] Add Todo',
            payload:todo
        }
        dispatch(action)
    }



    const handleDeleteTodo = (id)=> {

        console.log(id)
        dispatch({
            type:'[TODO] Remove Todo',
            payload:id
        })


    }
    const handleToggleTodo = (id)=> {

        console.log(id)
        dispatch({
            type:'[TODO] Toggle Todo',
            payload:id
        })


    }


    const TodoCount = todos.length

    const TodoPending = todos.filter(todo => todo.done === false).length

    return{
        todos,
        handleDeleteTodo,
        handleNewTodo,
        handleToggleTodo,
        TodoCount,
        TodoPending



    }

}

