import { useColorMode } from "@chakra-ui/react";
import { Colors } from "../styles/colors/index";

export const setColorWithToggleTheme = () => {
    const { colorMode } = useColorMode();
    return colorMode === "light" ? Colors.menuItem : Colors.default;
};
