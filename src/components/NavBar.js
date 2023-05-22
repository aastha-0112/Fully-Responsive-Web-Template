import React from 'react'

const NavBar = () => {
    function toggleMenu(){
        var menuToggle = document.querySelector('.toggle');
        var menu = document.querySelector('.menu');
        menuToggle.classList.toggle('active')
        menu.classList.toggle('active')
        }  
        
    return (
        <div>
        <nav>
            <a href="/#" className="logo"><i className='bx bx-play'></i>Emplo-Aid</a>
            <div className="toggle" onClick={toggleMenu}></div>

            <ul className="menu">
                <li><a href="#home" onClick={toggleMenu}>Home</a></li>
                <li><a href="#services" onClick={toggleMenu}>Services</a></li>
                <li><a href="#team" onClick={toggleMenu}>Our Team</a></li>
                <li><a href="#clients" onClick={toggleMenu}>Clients</a></li>
                <li><a href="#connect" class="active-btn" onClick={toggleMenu}>Contact Us</a></li>
            </ul>
            </nav>
        </div>
  )
}

export default NavBar
