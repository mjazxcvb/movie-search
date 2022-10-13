import { Button, Card, styled, Typography } from "@mui/material";
import theme from "../../theme";

export const MediaCardImage = styled("img")`
  height: 100px;
  width: 75px;
  objectfit: contain;
  padding-right: 0.5em;
`;

export const MediaTitle = styled(Typography)`
  font-weight: 500;
  font-size: 20px;
  color: ${theme.palette.success.main};
`;

export const MediaHeader = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`;

export const MediaContent = styled("div")`
  display: flex;
  flex-direction: column;
  flex: 1;
`;

export const MediaDescription = styled(Typography)`
  font-weight: 500;
  font-size: 12px;
  padding: 0.7em 0;
`;

export const MediaDetails = styled(Typography)`
  font-weight: 600;
  font-size: 16px;
  padding: 0.5em 0.5rem;
`;

export const MediaCardContainer = styled(Card)`
  margin: 0.3em 0;
  padding: 1em;
  display: flex;
  flex-direction: row;
  flex: 1;
  height: 130px;
  align-items: center;
`;

export const MediaRow = styled("div")`
  display: flex;
  flex-direction: row;
  align-items: center;
  width: 70%;
`;

export const MediaGenre = styled(Typography)`
  border-bottom: 1px solid ${theme.palette.primary.main};
  padding: 0.2em;
  margin: 0 0.2rem;
  font-size: 11px;
`;

export const MediaActionButton = styled(Button)`
  text-transform: capitalize;
`