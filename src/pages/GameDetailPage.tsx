import {
  Box,
  GridItem,
  Heading,
  SimpleGrid,
  Spinner,
  useColorModeValue,
} from "@chakra-ui/react";
import { useParams } from "react-router";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";
import GameScreenshots from "../components/GameScreenshots";

const GameDetailPage = () => {
  const { slug } = useParams();
  const { data: game, isLoading, error } = useGame(slug);
  const spinnerColor = useColorModeValue("purple.400", "green.400");

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" padding={10}>
        <Spinner size="xl" color={spinnerColor} thickness="3px" speed="0.7s" />
      </Box>
    );

  if (error || !game) throw error;

  return (
    <SimpleGrid as="main" padding={2} columns={{ base: 1, md: 2 }}>
      <GridItem>
        <Heading marginBottom={2}>{game.name}</Heading>
        <ExpandableText>
          {game.description.replace(/<[^>]+>/g, "").replace(/&#\d+;/g, "")}
        </ExpandableText>
        <GameAttributes game={game} />
      </GridItem>

      <GridItem>
        <GameTrailer slug={slug!} />
        <GameScreenshots gameId={game.id} />
      </GridItem>
    </SimpleGrid>
  );
};

export default GameDetailPage;
