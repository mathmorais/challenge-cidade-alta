import styled from "styled-components";

const Container = styled.div`
  width: 200px;
  height: 100%;
  background: ${(props) => props.theme.neutral.white};
`;

export const Sidebar = () => {
  return <Container></Container>;
};
