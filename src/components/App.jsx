import React,{useState} from "react"
import ReactDOM from "react-dom/client"

export default function App(){
    
    let [state,set_value] = useState(0)
    function increase(){
        state += 1
        set_value(state)
    }
    function decrease(){
        state -= 1
        set_value(state)
    }
    return(
        <div>
            <h1>{state}</h1>
            <button onClick={increase}> + </button>
            <button onClick={decrease}> - </button>
        </div>
    )
}