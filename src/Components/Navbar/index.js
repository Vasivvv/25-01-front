import React from 'react'
import './style.scss'
function Navbar() {
  return (
 <nav>
    <div className='navbar'>
        <div className='nav-logo'>Studio</div>
        <div className='nav-items'>
            <ul>
                <li>Home</li>
                <li>Services</li>
                <li>Portfolio</li>
                <li>About</li>
                <li>Team</li>
                <li>Contact</li>
            </ul>
        </div>
    </div>
 </nav>
  )
}

export default Navbar