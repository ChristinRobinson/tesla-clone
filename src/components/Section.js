import React from 'react';
import styled from 'styled-components';

const Section = (props) => {
	const { title, description, leftBtnText, rightBtnText, backgroundImg } =
		props;
	return (
		<Wrap bgImage={backgroundImg}>
			<ItemText>
				<h1>{title}</h1>
				<p>{description}</p>
			</ItemText>
			<Buttons>
				<ButtonGroup>
					<LeftButton>{leftBtnText}</LeftButton>
					{rightBtnText && <RightButton>{rightBtnText}</RightButton>}
				</ButtonGroup>
				<DownArrow src='./images/down-arrow.svg' />
			</Buttons>
		</Wrap>
	);
};

export default Section;

const Wrap = styled.div`
	width: 100vw;
	height: 100vh;
	background-image: ${(props) => `url('./images/${props.bgImage}')`};
	background-position: center;
	background-repeat: no-repeat;
	background-size: cover;
	display: flex;
	flex-direction: column;
	justify-content: space-between;
`;

const ItemText = styled.div`
	padding-top: 15vh;
	text-align: center;
`;

const Buttons = styled.div`
	display: flex;
	flex-direction: column;
	align-items: center;
	justify-content: center;
`;

const ButtonGroup = styled.div`
	margin-bottom: 2rem;
	display: flex;
	@media (max-width: 768px) {
		flex-direction: column;
	}
`;

const LeftButton = styled.div`
	height: 2.5rem;
	width: 16rem;
	background-color: rgba(23, 26, 32, 0.8);
	border-radius: 2rem;
	color: #fff;
	cursor: pointer;
	font-size: 12px;
	margin: 0.5rem;
	opacity: 0.85;
	text-transform: uppercase;

	display: flex;
	align-items: center;
	justify-content: center;
`;

const RightButton = styled(LeftButton)`
	background-color: white;
	color: black;
	opacity: 0.65;
`;

const DownArrow = styled.img`
	height: 2.5rem;
	margin-bottom: 1.25rem;
	overflow-x: hidden;
	animation: animateDown 1.5s infinite;
`;
