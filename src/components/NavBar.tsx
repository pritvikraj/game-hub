import logo from "../assets/logo.webp";
import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";
import useGameQueryStore from "../store";

const NavBar = () => {
  const resetQuery = useGameQueryStore((s) => s.resetQuery);

  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        onClick={() => resetQuery()}
        cursor="pointer"
        _active={{ transform: "scale(0.9)" }}
        transition="transform 0.1s ease"
      />
      <SearchInput />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
