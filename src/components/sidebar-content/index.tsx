import { Box, BoxProps, CloseButton, Flex, Text } from "@chakra-ui/react"
import { LinkItems } from "../header"
import { NavItem } from "../nav-item"

interface SidebarProps extends BoxProps {
    onClose: () => void
}
  
export const SidebarContent = ({ onClose, ...rest }: SidebarProps) => {
    return (
        <Box
            transition="3s ease"
            w={{ base: 'full', md: 60 }}
            pos="fixed"
            h="full"
            bg={'rgb(20, 40, 70)'}
            {...rest}
        >
            <Flex h="20" alignItems="center" mx="8" justifyContent="space-between">
                <Text fontSize="2xl" fontFamily="monospace" fontWeight="bold" color='#fff'>
                    Logo
                </Text>
                <CloseButton color='#fff' display={{ base: 'flex', md: 'none' }} onClick={onClose} />
            </Flex>
            {LinkItems.map((link) => (
                <NavItem color='#fff' key={link.name} icon={link.icon}>
                    {link.name}
                </NavItem>
            ))}
        </Box>
    )
}