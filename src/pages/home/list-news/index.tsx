import { IconSvg } from "../../../components/icon-svg/index";
import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { useAPINews } from "../../../context/useApiNews";
import { CardNews } from "./../card-news/index";
import { useState } from "react";
import svg from "../../../../src/assets/man-searching-at.svg";

interface ISource {
    id: null | boolean;
    name: string;
}

// export interface INewArticle {
//     author: string;
//     content: string;
//     description: string;
//     publishedAt: Date;
//     source: ISource;
//     title: string;
//     url: string;
//     urlToImage: string;
// }

export interface INewArticle {
    id: string;
    author: string;
    content: string;
    date: string;
    imageUrl: string;
    readMoreUrl: string;
    time: string;
    title: string;
    url: string;
}

export const ListNews = () => {
    const { newsArticles, isLoading } = useAPINews();
    return (
        <Flex
            key={crypto.randomUUID()}
            gap={10}
            py={{ base: 10 }}
            justifyContent="center"
            flexWrap={"wrap"}
        >
            {!!newsArticles.length ? (
                newsArticles.map((newsArticle) => (
                    <CardNews
                        key={crypto.randomUUID()}
                        newsArticle={newsArticle}
                    />
                ))
            ) : (
                <IconSvg w={600} h={400} icon={svg} />
            )}
        </Flex>
    );
};
