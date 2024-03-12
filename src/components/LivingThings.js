//Create LivingThings component with 4 buttons animals, users, employees and birds,
//  on click of each button should open the corresponding component 


import React,{Component} from "react"
import ReactDOM  from "react-dom/client"
import Animal from "./Animals"
import Bird from "./birds"
import Employee from "./employees"
import User from "./users"




// export default function Display(props){

//     const [current_comp,set_component] = useState()

//     function display_component(component){
//         set_component(component)
        

//     }
//     return(<div>
//         <button onClick={() => display_component(<Animal  name="Lion"/>)}>Animals</button>
//         <button onClick={() => display_component(<User name="Jane"/>)}>Users</button>
//         <button onClick={() => display_component(<Employee name="Austin"/>)}>Employees</button>
//         <button onClick={() => display_component(<Bird name="Cuckoo"/>)}>Birds</button>
//         {current_comp && current_comp}
//     </div>)
// }

// Create LivingThings component with 4 buttons animals,
//  users, employees and birds, on click of each button should open the 
//  corresponding component 
//  (topics event handling, reactdom render, reactdom unmountcomponentatnode)



class LivingThings extends Component {
  constructor(props) {
    super(props);
    this.state = { currentComponent: null };
  }

  handleClick = (component) => {
    // Update state and render new component (no unmount)
    this.setState({ currentComponent: component });
  }

  render() {
    const { currentComponent } = this.state;

    return (
      <div>
        <button onClick={() => this.handleClick(<Animal />)}>Animals</button>
        <button onClick={() => this.handleClick(<User />)}>Users</button>
        <button onClick={() => this.handleClick(<Employee />)}>Employees</button>
        <button onClick={() => this.handleClick(<Bird />)}>Birds</button>
        <div id="component-container">
          {currentComponent} {/* Render only the current component */}
        </div>
      </div>
    );
  }
}

export default LivingThings;


