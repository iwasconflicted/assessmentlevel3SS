import { useState } from "react"


const Counter = () => {

    const [count, setCount] = useState(0);

    const increaseCount = () => {
        setCount(count + 1);
      };
    
      const decreaseCount = () => {
        setCount(count > 0 ? count - 1 : 0);
      };



  return (
    <>
      
        <div className="text-center">

            <h1>Counter</h1>
            <h1>{count}</h1>
            <button className="btn btn-success" onClick={increaseCount}>
                Add
            </button>

            <button className="btn btn-danger" onClick={decreaseCount} >
                Decrease
            </button>

        </div>  
      


    </>
  )
}

export default Counter