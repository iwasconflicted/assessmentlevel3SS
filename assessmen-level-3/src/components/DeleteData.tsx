import axios from "axios"
import { useEffect, useState } from "react"
    
    
interface ToDo{
        id:number
        title:string
        completed: boolean
    }
    

const DeleteData = () => {

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
   
const deleteToDo = (toDo:ToDo) =>{
    SetToDo(toDo.filter(t => t.id != toDo.id))

}

  return (
    <>
<h1>Delete</h1>

<ul className="list-group">
{toDo.map((toDo) => <li key={toDo.id}>{toDo.title}<button onClick={() =>deleteToDo(toDo)}>Delete</button></li>)}
{ error && <p className="text-danger">{error}</p>}
</ul>
    </>
  )
}

export default DeleteData