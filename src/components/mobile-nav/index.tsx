import {
    Avatar,
    Box,
    Flex,
    FlexProps,
    HStack,
    IconButton,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    VStack,
} from "@chakra-ui/react";
import { FiChevronsDown, FiMenu } from "react-icons/fi";
import { IMobileOpenProps } from "../../interfaces";
import { MenuItems } from "./../menu-items/index";

const ListMenuOptions = [
    { name: "Profile" },
    { name: "Settings" },
    { name: "Billigins" },
    { name: "Help" },
    { name: "Sign Out" },
];

export const MobileNav = ({ onOpen, ...rest }: IMobileOpenProps) => {
    return (
        <Flex
            ml={{ base: 0, md: 60 }}
            px={{ base: 4, md: 4 }}
            height="20"
            alignItems="center"
            bg={"rgb(10, 20, 30)"}
            justifyContent={{ base: "space-between", md: "flex-end" }}
            {...rest}
        >
            <IconButton
                display={{ base: "flex", md: "none" }}
                border="2px solid #fff"
                backgroundColor="transparent"
                onClick={onOpen}
                aria-label="open menu"
                _hover={{
                    border: "2px solid slateblue",
                    backgroundColor: "slateblue",
                }}
                icon={<FiMenu />}
            />
            <Text
                display={{ base: "flex", md: "none" }}
                fontSize="2xl"
                fontFamily="monospace"
                fontWeight="bold"
            >
                Reaction
            </Text>
            <HStack spacing={{ base: "0", md: "6" }}>
                <Flex alignItems={"center"}>
                    <Menu>
                        <MenuButton
                            py={2}
                            transition="all 0.3s"
                            _focus={{ boxShadow: "none" }}
                        >
                            <HStack>
                                <Avatar
                                    size={"sm"}
                                    src={
                                        "https://avatars.githubusercontent.com/u/101817225?s=400&u=70da7b56d510642c5dd4283ce565fce7f2af29f7&v=4"
                                    }
                                />
                                <VStack
                                    display={{ base: "none", md: "flex" }}
                                    alignItems="flex-start"
                                    spacing="1px"
                                    ml="2"
                                >
                                    <Text fontSize="sm" color={"#eaeaea"}>
                                        Alfredo Neto
                                    </Text>
                                    <Text fontSize="xs" color="gray.100">
                                        Admin
                                    </Text>
                                </VStack>
                                <Box display={{ base: "none", md: "flex" }}>
                                    <FiChevronsDown color={"#eaeaea"} />
                                </Box>
                            </HStack>
                        </MenuButton>
                        <MenuItems menuOptions={ListMenuOptions} />
                    </Menu>
                </Flex>
            </HStack>
        </Flex>
    );
};
