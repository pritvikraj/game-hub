import { Box, Heading, Spinner, useColorModeValue } from "@chakra-ui/react";
import { useParams } from "react-router";
import useGame from "../hooks/useGame";
import ExpandableText from "../components/ExpandableText";

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
    <>
      <Box as="main" padding={2}>
        <Heading marginBottom={2}>{game.name}</Heading>
        <ExpandableText>
          {game.description.replace(/<[^>]+>/g, "")}
        </ExpandableText>
      </Box>
    </>
  );
};

export default GameDetailPage;
