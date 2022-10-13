import { Typography } from "@mui/material";
import { FC, PropsWithChildren } from "react";
import { Content, MainHeader, Container } from "./MainLayout.styles";

interface IMainLayoutProps extends PropsWithChildren<{}> {}

const MainLayout: FC<IMainLayoutProps> = ({ children }) => {
  return (
    <Container>
      <MainHeader>
        <Typography>OHHMMDb</Typography>
      </MainHeader>
      <Content>{children}</Content>
    </Container>
  );
};

export default MainLayout;
