import { Button, Menu, MenuButton, MenuItem, MenuList } from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreSelector = () => {
  const { data, error } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = data?.results.find((g) => g.id === selectedGenreId);

  if (error) return null;
  return (
    <Menu placement="bottom">
      <MenuButton as={Button} rightIcon={<BsChevronDown />} width="100%">
        {selectedGenre?.name || "Genres"}
      </MenuButton>
      <MenuList maxH="250px" overflowY="auto">
        {data?.results.map((genre) => (
          <MenuItem onClick={() => setGenreId(genre.id)} key={genre.id}>
            {genre.name}
          </MenuItem>
        ))}
      </MenuList>
    </Menu>
  );
};

export default GenreSelector;
