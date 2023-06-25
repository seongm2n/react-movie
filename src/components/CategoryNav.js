import React, { useState } from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';

const CategoryNav = () => {
	const [isCategoryOpen, setIsCategoryOpen] = useState(false);

	const handleCategoryClick = () => {
		setIsCategoryOpen(!isCategoryOpen);
	};

	return (
		<Nav>
			<NavbarLogoMenu>
				<NavbarLogo>
					<Link to={`/`}>MinBox</Link>
				</NavbarLogo>
				<NavbarMenu>
					<NavbarMenuItem>
						Genre
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
	width: 100%;
	justify-content: space-between;
	background-color: #dbb8c6;
	align-items: center;
	padding: 16px;
	transition: all 300ms ease-in-out;
	z-index: 11;
`;

const NavbarLogoMenu = styled.div`
	display: flex;
	flex-direction: column;
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

	& a {
		text-decoration: none;
		color: #fee25b;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
`;

const NavbarMenu = styled.ul`
	display: flex;
	padding-left: 0;
	align-items: center;
	list-style: none;
	flex-direction: row;
	list-style: none;
	margin-left: 24px;
`;

const NavbarMenuItem = styled.li`
	position: relative;
	padding: 8px 12px;
	font-weight: 900;
	font-size: 25px;

	& a {
		text-decoration: none;
		color: #fee25b;
		text-shadow: 0px 4px 4px rgba(0, 0, 0, 0.25);
	}
	&:hover {
		// background-color: #fff;
		border-radius: 4px;
	}
`;

const GenreList = styled.ul`
	list-style: none;
	display: flex;
	text-align: center;
	justify-content: space-between;
	margin-right: 10px;
`;
