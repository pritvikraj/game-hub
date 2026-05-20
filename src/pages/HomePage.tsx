import { Box, Grid, GridItem, Hide, HStack, Show } from "@chakra-ui/react";
import GameGrid from "../components/GameGrid";
import GameHeading from "../components/GameHeading";
import GenreList from "../components/GenreList";
import GenreSelector from "../components/GenreSelector";
import PlatformSelector from "../components/PlatFormSelector";
import SortSelector from "../components/SortSelector";

const HomePage = () => {
  return (
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
          <HStack spacing={3} marginBottom={5} flexWrap="wrap">
            <Box flex={{ base: 1, md: "none" }}><PlatformSelector /></Box>
            <Box flex={{ base: 1, md: "none" }}><SortSelector /></Box>
            <Hide above="lg">
              <Box flex={{ base: 1, md: "none" }}><GenreSelector /></Box>
            </Hide>
          </HStack>
        </Box>

        <GameGrid></GameGrid>
      </GridItem>
    </Grid>
  );
};

export default HomePage;
