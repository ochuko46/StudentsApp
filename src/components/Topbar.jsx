import { NavLink } from "react-router-dom";

function Topbar() {
  
    // const students = [
    //     {id: 1, name: "aminat"},
    //     {id: 1, name: "kunle"},
    //     {id: 1, name: "zion"},
    // ];

    return (
        <div className="container">
            <div className="Nav-container">
            <NavLink activeclassname="active" to="/">Home</NavLink>
            <NavLink activeclassname="active" to="/about">About</NavLink>
            <NavLink activeclassname="active" to="/">Products</NavLink>
            <NavLink activeclassname="active" to="/">Anchorsoft Academy</NavLink>            
        </div>
        </div>
    )
}

export default Topbar;