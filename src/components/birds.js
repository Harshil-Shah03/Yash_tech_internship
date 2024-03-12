import React,{Component} from "react"
import { ReactDOM } from "react-dom/client"

// export default function Bird(props){
//     return (<div>
//         <h1>Hello {props.name}!</h1>
//     </div>)
// }

class Bird extends Component{
    render(){
        return(<div>
            <h1>Hello Cuckoo!</h1>
        </div>)
    }
}

export default Bird 