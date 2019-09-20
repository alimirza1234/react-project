import React  from  'react'
import { NavLink } from 'react-router-dom'

const SingedInLinks = () =>{
    return(
       
       <ul className="right">
        <li><NavLink to='/create'>New Project</NavLink></li>
        <li><NavLink to='/'>LogOut</NavLink></li>
        <li><NavLink to='/' className="btn btn-floating pink lighten-1">A.A</NavLink></li>
      </ul>
       
        

    )
}
export default SingedInLinks;