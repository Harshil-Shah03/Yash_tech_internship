import React,{Component} from "react"
import { ReactDOM } from "react-dom/client"

// export default function User(props){
//     return (<div>
//         <h1>Hello {props.name}!</h1>
//     </div>)
// }

class User extends Component{
    render(){
        return(
            <h1>Hello Jane</h1>
        )
    }

}

export default User