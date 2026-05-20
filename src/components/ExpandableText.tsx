import { useState } from "react";
import { Button, Text, useColorModeValue } from "@chakra-ui/react";

interface Props {
  children: string;
}

const ExpandableText = ({ children }: Props) => {
  const [isExpanded, setIsExpanded] = useState(false);
  const btnBg = useColorModeValue("purple.600", "green.600");
  const btnHoverBg = useColorModeValue("purple.700", "green.700");
  const limit = 300;

  if (!children) return null;

  if (children.length <= limit) return <Text>{children}</Text>;

  const summary = children.substring(0, limit) + "...";

  return (
    <Text>
      {isExpanded ? children : summary}
      <Button
        variant="link"
        size="sm"
        marginStart={1}
        px={2}
        py={1}
        bg={btnBg}
        _hover={{ bg: btnHoverBg }}
        onClick={() => setIsExpanded(!isExpanded)}
      >
        {isExpanded ? "Less" : "More"}
      </Button>
    </Text>
  );
};

export default ExpandableText;
