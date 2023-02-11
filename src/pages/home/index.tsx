import { FormHome } from "./form-home/index.";
import { ListNews } from "./list-news/index";
import { MobileHome } from "./menu-home";
import { Drawer, DrawerContent, useDisclosure } from "@chakra-ui/react";

export const Home = () => {
    const { isOpen, onClose, onOpen } = useDisclosure();
    return (
        <>
            <FormHome
                onClose={() => onClose}
                display={{ base: "none", md: "block" }}
            />
            <Drawer
                autoFocus={false}
                isOpen={isOpen}
                placement="left"
                onClose={onClose}
                returnFocusOnClose={false}
                onOverlayClick={onClose}
                size="full"
            >
                <DrawerContent>
                    <FormHome onClose={onClose} />
                </DrawerContent>
            </Drawer>
            <MobileHome onOpen={onOpen} />
            <ListNews />
        </>
    );
};
