import styled from "@emotion/styled";
import NextLink, { LinkProps } from "next/link";
import { HTMLProps } from "react";
import { typography } from "utils/constants/typography";

const LinkAnchor = styled.a`
	color: ${(props) => props.theme.primary.default};
	font-weight: 500;
	text-decoration: none;
	font-size: ${typography.paragraphy.size};
`;

export const Anchor: React.FC<LinkProps & HTMLProps<HTMLAnchorElement>> = ({
	as,
	href,
	children,
	...props
}) => {
	return (
		<NextLink href={href} passHref {...props}>
			<LinkAnchor>{children}</LinkAnchor>
		</NextLink>
	);
};
