import axios from "axios"
import { useEffect, useState } from "react"


interface ToDo{
    id:number
    title:string
    completed: boolean
}

const FetchData = () => {

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


  return (
    <>

    <h1 className="text-center">Fetch Data</h1>
    <ul>
    {toDo.map((toDo) => <li key={toDo.id}>{toDo.title}</li>)}
    { error && <p className="text-danger">{error}</p>}
    </ul>

    </>
  )
}

export default FetchData