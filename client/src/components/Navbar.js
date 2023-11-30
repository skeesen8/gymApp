import React from 'react'
import {Link} from 'react-router-dom'

function Navbar(){
    return(
        <nav className='navbarclass'>
            <ul>
                <p>
                    <Link to='/'>Home</Link>
                </p>
                <p>
                    <Link to='/AddGym'>Add Gym</Link>
                </p>
                <p>
                    <Link to='/gyms '>All Gyms</Link>
                </p>
            </ul>
        </nav>
    )
}
export default Navbar