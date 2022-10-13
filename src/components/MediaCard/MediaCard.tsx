import { FC } from "react";
import { useAppContext } from "../../context/AppContext";
import { IMedia } from "../../interfaces/Media.interface";
import { ADD_NOMINATION, REMOVE_NOMINATION, SET_ALERT_MESSAGE } from "../../store/actions";
import useNominations from "../../hooks/useNominations";
import {
  MediaCardContainer,
  MediaCardImage,
  MediaContent,
  MediaHeader,
  MediaTitle,
  MediaDescription,
  MediaDetails,
  MediaGenre,
  MediaRow,
  MediaActionButton,
} from "./MediaCard.styles";
import { MAX_NOMINATION } from "../../constants/media";

export interface IMediaCardProps {
  media: IMedia;
  nominations?: boolean;
}

const MediaCard: FC<IMediaCardProps> = ({ media, nominations = false }) => {
  const {
    Title: title,
    Poster: image,
    Plot: plot,
    Year: year,
    Genre: genres,
  } = media;

  const { state, dispatch } = useAppContext();
  const { isNominated } = useNominations();

  const handleNominate = (nomination: IMedia) => {
    const nominees = state?.nominations?.length || 0

    if (nominees < MAX_NOMINATION) {
      dispatch({ type: ADD_NOMINATION, payload: nomination });

      if (nominees === 4) {
        dispatch({ type: SET_ALERT_MESSAGE, payload: `You have selected your ${MAX_NOMINATION} nominations!` });
      }
    } else if (nominees === MAX_NOMINATION) {
      dispatch({ type: SET_ALERT_MESSAGE, payload: `You can only select ${MAX_NOMINATION} nominations. Please remove one to add more.` });
    } 
  };

  const handleRemove = (media: IMedia) => {
    dispatch({ type: REMOVE_NOMINATION, payload: media });
  };

  return (
    <MediaCardContainer>
      {image && image !== "N/A" && (
        <MediaCardImage src={image} alt={`${title}'s poster`} />
      )}
      <MediaContent>
        <MediaHeader>
          <MediaRow>
            <MediaTitle>{title} </MediaTitle>
            <MediaDetails>{year}</MediaDetails>
          </MediaRow>
          {nominations ? (
            <MediaActionButton
              variant="outlined"
              onClick={() => handleRemove(media)}
            >
              Remove
            </MediaActionButton>
          ) : (
            <MediaActionButton
              disabled={isNominated(media)}
              variant="contained"
              onClick={() => handleNominate(media)}
            >
              Nominate
            </MediaActionButton>
          )}
        </MediaHeader>
        <MediaDescription>{plot}</MediaDescription>
        <MediaRow>
          {genres?.split(",").map((genre, index) => (
            <MediaGenre key={index}>{genre}</MediaGenre>
          ))}
        </MediaRow>
      </MediaContent>
    </MediaCardContainer>
  );
};

export default MediaCard;
