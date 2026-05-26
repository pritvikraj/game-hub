import {
  Box,
  Drawer,
  DrawerBody,
  DrawerContent,
  DrawerOverlay,
  Grid,
  GridItem,
  HStack,
  IconButton,
  Show,
  useColorModeValue,
  useDisclosure,
} from "@chakra-ui/react";
import { BsChevronRight, BsChevronLeft } from "react-icons/bs";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import PlatformSelector from "../components/PlatFormSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  const { isOpen, onToggle, onClose } = useDisclosure();
  const btnBg = useColorModeValue("purple.800", "green.800");
  const btnHoverBg = useColorModeValue("purple.900", "green.900");

  return (
    <>
      <Box
        display={{ base: "flex", lg: "none" }}
        position="fixed"
        left={isOpen ? "220px" : 0}
        top="50%"
        transform="translateY(-50%)"
        zIndex={1500}
        transition="left 0.3s ease"
      >
        <IconButton
          aria-label="Toggle genres"
          icon={isOpen ? <BsChevronLeft /> : <BsChevronRight />}
          onClick={onToggle}
          size="xs"
          h="28px"
          w="18px"
          minW="unset"
          borderLeftRadius={0}
          bg={btnBg}
          _hover={{ bg: btnHoverBg }}
          opacity={isOpen ? 1 : 0.75}
          transition="opacity 0.2s"
        />
      </Box>

      <Drawer isOpen={isOpen} onClose={onClose} placement="left">
        <DrawerOverlay />
        <DrawerContent maxW="220px">
          <DrawerBody paddingX={4} paddingTop={5}>
            <GenreList />
          </DrawerBody>
        </DrawerContent>
      </Drawer>

      <Grid
        templateAreas={{
          base: `"main"`,
          lg: `"aside main"`,
        }}
        templateColumns={{
          base: "1fr",
          lg: "200px 1fr",
        }}
      >
        <Show above="lg">
          <GridItem area="aside" paddingX={5} as="aside">
            <GenreList />
          </GridItem>
        </Show>

        <GridItem area="main" as="main">
          <Box paddingX={3}>
            <GameHeading />
            <HStack spacing={3} marginBottom={5}>
              <Box flex={{ base: 1, md: "none" }} minW={0}>
                <PlatformSelector />
              </Box>
              <Box flex={{ base: 1, md: "none" }} minW={0}>
                <SortSelector />
              </Box>
            </HStack>
          </Box>

          <GameGrid />
        </GridItem>
      </Grid>
    </>
  );
};

export default HomePage;
