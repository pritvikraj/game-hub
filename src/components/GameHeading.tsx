import { Heading } from "@chakra-ui/react";
import useGenre from "../hooks/useGenre";
import usePlatform from "../hooks/usePlatform";
import useGameQueryStore from "../store";

const GameHeading = () => {
  const genreId = useGameQueryStore((s) => s.gameQuery.genreId);
  const selectedGenre = useGenre(genreId);

  const platformId = useGameQueryStore((s) => s.gameQuery.platformId);
  const selectedPlatform = usePlatform(platformId);

  const heading = ` ${selectedPlatform?.name || ""} ${
    selectedGenre?.name || ""
  } Games`;

  return (
    <Heading
      marginY={{ base: 3, md: 5 }}
      fontSize={{ base: "3xl", md: "4xl", lg: "5xl" }}
      as="h1"
    >
      {heading}
    </Heading>
  );
};

export default GameHeading;
