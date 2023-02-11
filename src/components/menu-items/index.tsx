import { Menu, MenuItem, MenuList } from "@chakra-ui/react"
import { colorMenuItem } from "../../styles/global/style"

interface IItemMenuOptions {
    name: string
}

interface IListMenuOptions {
    menuOptions: IItemMenuOptions[]
}

const ListMenuOptions: IItemMenuOptions[] = [
    { name: 'Profile' },
    { name: 'Settings' },
    { name: 'Billigins' },
    { name: 'Help' },
    { name: 'Sign Out' }
]

export const MenuItems = ({ menuOptions }: IListMenuOptions) => {
    return (
        <MenuList
            bg={colorMenuItem} 
            border='none'
            p={2}
        >
        {
            menuOptions.map((option: any) => (
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
    )
}

