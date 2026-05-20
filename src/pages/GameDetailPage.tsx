import { Box, Heading, Spinner, useColorModeValue } from "@chakra-ui/react";
import { useParams } from "react-router";
import ExpandableText from "../components/ExpandableText";
import useGame from "../hooks/useGame";
import GameAttributes from "../components/GameAttributes";
import GameTrailer from "../components/GameTrailer";

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
    <Box as="main" padding={2}>
      <Heading marginBottom={2}>{game.name}</Heading>
      <ExpandableText>
        {game.description.replace(/<[^>]+>/g, "")}
      </ExpandableText>
      <GameAttributes game={game} />
      <GameTrailer slug={slug!} />
    </Box>
  );
};

export default GameDetailPage;
