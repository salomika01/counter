import { useEffect, useRef, useState } from "react"
import Button from "./Button"
import ToDoItem from "./TodoItem"

const Todo = () => {

    const _toDoIthems =[
        {id:1, text:'todo 1', checked:true },
        {id:2, text:'todo 2', checked:false },
        {id:3, text:'todo 3', checked:true },
        {id:4, text:'todo 4', checked:false }
    ]
const textInput = useRef(null)

const [inputvalue, setInputvalue] = useState('')
const [toDoItems, setTuDoutems] =useState(_toDoIthems)

useEffect ( () => {
textInput?.current?.focus()
}, [])

function handlesubmit(e) {
    e.preventDefault()
    const toDoItem =  {id:Date.now(), text: inputvalue, checked:false}
    
    setTuDoutems([toDoItem, ...toDoItems])
    setInputvalue('')
} 

function handleCheck (itemid){
    
    const newtodoitem = toDoItems.map(item => {
        if(item.id === itemid){
            item.checked = !item.checked
        }
        return item;
       

    })

    setTuDoutems(newtodoitem)

}

    return(
        <div>
        <h3>Todo app</h3>
        <form onSubmit={(e) => handlesubmit(e)}>
        <input 
        ref={textInput}
        type='text' 
        value={inputvalue} 
         onChange={(e) => setInputvalue(e.target.value)}/>
        <Button type='submit' />
        </form>
        <ul>
            {
                toDoItems.map(item => {
                    return (
                        <ToDoItem 
                        key={item.id}
                        onChange={()=> handleCheck(item.id)} 
                        text={item.text} 
                        checked={item.checked}
                        />
                    )

                })

                
            }
        </ul>
        </div>
    )
}
export default Todo