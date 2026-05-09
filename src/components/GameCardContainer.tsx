import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GameCardContainer = ({ children }: Props) => {
  return (
    <Box
      width={"100%"}
      height={"100%"}
      borderRadius={10}
      transition="transform 0.2s ease"
      _hover={{ transform: "scale(1.03)" }}
    >
      {children}
    </Box>
  );
};

export default GameCardContainer;
