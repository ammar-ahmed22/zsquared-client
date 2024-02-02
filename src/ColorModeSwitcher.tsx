import * as React from "react";
import {
  useColorMode,
  useColorModeValue,
  IconButton,
  IconButtonProps,
} from "@chakra-ui/react";
import { FaMoon, FaSun } from "react-icons/fa";

type ColorModeSwitcherProps = Omit<
  IconButtonProps,
  "aria-label"
>;

export const ColorModeSwitcher: React.FC<
  ColorModeSwitcherProps
> = (props) => {
  const { toggleColorMode } = useColorMode();
  const text = useColorModeValue("dark", "light");
  const SwitchIcon = useColorModeValue(FaMoon, FaSun);

  return (
    <IconButton
      size={{ base: "sm", md: "md" }}
      fontSize={{ base: "sm", md: "md" }}
      variant="ghost"
      colorScheme={useColorModeValue(
        "brand.dark",
        "brand.light",
      )}
      marginLeft="2"
      onClick={toggleColorMode}
      icon={<SwitchIcon />}
      aria-label={`Switch to ${text} mode`}
      {...props}
    />
  );
};
