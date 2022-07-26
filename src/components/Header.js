import React, { useState } from 'react';
import styled from 'styled-components';
import MenuIcon from '@mui/icons-material/Menu';
import CloseIcon from '@mui/icons-material/Close';
import { selectCars } from '../features/car/carSlice';
import { useSelector } from 'react-redux';

const Header = () => {
	const [burgerStatus, setBurgerStatus] = useState(false);
	const cars = useSelector(selectCars);

	return (
		<Container>
			<a href='#home'>
				<img src='./images/logo.svg' alt='logo' />
			</a>
			<Menu>
				{cars &&
					cars.map((car, index) => (
						<a key={index} href='#test'>
							{car}
						</a>
					))}
			</Menu>
			<RightMenu>
				<a href='#shop'>Shop</a>
				<a href='#tesla-acc'>Tesla Account</a>
				<CustomMenu onClick={() => setBurgerStatus(true)} />
			</RightMenu>

			<BurgerNav show={burgerStatus}>
				<CloseWrapper>
					<CustomClose onClick={() => setBurgerStatus(false)} />
				</CloseWrapper>
				{cars &&
					cars.map((car, index) => (
						<li>
							<a key={index} href='#test'>
								{car}
							</a>
						</li>
					))}
				<li>
					<a href='#test'>Existing Inventory</a>
				</li>
				<li>
					<a href='#test'>Used Inventory</a>
				</li>
				<li>
					<a href='#test'>Trade-in</a>
				</li>
				<li>
					<a href='#test'>Cybertruck</a>
				</li>
				<li>
					<a href='#test'>Roadster</a>
				</li>
				<li>
					<a href='#test'>Charging Cables</a>
				</li>
				<li>
					<a href='#test'>Utilities</a>
				</li>
				<li>
					<a href='#test'>Test Drive</a>
				</li>
			</BurgerNav>
		</Container>
	);
};

export default Header;

const Container = styled.div`
	min-height: 3.75rem;
	position: fixed;
	top: 0;
	left: 0;
	right: 0;
	display: flex;
	align-items: center;
	justify-content: space-between;
	padding: 0 1.25rem;
	z-index: 1;
`;

const Menu = styled.div`
	display: flex;
	align-items: center;
	justify-content: center;
	flex: 1;

	a {
		font-weight: 600;
		padding: 0 0.5rem;
		text-transform: uppercase;
	}

	@media (max-width: 768px) {
		display: none;
	}
`;

const RightMenu = styled.div`
	display: flex;
	align-items: center;
	a {
		font-weight: 600;
		margin-right: 0.5rem;
		text-transform: uppercase;
	}
`;

const CustomMenu = styled(MenuIcon)`
	cursor: pointer;
`;

const BurgerNav = styled.div`
	width: 20rem;
	height: 100vh;
	background-color: white;
	list-style: none;
	padding: 1.25rem;
	text-align: left;
	position: fixed;
	top: 0;
	bottom: 0;
	right: 0;
	z-index: 10;
	transform: ${(props) => (props.show ? 'translateX(0)' : 'translateX(100%)')};
	transition: transform 0.2s ease-in;
	li {
		border-bottom: 1px solid rgba(0, 0, 0, 0.2);
		padding: 1rem 0;
	}
	a {
		font-weight: 600;
	}
`;

const CloseWrapper = styled.div`
	display: flex;
	justify-content: flex-end;
`;

const CustomClose = styled(CloseIcon)`
	cursor: pointer;
`;
