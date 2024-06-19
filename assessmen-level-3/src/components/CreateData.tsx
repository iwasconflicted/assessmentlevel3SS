 import axios from "axios"
import { useEffect, useState } from "react"
    
    
interface ToDo{
        id:number
        title:string
        completed: boolean
    }
    

const CreateData = () => {

     const [toDo, SetToDo] = useState<ToDo[]>([])
     const [error, setError] = useState("")
    
    const GetData = () => {
        axios
        .get("https://jsonplaceholder.typicode.com/todos")
        .then((response) => SetToDo(response.data))
        .catch(error => setError(error.message))
    
    }
    
    useEffect(() => {
    GetData();
    }, [])
    

const addToDo = () => {
    
    const originaltoDo = [...toDo]

    const newToDo = {id:0, title: 'do the dishes', completed: true}

    SetToDo([newToDo,...toDo])

    axios.post('https://jsonplaceholder.typicode.com/todos', newToDo)
    .then(response => SetToDo([response.data,...toDo]))
    .catch(error =>{
        setError(error.message)
        SetToDo(originaltoDo)
    })
}


  return (
    <>

<h1>Create</h1>

<ul className="list-group">
{toDo.map((toDo) => <li key={toDo.id}>{toDo.title}<button onClick={addToDo}>Add</button></li>)}
{ error && <p className="text-danger">{error}</p>}
</ul>
    </>
  )
}

export default CreateData