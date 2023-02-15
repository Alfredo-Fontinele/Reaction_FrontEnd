import { Loading } from "../../../components/loading/index";
import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { useAPI } from "../../../../context/useApi";
import { useState } from "react";
import { NotFoundSearch } from "./../../../components/not-found-search/index";
import { CardNews } from "./../card-news/index";

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

export const ListNews = () => {
    const { newsArticles, isLoading } = useAPI();
    return (
        <Flex
            key={crypto.randomUUID()}
            gap={10}
            p={"3rem 1rem"}
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
                <NotFoundSearch />
            )}
        </Flex>
    );
};
