import { Flex, Image, Link, Text } from "@chakra-ui/react";
import { INewArticle } from "./../list-news/index";
import otherImage from "../../../../src/assets/man-searching-at.svg";
import { Colors } from "../../../styles/colors";

interface ICardNewsProps {
    newsArticle: INewArticle;
}

export const CardNews = ({ newsArticle }: ICardNewsProps) => {
    return (
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
            w="full"
            maxW={400}
            border={`1px solid ${Colors.white_gray3}`}
            borderRadius={10}
            justifyContent="space-between"
            gap={5}
            p={5}
        >
            <Text fontSize="large" fontWeight={"500"}>
                {newsArticle.title ? newsArticle.title : "Sem Título"}
            </Text>
            <Image
                src={
                    newsArticle.urlToImage ? newsArticle.urlToImage : otherImage
                }
                alt={newsArticle.url ? newsArticle.url : newsArticle.title}
            />
            <Flex flexDirection="column" gap={5}>
                <Text fontSize={17} fontWeight={"500"} textAlign="justify">
                    {newsArticle.content}
                </Text>
                <Flex gap={3}>
                    <Text fontSize="sm" fontWeight={"400"}>
                        Author:
                    </Text>
                    <Text
                        fontSize="sm"
                        fontWeight={"500"}
                        whiteSpace={"nowrap"}
                        overflow={"hidden"}
                        textOverflow={"ellipsis"}
                    >
                        {newsArticle.author
                            ? newsArticle.author
                            : "Desconhecido"}
                    </Text>
                </Flex>
            </Flex>
        </Link>
    );
};
