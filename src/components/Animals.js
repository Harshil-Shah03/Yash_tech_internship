import React,{Component} from "react"
import { ReactDOM } from "react-dom/client"

// export default function Animal(props){
//     return (<div>
//         <h1>Hello {props.name}!</h1>
//     </div>)
// }

class Animal extends Component{
    render(){
        return(<div>
                <h1>Hello Lion!</h1>
             </div>)
    }
}

export default Animal