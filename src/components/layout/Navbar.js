import React  from  'react'
import { Link } from 'react-router-dom'
import SignedInLinks from './SignedInLinks'
import SignedOutLinks from './SingedOutLinks'

const Navbar = () =>{
    return(
        <nav className="nav-wrapper blue darken-3">
            <div className="container">
                <Link to='/' className="brand-logo">MARIO</Link>
               <SignedInLinks />
               <SignedOutLinks />
            </div>
        </nav>
        

    )
}
export default Navbar;