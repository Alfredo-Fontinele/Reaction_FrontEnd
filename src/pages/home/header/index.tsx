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
    VStack,
} from "@chakra-ui/react";
import { FormEvent, useEffect, useRef } from "react";
import { RiNewspaperFill } from "react-icons/ri";
import { FiChevronsDown, FiMenu } from "react-icons/fi";
import { AiOutlineSearch } from "react-icons/ai";
import { useAPI } from "../../../../context/useApi";
import { FormComponent } from "../../../components/form";
import { IMobileOpenProps } from "../../../interfaces";
import { MenuItems } from "./../../../components/menu-items/index";
import { MenuMobileHome } from "../menu-mobile-home";
import { FormHome } from "./../form-home/index";

export const Header = ({ onOpen, ...rest }: IMobileOpenProps) => {
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
            bg={"rgb(10, 20, 30)"}
            justifyContent="center"
            alignItems="center"
        >
            <Flex
                justifyContent={"space-between"}
                alignItems={"center"}
                gap={5}
                w={"full"}
                maxW={2000}
                p={"0 1rem"}
            >
                <Flex gap={3}>
                    <RiNewspaperFill
                        style={{
                            fontSize: 35,
                            color: "#eaeaea",
                        }}
                    />
                    <Text
                        display={{ base: "flex" }}
                        fontSize="2xl"
                        fontWeight={"500"}
                        color="#eaeaea"
                    >
                        News Reaction
                    </Text>
                </Flex>
                <Flex alignItems={"center"} justifyContent="center" gap={2}>
                    <FormHome base="none" md="flex" />
                    <MenuMobileHome />
                </Flex>
            </Flex>
        </Flex>
    );
};
