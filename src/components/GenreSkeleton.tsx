import { HStack, ListItem, Skeleton, SkeletonText } from "@chakra-ui/react";

const GenreSkeleton = () => {
  return (
    <>
      <ListItem paddingY={"5px"}>
        <HStack>
          <Skeleton boxSize={"32px"} borderRadius={8} />
          <SkeletonText noOfLines={1} width={"100%"}></SkeletonText>
        </HStack>
      </ListItem>
    </>
  );
};

export default GenreSkeleton;
