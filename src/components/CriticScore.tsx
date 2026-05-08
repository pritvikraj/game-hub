import { Badge, useColorModeValue } from "@chakra-ui/react";

interface Props {
  score: number;
}

const CriticScore = ({ score }: Props) => {
  const color = score > 75 ? "green" : score > 60 ? "yellow" : "red";

  const lightBg = score > 75 ? "#c084fc" : score > 60 ? "#f472b6" : "#f87171";
  const badgeBg = useColorModeValue(lightBg, undefined);

  return (
    <Badge
      colorScheme={color}
      bg={badgeBg}
      color={badgeBg ? "white" : undefined}
      fontSize={"10px"}
      padding={2}
      borderRadius={"4px"}
    >
      {score}
    </Badge>
  );
};

export default CriticScore;
