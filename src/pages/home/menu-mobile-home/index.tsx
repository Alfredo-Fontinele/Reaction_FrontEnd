import {
    HStack,
    IconButton,
    Menu,
    MenuButton,
    useColorMode,
} from "@chakra-ui/react";
import { MenuItems } from "../../../components/menu-items";
import { IItemMenuOptions } from "../../../interfaces";
import { FiMenu } from "react-icons/fi";
import { Colors } from "../../../styles/colors";

const ListMenuOptions: IItemMenuOptions[] = [
    { name: "Login", href: "/login" },
    { name: "Register", href: "/register" },
    { name: "Home", href: "/" },
];

export const MenuMobileHome = () => {
    const { colorMode } = useColorMode();
    const currentColorMenu = () => {
        return colorMode === "light" ? Colors.main : Colors.slate;
    };
    return (
        <Menu>
            <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
            >
                <HStack>
                    <IconButton
                        border={`2px solid ${currentColorMenu()}`}
                        backgroundColor="transparent"
                        aria-label="open menu"
                        icon={<FiMenu color={currentColorMenu()} />}
                    />
                </HStack>
            </MenuButton>
            <MenuItems menuOptions={ListMenuOptions} />
        </Menu>
    );
};
