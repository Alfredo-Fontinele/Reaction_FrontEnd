import { Box, BoxProps, CloseButton, Flex, Text } from "@chakra-ui/react";
import { IMobileCloseProps } from "../../interfaces";
import { LinkItems } from "../../pages/dashboard";
import { NavItem } from "../nav-item";
import { Colors } from "./../../styles/colors/index";

export const SidebarContent = ({ onClose, ...rest }: IMobileCloseProps) => {
    return (
        <Box
            transition="3s ease"
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            bg={Colors.menuItem}
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text
                    fontSize="2xl"
                    fontFamily="monospace"
                    fontWeight="bold"
                    color="#fff"
                >
                    Reaction
                </Text>
                <CloseButton
                    color="#fff"
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem color="#fff" key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};
