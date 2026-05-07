import logo from "../assets/logo.webp";
import { HStack, Image } from "@chakra-ui/react";
import ColorModeSwitch from "./ColorModeSwitch";
import SearchInput from "./SearchInput";

interface Props {
  onSearch: (searchText: string) => void;
  onLogoClick: () => void;
}

const NavBar = ({ onSearch, onLogoClick }: Props) => {
  return (
    <HStack padding="10px">
      <Image
        src={logo}
        boxSize="60px"
        onClick={onLogoClick}
        cursor="pointer"
        _active={{ transform: "scale(0.9)" }}
        transition="transform 0.1s ease"
      />
      <SearchInput onSearch={onSearch} />
      <ColorModeSwitch />
    </HStack>
  );
};

export default NavBar;
