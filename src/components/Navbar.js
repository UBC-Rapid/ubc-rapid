import React, { useState, useEffect } from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
    const [click, setClick] = useState(false);
    const [button, setButton] = useState(true);
    
    const handleClick = () => {
        setClick(!click);
    }
    const closeMobileMenu = () => setClick(false);

    const showButton = () => {
        if(window.innerWidth <= 960) {
            setButton(false);
        } else {
            setButton(true);
        }
    };
    
    // render button only once
    useEffect(() => {
        showButton();
      }, []);

    window.addEventListener('resize', showButton);

    return (
        <>
            <nav className='navbar'>
                <div className='navbar-container'>
                    <Link to='/' className='nav-logo'>
                        <img src='/images/rapid_logo.png' className='rapid-logo' alt=""/>
                    </Link>
                    <div className='menu-icon' onClick={handleClick}>
                        <i className={click ? 'fas fa-times' : 'fas fa-bars'} />
                    </div>
                    <ul className={click ? 'nav-menu active' : 'nav-menu'}>
                        <li className='nav-item'>
                            <Link to='/' className='nav-links' onClick={closeMobileMenu}>
                                ABOUT
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/printing' className='nav-links' onClick={closeMobileMenu}>
                                PRINTING SERVICE
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/consulting' className='nav-links' onClick={closeMobileMenu}>
                                CONSULTING SERVICE
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/projects' className='nav-links' onClick={closeMobileMenu}>
                                PROJECTS
                            </Link>
                        </li>
                        <li className='nav-item'>
                            <Link to='/join-us' className='nav-links' onClick={closeMobileMenu}>
                                JOIN US
                            </Link>
                        </li>
                    </ul>
                </div>
            </nav>
        </>
    );
}

export default Navbar;