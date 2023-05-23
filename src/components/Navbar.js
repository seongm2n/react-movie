import React from 'react';
import { Link } from 'react-router-dom';
import './Navbar.css';

function Navbar() {
	return (
		<nav className='navbar'>
			<div className='navbar__logo'>Logo</div>
			<ul className='navbar__menu'>
				<li className='navbar__menu-item'>
					<Link to='/'>Home</Link>
				</li>
				<li className='navbar__menu-item'>
					<Link to='/movie'>Movie</Link>
				</li>
			</ul>
		</nav>
	);
}

export default Navbar;
