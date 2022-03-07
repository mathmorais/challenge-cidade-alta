import styled from "styled-components";
import { Header } from "../Header/Header";
import { Sidebar } from "../Sidebar/Sidebar";

const Container = styled.div`
  display: inline-block;
`;

const Main = styled.div`
  display: flex;
  flex-direction: column;
`;

const Content = styled.div`
  display: flex;
  justify-content: center;
`;

const Frame = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 960px;
`;

export const DashboardLayout: React.FC = ({ children }) => {
  return (
    <Container>
      <Sidebar />
      <Main>
        <Header />
        <Content>
          <Frame>{children}</Frame>
        </Content>
      </Main>
    </Container>
  );
};
