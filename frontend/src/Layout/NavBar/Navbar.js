import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
    return (
        <nav className='navbar navbar-expand-lg navbar-dark bg-primary mb-2'>
            <NavLink className='navbar-brand font-weight-bold' to={'/'}>
                Accubits
            </NavLink>
            <button
                className='navbar-toggler'
                type='button'
                data-toggle='collapse'
                data-target='#navbarSupportedContent'
                aria-controls='navbarSupportedContent'
                aria-expanded='false'
                aria-label='Toggle navigation'>
                <span className='navbar-toggler-icon'></span>
            </button>

            <div className='collapse navbar-collapse' id='navbarSupportedContent'>
                <ul className='navbar-nav mr-auto'>
                    <li className='nav-item'>
                        <NavLink to={'/home'} className='nav-link'>
                            Home
                        </NavLink>
                    </li>
                    <li className='nav-item'>
                        <NavLink to={'/logout'} className='nav-link'>
                            Logout
                        </NavLink>
                    </li>
                </ul>
            </div>
        </nav>
    );
};

export default Navbar;