import { Box } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  children: ReactNode;
}

const GenreContainer = ({ children }: Props) => {
  return (
    <Box width={"100%"} borderRadius={10} overflow={"hidden"}>
      {children}
    </Box>
  );
};

export default GenreContainer;
