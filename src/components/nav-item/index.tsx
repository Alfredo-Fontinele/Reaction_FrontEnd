import { Flex, Link, Icon } from "@chakra-ui/react";
import { NavItemProps } from "../../interfaces";
import { Colors } from "../../styles/colors";

export const NavItem = ({ icon, children, ...rest }: NavItemProps) => {
    return (
        <Link
            href="#"
            style={{ textDecoration: "none" }}
            _focus={{ boxShadow: "none" }}
        >
            <Flex
                align="center"
                p="4"
                mx="4"
                borderRadius="lg"
                role="group"
                cursor="pointer"
                _hover={{
                    bg: Colors.slate,
                    color: Colors.default,
                }}
                {...rest}
            >
                {icon && (
                    <Icon
                        mr="4"
                        fontSize="16"
                        _groupHover={{
                            color: Colors.default,
                        }}
                        as={icon}
                    />
                )}
                {children}
            </Flex>
        </Link>
    );
};
