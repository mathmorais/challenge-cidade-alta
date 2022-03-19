import styled from "@emotion/styled";
import { ButtonFilled } from "components/buttons/Button/variations/Button.filled";
import { ButtonTransparent } from "components/buttons/Button/variations/Button.transparent";
import { useEffect, useState } from "react";
import { useDispatch, useSelector, useStore } from "react-redux";
import { toogleModalAction } from "store/actions/modal.action";
import { animations } from "utils/constants/animations";
import { Card } from "../Card/Card";
import { Subtitle } from "../Typography/Typography";

const Wrapper = styled.div`
	display: flex;
	justify-content: center;
	align-items: center;
	position: fixed;
	top: 0;
	left: 0;
	width: 100%;
	height: 100%;
	background: ${(props) => props.theme.transparentBackground};
	${animations.FadeIn}
`;

const Content = styled.section`
	width: 90%;
	max-width: 400px;
	text-align: left;
`;

const ButtonRow = styled.section`
	width: 100%;
	display: inline-flex;
	gap: 25px;
	margin-top: 25px;

	button:first-of-type {
		flex-shrink: 1.5;
	}
`;

type ModalProps = {
	onConfirmation: (data?: string | number) => void;
	label: string;
};

export const Modal: React.FC<ModalProps> = ({ label, onConfirmation }) => {
	const dispatch = useDispatch();
	const { opened, data } = useSelector((store) => store.modal);

	const handleOnConfirmation = () => {
		onConfirmation(data);
		dispatch(toogleModalAction());
	};

	return opened ? (
		<Wrapper>
			<Content>
				<Card>
					<Subtitle>{label}</Subtitle>
					<ButtonRow>
						<ButtonTransparent onClick={() => dispatch(toogleModalAction())}>
							Cancelar
						</ButtonTransparent>
						<ButtonFilled onClick={handleOnConfirmation}>Sim</ButtonFilled>
					</ButtonRow>
				</Card>
			</Content>
		</Wrapper>
	) : (
		<></>
	);
};
