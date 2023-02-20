import { Menu, MenuItem, MenuList } from "@chakra-ui/react";
import { IItemMenuOptions } from "../../interfaces";
import { Colors } from "../../styles/colors";
import { Link } from "react-router-dom";

interface IListMenuOptions {
    menuOptions: IItemMenuOptions[];
}

export const MenuItems = ({ menuOptions }: IListMenuOptions) => {
    return (
        <MenuList bg={Colors.darkBlue} border="none" p={2} zIndex={999}>
            {menuOptions.map((option) => (
                <Link to={option.href} key={crypto.randomUUID()}>
                    <MenuItem
                        bg={Colors.darkBlue}
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
