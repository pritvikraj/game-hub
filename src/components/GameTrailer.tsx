import { Box, Spinner, useColorModeValue } from "@chakra-ui/react";
import useTrailers from "../hooks/useTrailers";

interface Props {
  slug: string;
}

const GameTrailer = ({ slug }: Props) => {
  const { data, error, isLoading } = useTrailers(slug);
  const spinnerColor = useColorModeValue("purple.400", "green.400");

  if (isLoading)
    return (
      <Box display="flex" justifyContent="center" padding={10}>
        <Spinner size="xl" color={spinnerColor} thickness="3px" speed="0.7s" />
      </Box>
    );

  if (error) throw error;

  const first = data?.results.find((t) => t.data.max);

  if (!first) return null;

  return (
    <video
      poster={first.preview}
      src={first.data.max}
      controls
      style={{ width: "100%" }}
    />
  );
};

export default GameTrailer;
