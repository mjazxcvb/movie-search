import { HighlightOff } from "@mui/icons-material";
import { Button, TextField, Typography } from "@mui/material";
import { ChangeEventHandler, useState } from "react";
import useDebounce from "../../hooks/useDebounce";
import useSearchBar from "../../hooks/useSearchBar";
import MediaCard from "../MediaCard";
import { Loader, ResultsContainer } from "./SearchBar.styles";

const SearchBar = () => {
  const [value, setValue] = useState<string>("");
  const debouncedValue = useDebounce(value, 500);
  const { results, isLoading } = useSearchBar(debouncedValue);

  const handleOnChange: ChangeEventHandler<HTMLInputElement> = (e) => {
    setValue(e.target.value);
  };

  const handleResetQuery = () => {
    setValue("");
  };

  return (
    <div>
      <TextField
        value={value}
        placeholder="Search... "
        style={{ width: "100%" }}
        onChange={handleOnChange}
        InputProps={{
          endAdornment: (
            <Button onClick={handleResetQuery}>
              <HighlightOff />
            </Button>
          ),
        }}
      />

      <ResultsContainer>
        {isLoading ? (
          <Loader />
        ) : (
          <div>
            {results?.map((media, index) => (
              <MediaCard key={index} media={media} />
            ))}
          </div>
        )}

        {debouncedValue && !results && !isLoading && (
          <Typography
            paddingY={1}
          >{`No results found for ${debouncedValue}`}</Typography>
        )}
      </ResultsContainer>
    </div>
  );
};

export default SearchBar;
