import { Button, Flex, Input, Text, useMediaQuery } from "@chakra-ui/react";
import { FormEvent, useEffect, useRef, useState } from "react";
import { FormComponent } from "../../../components/form";
import { IMobileCloseProps } from "../../../interfaces";
import { useAPI } from "../../../../context/useApi";
import { RiNewspaperFill } from "react-icons/ri";
import { GiHamburgerMenu } from "react-icons/gi";

export const FormHome = ({ onClose }: IMobileCloseProps) => {
    const [isSmallerThan1100px] = useMediaQuery("(min-width: 1100px)");
    const { searchNewsInApi, setNewsArticles } = useAPI();
    const text = useRef<HTMLInputElement | null>(null);

    const handleSubmit = async (e: FormEvent) => {
        e.preventDefault();
        const textSubmit = text.current!.value;
        const resultData = await searchNewsInApi(textSubmit);
        setNewsArticles(resultData);
    };

    useEffect(() => {
        setNewsArticles([]);
    }, [text]);

    return (
        <FormComponent functionSubmit={handleSubmit}>
            <Flex justifyContent={"center"} alignItems={"center"} gap={5}>
                <RiNewspaperFill
                    style={{
                        fontSize: 35,
                    }}
                />
                <Text fontWeight={"500"} fontSize={30}>
                    News Reaction
                </Text>
            </Flex>
            {isSmallerThan1100px ? (
                <>
                    <Flex
                        justifyContent={"center"}
                        alignItems={"center"}
                        gap={3}
                    >
                        <Input
                            ref={text}
                            type="text"
                            placeholder="Digite sua pesquisa"
                            required
                            minW={300}
                        />
                        <Button
                            p={"1rem 2rem"}
                            color={"#fff"}
                            backgroundColor={"rgb(29, 109, 238)"}
                            border={"3px solid transparent"}
                            type="submit"
                            _hover={{
                                color: "#000",
                                border: "3px solid #000",
                                backgroundColor: "#eaeaea",
                            }}
                        >
                            Pesquisar
                        </Button>
                        <Button
                            p={"1rem 2rem"}
                            color={"#fff"}
                            backgroundColor={"rgb(29, 109, 238)"}
                            border={"3px solid transparent"}
                            type="button"
                            _hover={{
                                color: "#000",
                                border: "3px solid #000",
                                backgroundColor: "#eaeaea",
                            }}
                        >
                            Login
                        </Button>
                        <Button
                            p={"1rem 2rem"}
                            color={"#fff"}
                            backgroundColor={"rgb(29, 109, 238)"}
                            border={"3px solid transparent"}
                            type="button"
                            _hover={{
                                color: "#000",
                                border: "3px solid #000",
                                backgroundColor: "#eaeaea",
                            }}
                        >
                            Register
                        </Button>
                    </Flex>
                </>
            ) : (
                <GiHamburgerMenu fontSize={40} color={"#fff"} />
            )}
        </FormComponent>
    );
};
