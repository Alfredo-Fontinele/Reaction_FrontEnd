import { Avatar, Box, Flex, FlexProps, HStack, IconButton, Menu, MenuButton, MenuDivider, MenuItem , MenuList, Text, useColorModeValue, VStack } from "@chakra-ui/react"
import { FiBell, FiChevronsDown, FiMenu } from "react-icons/fi"

interface MobileProps extends FlexProps {
  onOpen: () => void
}

const colorMenuItem = 'rgb(20, 40, 70)'

interface IItemMenuOptions {
  name: string
}

const ListMenuOptions: IItemMenuOptions[] = [
  { name: 'Profile' },
  { name: 'Settings' },
  { name: 'Billigins' },
  { name: 'Help' },
  { name: 'Sign Out' }
]
  
export const MobileNav = ({ onOpen, ...rest }: MobileProps) => {
  return (
    <Flex
      ml={{ base: 0, md: 60 }}
      px={{ base: 4, md: 4 }}
      height="20"
      alignItems="center"
      bg={'rgb(10, 20, 30)'}
      justifyContent={{ base: 'space-between', md: 'flex-end' }}
      {...rest}
    >
      <IconButton
        display={{ base: 'flex', md: 'none' }}
        border='2px solid #fff'
        backgroundColor='transparent'
        onClick={onOpen}
        aria-label="open menu"
        _hover={{
          border: '2px solid slateblue',
          backgroundColor: 'slateblue'
        }}
        icon={<FiMenu />}
      />
      <Text
        display={{ base: 'flex', md: 'none' }}
        fontSize="2xl"
        fontFamily="monospace"
        fontWeight="bold">
        Reaction
      </Text>
      <HStack spacing={{ base: '0', md: '6' }}>
        <Flex alignItems={'center'}>
          <Menu>
            <MenuButton
              py={2}
              transition="all 0.3s"
              _focus={{ boxShadow: 'none' }}>
              <HStack>
                <Avatar
                  size={'sm'}
                  src={
                    'https://images.unsplash.com/photo-1619946794135-5bc917a27793?ixlib=rb-0.3.5&q=80&fm=jpg&crop=faces&fit=crop&h=200&w=200&s=b616b2c5b373a80ffc9636ba24f7a4a9'
                  }
                />
                <VStack
                  display={{ base: 'none', md: 'flex' }}
                  alignItems="flex-start"
                  spacing="1px"
                  ml="2"
                >
                  <Text fontSize="sm">Justina Clark</Text>
                  <Text fontSize="xs" color="gray.100">
                    Admin
                  </Text>
                </VStack>
                <Box display={{ base: 'none', md: 'flex' }}>
                  <FiChevronsDown />
                </Box>
              </HStack>
            </MenuButton>
            <MenuList
              bg={colorMenuItem} 
              border='none'
              p={2}
            >
              {
                ListMenuOptions.map(option => (
                  <MenuItem 
                    bg={colorMenuItem}
                    p={3}
                    my={1}
                    borderRadius="lg"
                    role="group"
                    cursor="pointer"
                    _hover={{
                      bg: 'mediumslateblue',
                      color: 'white',
                    }}
                  >
                    {option.name}
                  </MenuItem>
                ))
              }
            </MenuList>
          </Menu>
        </Flex>
      </HStack>
    </Flex>
  )
}
