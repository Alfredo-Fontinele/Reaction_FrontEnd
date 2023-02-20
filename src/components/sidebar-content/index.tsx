import {
    FiHome,
    FiTrendingUp,
    FiCompass,
    FiStar,
    FiSettings,
    FiMenu,
    FiBell,
    FiChevronDown,
} from "react-icons/fi";
import { Box, BoxProps, CloseButton, Flex, Text } from "@chakra-ui/react";
import { IMobileCloseProps, ILinkItemProps } from "../../interfaces";
import { NavItem } from "../nav-item";
import { Colors } from "./../../styles/colors/index";

export const LinkItems: ILinkItemProps[] = [
    { name: "Home", icon: FiHome, href: "/" },
    { name: "Trending", icon: FiTrendingUp, href: "" },
    { name: "Explore", icon: FiCompass, href: "" },
    { name: "Favourites", icon: FiStar, href: "" },
    { name: "Settings", icon: FiSettings, href: "" },
];

export const SidebarContent = ({ onClose, ...rest }: IMobileCloseProps) => {
    return (
        <Box
            transition="3s ease"
            w={{ base: "full", md: 60 }}
            pos="fixed"
            h="full"
            bg={Colors.darkBlue}
            {...rest}
        >
            <Flex
                h="20"
                alignItems="center"
                mx="8"
                justifyContent="space-between"
            >
                <Text fontSize="2xl" color={Colors.default}>
                    Reaction
                </Text>
                <CloseButton
                    color={Colors.default}
                    display={{ base: "flex", md: "none" }}
                    onClick={onClose}
                />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem
                    href={link.href}
                    color="#fff"
                    key={link.name}
                    icon={link.icon}
                >
                    {link.name}
                </NavItem>
            ))}
        </Box>
    );
};
