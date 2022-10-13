import { LinearProgress, styled } from "@mui/material";
import theme from "../../theme";

export const Loader = styled(LinearProgress)`
  height: 20px;
  margin: 1em 0;
`;

export const ResultsContainer = styled("div")`
  display: flex;
  flex-direction: column;
  z-index: 999;
  position: absolute;
  width: 70%;
  background-color: ${theme.palette.text.secondary};
  box-shadow: 7px 7px 5px -5px rgba(0,0,0,0.75);
  padding-bottom: 10px;
`;
