import { HStack, IconButton, Menu, MenuButton } from "@chakra-ui/react";
import { MenuItems } from "../../../components/menu-items";
import { FiMenu } from "react-icons/fi";

const ListMenuOptions = [{ name: "Login" }, { name: "Register" }];

export const MenuMobileHome = () => {
    return (
        <Menu>
            <MenuButton
                py={2}
                transition="all 0.3s"
                _focus={{ boxShadow: "none" }}
            >
                <HStack>
                    <IconButton
                        border="2px solid #fff"
                        backgroundColor="transparent"
                        aria-label="open menu"
                        _hover={{
                            border: "2px solid slateblue",
                            backgroundColor: "slateblue",
                        }}
                        icon={<FiMenu color="#eaeaea" />}
                    />
                </HStack>
            </MenuButton>
            <MenuItems menuOptions={ListMenuOptions} />
        </Menu>
    );
};
