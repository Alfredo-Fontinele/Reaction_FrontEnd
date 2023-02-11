import { createContext, useContext, useState } from "react";
import { API, API_KEY } from "./../src/services/index";
import { INewArticle } from "../src/pages/home/list-news";
import { getDateNow } from "./../src/utils/getDateNow";
import React from "react";

interface IContextUseAPI {
    searchNewsInApi: (searchValue: string) => Promise<any>;
    newsArticles: INewArticle[];
    setNewsArticles: React.Dispatch<React.SetStateAction<INewArticle[]>>;
}

const ContextUseAPI = createContext<IContextUseAPI>({} as IContextUseAPI);

export const ApiProvider = ({ children }: React.PropsWithChildren) => {
    const [newsArticles, setNewsArticles] = useState<INewArticle[]>([]);

    const searchNewsInApi = async (searchValue: string) => {
        const dateNow = getDateNow();
        const {
            data: { articles },
        } = await API.get(
            `?q=${searchValue}&pageSize=20&from=${dateNow}&sortBy=publishedAt&apiKey=${API_KEY}`
        );
        return articles;
    };

    return (
        <ContextUseAPI.Provider
            value={{ searchNewsInApi, newsArticles, setNewsArticles }}
        >
            {children}
        </ContextUseAPI.Provider>
    );
};

export const useAPI = () => useContext(ContextUseAPI);
