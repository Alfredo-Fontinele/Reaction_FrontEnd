import { INewArticle } from "./../pages/home/list-news/index";
import { createContext, useContext, useState } from "react";
import { getDateNow } from "../utils/getDateNow";
import { API, API_KEY } from "../services";
import { toast } from "react-toastify";
import React from "react";

interface IContextUseAPI {
    searchNewsInApi: (searchValue: string) => Promise<any>;
    newsArticles: INewArticle[];
    setNewsArticles: React.Dispatch<React.SetStateAction<INewArticle[]>>;
    isLoading: boolean;
    setIsLoading: React.Dispatch<React.SetStateAction<boolean>>;
}

const ContextUseAPI = createContext<IContextUseAPI>({} as IContextUseAPI);

export const ApiProvider = ({ children }: React.PropsWithChildren) => {
    const [newsArticles, setNewsArticles] = useState<INewArticle[]>([]);
    const [isLoading, setIsLoading] = useState(false);

    const searchNewsInApi = async (searchValue: string) => {
        const dateNow = getDateNow();
        const {
            data: { articles },
        } = await API.get(
            `?q=${searchValue}&pageSize=20&from=${dateNow}&sortBy=publishedAt&apiKey=${API_KEY}`
        );
        if (!articles.length) {
            // toast.success("Show. Manda Bala 🚀");
            toast.error("Nada Encontrado");
        }
        return articles;
    };

    return (
        <ContextUseAPI.Provider
            value={{
                searchNewsInApi,
                isLoading,
                setIsLoading,
                newsArticles,
                setNewsArticles,
            }}
        >
            {children}
        </ContextUseAPI.Provider>
    );
};

export const useAPI = () => useContext(ContextUseAPI);
