import styled from "styled-components";

const Container = styled.div`
  width: 100%;
  height: 100vh;
  overflow: auto;
  display: flex;
  justify-content: center;
  align-items: center;
`;

const Main = styled.div`
  display: flex;
  width: 100%;
  max-width: 520px;
`;

export const AuthLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Main>{children}</Main>
    </Container>
  );
};
