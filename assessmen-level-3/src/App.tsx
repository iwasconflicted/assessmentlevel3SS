import Counter from "./components/Counter"
import CreateData from "./components/CreateData"
import DeleteData from "./components/DeleteData"
import FetchData from "./components/FetchData"



const App = () => {
  return (
    <div>
      <Counter/>
      {/* <FetchData/> */}
      {/* <CreateData/> */}
      <DeleteData/>
    </div>
  )
}

export default App