import {
    Avatar,
    Box,
    Button,
    Flex,
    FlexProps,
    FormControl,
    HStack,
    IconButton,
    Input,
    Menu,
    MenuButton,
    MenuItem,
    MenuList,
    Text,
    useColorMode,
    useDisclosure,
    VStack,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useRef } from "react";
import { RiNewspaperFill } from "react-icons/ri";
import { FiChevronsDown, FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { FormComponent } from "../../../components/form";
import { IMobileOpenProps } from "../../../interfaces";
import { MenuItems } from "./../../../components/menu-items/index";
import { MenuMobileHome } from "../menu-mobile-home";
import { FormHome } from "./../form-home/index";
import { useAPI } from "../../../context/useApi";
import { Colors } from "./../../../styles/colors/index";
import { MoonIcon, SunIcon } from "@chakra-ui/icons";
import { ThemeIcon } from "./../../../components/theme-icon/index";
import { TitleHeader } from "./../title-header/index";

type TypeHeader = "header";

interface IHeader {
    type?: TypeHeader;
}

export const Header = ({ type }: IHeader) => {
    const { onOpen } = useDisclosure();
    const { searchNewsInApi, setNewsArticles } = useAPI();
    const text = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async () => {
        const textSubmit = text.current!.value;
        const resultData = await searchNewsInApi(textSubmit);
        setNewsArticles(resultData);
    };

    useEffect(() => {
        setNewsArticles([]);
    }, [text]);

    return (
        <Flex
            w={"full"}
            bg={Colors.menuItem}
            justifyContent="center"
            alignItems="center"
            gap={10}
            p={"0 1rem"}
        >
            <Flex
                alignItems={"center"}
                justifyContent="flex-start"
                w={"full"}
                gap={10}
            >
                <TitleHeader title="News Reaction" />
                {type === "header" && <FormHome base="none" md="flex" />}
            </Flex>
            <Flex
                alignItems={"center"}
                w={"full"}
                justifyContent="flex-end"
                gap={4}
            >
                <ThemeIcon />
                <MenuMobileHome />
            </Flex>
        </Flex>
    );
};
