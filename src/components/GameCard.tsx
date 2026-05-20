import {
  Card,
  CardBody,
  Heading,
  HStack,
  Image,
  Link,
  useColorModeValue,
} from "@chakra-ui/react";
import type { Game } from "../entities/Game";
import PlatformIconList from "./PlatformIconList";
import CriticScore from "./CriticScore";
import getCroppedImageUrl from "../services/image-url";
import Emoji from "./Emoji";
import { Link as RouterLink } from "react-router";

interface Props {
  game: Game;
}

const GameCard = ({ game }: Props) => {
  const cardBg = useColorModeValue("#f7f0ff", "gray.700");
  const cardShadow = useColorModeValue(
    "0 4px 20px rgba(139, 92, 246, 0.2)",
    "none",
  );
  const linkHover = useColorModeValue("purple.500", "green.500");

  return (
    <Card
      bg={cardBg}
      boxShadow={cardShadow}
      overflow="hidden"
      height="100%"
      display="flex"
      flexDirection="column"
    >
      <Image src={getCroppedImageUrl(game.background_image)}></Image>
      <CardBody flex="1">
        <HStack justifyContent={"space-between"} marginBottom={3}>
          <PlatformIconList
            platforms={game.parent_platforms?.map((p) => p.platform)}
          />
          <CriticScore score={game.metacritic} />
        </HStack>
        <HStack justifyContent={"space-between"} alignItems={"flex-end"}>
          <Heading fontSize={"2xl"}>
            <Link
              as={RouterLink}
              to={"/games/" + game.slug}
              _hover={{ color: linkHover }}
              transition="color 0.2s ease"
            >
              {game.name}
            </Link>
          </Heading>
          <Emoji rating={game.rating_top} />
        </HStack>
      </CardBody>
    </Card>
  );
};

export default GameCard;
