import { styled } from "@mui/material";
import { Box } from "@mui/material";
import theme from "../../theme";

export const Container = styled(Box)`
    display: flex;
    flex: 1;
    flex-direction: column;
`

export const Content = styled(Box)`
    display: flex;
    margin-left: 15%;
    margin-right: 15%;
    margin-top: 3em;
    flex-direction: column;
`

export const MainHeader = styled(Box)`
    display: flex;
    height: 3.125em;
    padding: 1em;
    background-color: ${theme.palette.primary.main};
    align-items: center;
    color: ${theme.palette.text.secondary};
`