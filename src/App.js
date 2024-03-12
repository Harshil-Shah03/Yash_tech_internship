import React from "react"
import { ReactDOM } from "react-dom/client"
// import Animal from "./components/Animals"
// import Bird from "./components/birds"
// import Employee from "./components/employees"
// import User from "./components/users"
import Display from "./components/LivingThings"

export default function App(props){
    return (<div>
        {/* <Animal name="Lion"/>
        <Bird name="cuckoo"/>
        <Employee name="Austin"/>
        <User name="Jane"/> */}
        <Display/>
    </div>)
}