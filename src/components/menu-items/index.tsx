import { Menu, MenuItem, MenuList } from "@chakra-ui/react";
import { IItemMenuOptions } from "../../interfaces";
import { Link } from "react-router-dom";
import { Colors } from "../../styles/colors";

interface IListMenuOptions {
    menuOptions: IItemMenuOptions[];
}

export const MenuItems = ({ menuOptions }: IListMenuOptions) => {
    return (
        <MenuList bg={Colors.menuItem} border="none" p={2}>
            {menuOptions.map((option) => (
                <Link to={option.href}>
                    <MenuItem
                        bg={Colors.menuItem}
                        p={3}
                        my={1}
                        borderRadius="lg"
                        role="group"
                        cursor="pointer"
                        color={Colors.default}
                        _hover={{
                            bg: "mediumslateblue",
                        }}
                    >
                        {option.name}
                    </MenuItem>
                </Link>
            ))}
        </MenuList>
    );
};
