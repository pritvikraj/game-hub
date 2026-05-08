import { Heading } from "@chakra-ui/react";
import type { GameQuery } from "../App";
import usePlatforms from "../hooks/usePlatforms";
import useGenres from "../hooks/useGenres";

interface Props {
  gameQuery: GameQuery;
}

const GameHeading = ({ gameQuery }: Props) => {
  const { data: platforms } = usePlatforms();
  const { data: genres } = useGenres();
  const selectedPlatform = platforms?.results.find(
    (p) => p.id === gameQuery.platformId,
  );
  const selectedGenre = genres?.results.find((g) => g.id === gameQuery.genreId);

  const heading = ` ${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading marginY={5} fontSize={"5xl"} as="h1">
      {heading}
    </Heading>
  );
};

export default GameHeading;
