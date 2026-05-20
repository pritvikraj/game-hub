import { Box, Heading, useColorModeValue } from "@chakra-ui/react";
import type { ReactNode } from "react";

interface Props {
  term: string;
  children: ReactNode;
}

// const DefinitionTerm = ({ term, children }: Props) => {
//   const color = useColorModeValue("gray.800", "gray.300");
//   return (
//     <Box>
//       <Text color={color} fontWeight="bold">
//         {children}
//       </Text>
//     </Box>
//   );
// };

const DefinitionItem = ({ term, children }: Props) => {
  const color = useColorModeValue("gray.800", "gray.300");
  return (
    <Box marginY={5}>
      <Heading as="dt" fontSize="md" color={color}>
        {term}
      </Heading>
      <dd>{children}</dd>
    </Box>
  );
};
export default DefinitionItem;
