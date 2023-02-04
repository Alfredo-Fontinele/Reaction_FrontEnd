import { useMediaQuery, Flex, Text, Image, Input, InputGroup, InputLeftElement } from "@chakra-ui/react"
import { SearchInput } from './../search-input/index'
import { MenuIcons } from './../menu-icons/index'
import { MenuUser } from './../menu-user/index'
import { MenuHamburguerIcon } from "../icons"

export const Header = () => {
    const [isSmallerThan950px] = useMediaQuery('(min-width: 950px)')
    const [isSmallerThan820px] = useMediaQuery('(min-width: 820px)')

    return (
        <Flex
            w={'full'}
            p={'10px 1rem'}
            gap={3}
            maxH={'60px'}
            bgColor='#18191a'
            justifyContent={'space-between'}
            alignItems={'center'}
        >
            <SearchInput/>
            {
                isSmallerThan950px ? (
                    <>
                        <MenuIcons/>
                        <MenuUser/>
                    </>
                ) :
                isSmallerThan820px ? (
                    <MenuIcons/>
                ) : (
                    <MenuHamburguerIcon/>
                )
            }
        </Flex>
    )
}
