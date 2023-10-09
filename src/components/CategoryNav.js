import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryNav = () => {
	return (
		<Nav>
			<NavbarLogoMenu>
				<NavbarLogo>
					<Link to={`/`}>MinBox</Link>
				</NavbarLogo>
				<NavbarMenu>
					<NavbarMenuItem>
						<h2>Genre</h2>
						<GenreList>
							<li>
								<Link to='/Documentary'>Documentary</Link>
							</li>
							<li>
								<Link to='/Music'>Music</Link>
							</li>
							<li>
								<Link to='/Action'>Action</Link>
							</li>

							<li>
								<Link to='/Drama'>Drama</Link>
							</li>

							<li>
								<Link to='/Sport'>Sport</Link>
							</li>
							<li>
								<Link to='/Crime'>Crime</Link>
							</li>
							<li>
								<Link to='/Mystery'>Mystery</Link>
							</li>
							<li>
								<Link to='/Comedy'>Comedy</Link>
							</li>
						</GenreList>
					</NavbarMenuItem>
				</NavbarMenu>
			</NavbarLogoMenu>
		</Nav>
	);
};

export default CategoryNav;

const Nav = styled.nav`
	margin: auto;
	width: 100%;
	justify-content: space-between;
	background-color: #dbb8c6;
	align-items: center;
	padding: 16px;
	transition: all 300ms ease-in-out;
	display: flex;
	z-index: 11;
`;

const NavbarLogoMenu = styled.div`
	display: flex;
	flex-direction: column;
`;

const NavbarLogo = styled.div`
	width: 220px;
	height: 55px;
	font-family: 'Inter';
	font-style: italic;
	font-weight: 900;
	font-size: 50px;
	line-height: 61px;

	& a {
		text-decoration: none;
		color: #fee25b;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`;

const NavbarMenu = styled.ul`
	display: flex;
	align-items: center;
	list-style: none;
	flex-direction: row;
	padding:0;
`;

const NavbarMenuItem = styled.li`
	position: relative;
	font-weight: 900;
	font-size: 25px;

	& a {
		text-decoration: none;
		color: #fee25b;
	}
	&:hover {
		border-radius: 4px;
	}
	h2 {
		color: #fee25b;
		display: flex;
		flex-direction: row;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`;

const GenreList = styled.ul`
	list-style: none;
	display: flex;
	flex-direction: row;
	text-align: center;
	justify-content: space-between;
	padding: 0;

	li {
		text-align: center;
		padding: 3px 10px;
		border-radius: 10px;
		margin-right: 10px;
	}
	li:hover {
		background-color: pink;
	}
`;
