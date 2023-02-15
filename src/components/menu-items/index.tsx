import { Menu, MenuItem, MenuList } from "@chakra-ui/react";
import { colorMenuItem } from "../../styles/global/style";
import { IItemMenuOptions } from "../../interfaces";
import { Link } from "react-router-dom";

interface IListMenuOptions {
    menuOptions: IItemMenuOptions[];
}

export const MenuItems = ({ menuOptions }: IListMenuOptions) => {
    return (
        <MenuList bg={colorMenuItem} border="none" p={2}>
            {menuOptions.map((option) => (
                <Link to={option.href}>
                    <MenuItem
                        bg={colorMenuItem}
                        p={3}
                        my={1}
                        borderRadius="lg"
                        role="group"
                        cursor="pointer"
                        color="#eaeaea"
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
