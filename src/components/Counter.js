import { useState } from "react"

const Counter = ({startNumber, increaseNumber, decreaseNumber}) => {
    const [number, setNumber] = useState(startNumber || 0)

    function increase (Incremenyt){
        setNumber(number + Incremenyt)

    }
function decrease (Decrement){
    setNumber(number - Decrement)
}

    return (
        <div className="Counter">
          <h2>Counter</h2>
          <button onClick={()=>increase(increaseNumber || 2)}>increase</button>
          <br/>
          <span>{number}</span>
          <br/>
          <button onClick={() => decrease(decreaseNumber || 6)}>decrease</button>
        </div>

        

    
    )
}

export default Counter



