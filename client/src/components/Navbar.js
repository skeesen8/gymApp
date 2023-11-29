import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav className='navbarclass'>
            <ul>
                <p>
                    <Link to='/'>Home Page</Link>
                </p>
                <p>
                    <Link to='/AddGymForm'>Create Gym</Link>
                </p>
                <p>
                    <Link to='/reviews'>Add Review</Link>
                </p>
            </ul>
        </nav>
    )
}
export default Navbar