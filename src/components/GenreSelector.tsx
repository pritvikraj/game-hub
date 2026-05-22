import {
  Button,
  Drawer,
  DrawerBody,
  DrawerCloseButton,
  DrawerContent,
  DrawerHeader,
  DrawerOverlay,
  List,
  ListItem,
  useDisclosure,
} from "@chakra-ui/react";
import { BsChevronDown } from "react-icons/bs";
import useGenres from "../hooks/useGenres";
import useGameQueryStore from "../store";

const GenreSelector = () => {
  const { isOpen, onOpen, onClose } = useDisclosure();
  const { data, error } = useGenres();
  const setGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = data?.results.find((g) => g.id === selectedGenreId);

  if (error) return null;

  return (
    <>
      <Button rightIcon={<BsChevronDown />} onClick={onOpen}>
        {selectedGenre?.name || "Genres"}
      </Button>
      <Drawer isOpen={isOpen} onClose={onClose} placement="bottom">
        <DrawerOverlay />
        <DrawerContent maxH="60vh">
          <DrawerCloseButton />
          <DrawerHeader>Genres</DrawerHeader>
          <DrawerBody overflowY="auto">
            <List>
              {data?.results.map((genre) => (
                <ListItem
                  key={genre.id}
                  paddingY={3}
                  cursor="pointer"
                  fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                  onClick={() => { setGenreId(genre.id); onClose(); }}
                >
                  {genre.name}
                </ListItem>
              ))}
            </List>
          </DrawerBody>
        </DrawerContent>
      </Drawer>
    </>
  );
};

export default GenreSelector;
