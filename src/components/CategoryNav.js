import React from 'react';
import { Link } from 'react-router-dom';
import styled from 'styled-components';

const Nav = styled.nav`
	position: fixed;
	width: 100%;
	justify-content: space-between;
	background-color: rgba(149, 32, 80, 0.6);
	align-items: center;
	padding: 16px;
	transition: all 300ms ease-in-out;
	z-index: 11;
`;

const NavbarLogoMenu = styled.div`
	display: flex;
	text-align: center;
`;

const NavbarLogo = styled.div`
	width: 220px;
	height: 55px;
	left: 16px;
	top: 23px;
	font-family: 'Inter';
	font-style: italic;
	font-weight: 900;
	font-size: 50px;
	line-height: 61px;
	color: #fee25b;
	text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
`;

const NavbarMenu = styled.li`
	display: flex;
	flex-direction: row;
	align-items: center;
	list-style: none;
`;

const NavbarMenuItem = styled.li`
	padding: 8px 12px;
	font-weight: 900;
	font-size: 25px;
	text-decoration: none;

	&:hover {
		background-color: #fee25b;
		border-radius: 4px;
	}
`;

const Category = styled.section`
	display: flex;
`;

const NavPosition = styled.div`
	display: flex;
	flex-direction: column;
`;

function Navbar() {
	return (
		<Nav>
			<NavbarLogoMenu>
				<NavbarLogo>MinBox</NavbarLogo>
				<NavbarMenu>
					<NavPosition>
						<NavbarMenuItem>
							<Link to='/'>Home</Link>
						</NavbarMenuItem>
						<Category>
							category
							<option>dfdf</option>
						</Category>
					</NavPosition>
				</NavbarMenu>
			</NavbarLogoMenu>
		</Nav>
	);
}

export default Navbar;
