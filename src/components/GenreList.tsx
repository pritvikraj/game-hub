import {
  Button,
  Heading,
  HStack,
  Image,
  List,
  ListItem,
  useColorModeValue,
} from "@chakra-ui/react";
import useGenres from "../hooks/useGenres";
import getCroppedImageUrl from "../services/image-url";
import GenreSkeleton from "./GenreSkeleton";
import useGameQueryStore from "../store";

// interface Props {
//   onSelectGenre: (genreId: number) => void;
//   selectedGenreId?: number;
// }

const GenreList = () => {
  const { data, isLoading, error } = useGenres();
  const textColor = useColorModeValue("gray.800", "gray.300");
  const setSelectedGenreId = useGameQueryStore((s) => s.setGenreId);
  const selectedGenreId = useGameQueryStore((s) => s.gameQuery.genreId);

  if (error) return null;

  const skeletons = [1, 2, 3, 4];

  return (
    <>
      <Heading fontSize={"2xl"} marginBottom={3} color={textColor}>
        Genres
      </Heading>
      <List>
        {isLoading &&
          skeletons.map((skeleton) => <GenreSkeleton key={skeleton} />)}

        {data?.results.map((genre) => (
          <ListItem key={genre.id} paddingY={"5px"}>
            <HStack>
              <Image
                boxSize={"32px"}
                borderRadius={8}
                objectFit={"cover"}
                src={getCroppedImageUrl(genre.image_background)}
              />
              <Button
                color={textColor}
                fontWeight={genre.id === selectedGenreId ? "bold" : "normal"}
                onClick={() => setSelectedGenreId(genre.id)}
                variant={"link"}
                fontSize={"lg"}
                whiteSpace={"normal"}
                textAlign={"left"}
              >
                {genre.name}
              </Button>
            </HStack>
          </ListItem>
        ))}
      </List>
    </>
  );
};

export default GenreList;
