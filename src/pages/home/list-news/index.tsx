import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { useState } from "react";
import { useAPI } from "../../../../context/useApi";

interface ISource {
    id: null | boolean;
    name: string;
}

export interface INewArticle {
    author: string;
    content: string;
    description: string;
    publishedAt: Date;
    source: ISource;
    title: string;
    url: string;
    urlToImage: string;
}

const otherImage =
    "https://www.irossi.com.br/rossi/assets/images/illustration/man-searching-at.svg";

export const ListNews = () => {
    const { newsArticles } = useAPI();
    return (
        <Flex
            key={crypto.randomUUID()}
            flexWrap={"wrap"}
            justifyContent="center"
            gap={10}
            p={"2rem 1rem"}
        >
            {newsArticles.length ? (
                newsArticles.map((newsArticle) => (
                    <Link
                        href={newsArticle.url}
                        target="_blank"
                        display={"flex"}
                        textDecoration="none"
                        transition={"all 0.3s"}
                        _hover={{
                            transform: "scale(1.02)",
                        }}
                        flexDirection="column"
                        maxW={600}
                        border={"1px solid #ccc"}
                        borderRadius={10}
                        justifyContent="space-between"
                        gap={10}
                        p={7}
                    >
                        <Text fontSize={28} fontWeight={"500"}>
                            {newsArticle.title}
                        </Text>
                        <Image
                            w={"full"}
                            h={300}
                            backgroundSize={"contain"}
                            src={newsArticle.urlToImage ?? otherImage}
                            alt={newsArticle.url}
                        />
                        <Flex flexDirection="column" gap={5}>
                            <Text fontSize={20} fontWeight={"500"}>
                                {newsArticle.content}
                            </Text>
                            <Flex gap={3}>
                                <Text fontSize={17} fontWeight={"400"}>
                                    Author:
                                </Text>
                                <Text fontSize={17} fontWeight={"500"}>
                                    {newsArticle.author ?? "Desconhecido"}
                                </Text>
                            </Flex>
                        </Flex>
                    </Link>
                ))
            ) : (
                <Flex
                    alignItems={"center"}
                    justifyContent="center"
                    flexDir={"column"}
                    gap={10}
                    top={200}
                >
                    <Image w={600} h={400} src={otherImage} />
                </Flex>
            )}
        </Flex>
    );
};
