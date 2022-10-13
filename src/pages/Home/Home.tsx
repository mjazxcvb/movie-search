import { Alert, Stack, Typography } from "@mui/material";
import { useEffect } from "react";
import MainLayout from "../../components/MainLayout";
import MediaCard from "../../components/MediaCard";
import SearchBar from "../../components/SearchBar";
import { useAppContext } from "../../context/AppContext";
import { SET_ALERT_MESSAGE } from "../../store/actions";
import { NominationContainer } from "./Home.styles";

const Home = () => {
  const { state, dispatch } = useAppContext();

  useEffect(() => {
    const timer = setTimeout(() => {
      dispatch({ type: SET_ALERT_MESSAGE, payload: ''})
    }, 5000)

    return () => clearTimeout(timer)
  }, [state?.alertMessage, dispatch]);

  return (
    <MainLayout>
      <Stack paddingY={1}>
        {state?.alertMessage && <Alert color="info">{state?.alertMessage}</Alert>}
      </Stack>
      <SearchBar />
      <NominationContainer>
        <Typography>{`Nominations (${state?.nominations.length})`}</Typography>
        {state?.nominations?.map((nominee, index) => (
          <MediaCard key={index} media={nominee} nominations />
        ))}
      </NominationContainer>
    </MainLayout>
  );
};

export default Home;
