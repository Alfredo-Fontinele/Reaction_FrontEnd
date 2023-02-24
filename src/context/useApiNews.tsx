import { INewArticle } from "../pages/home/list-news/index";
import { createContext, useContext, useState } from "react";
import { getDateNow } from "../utils/getDateNow";
import { API } from "../services";
import { toast } from "react-toastify";
import React from "react";
import { NavigateFunction, useNavigate } from "react-router-dom";

interface IContextUseAPI {
    userAdmin: string;
    setUserAdmin: React.Dispatch<React.SetStateAction<string>>;
    navigate: (to: string) => void;
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
    const [userAdmin, setUserAdmin] = useState("Alfredo Neto");

    const navigate = useNavigate();

    const searchNewsInApi = async (searchValue: string) => {
        const dateNow = getDateNow();
        const {
            data: { data },
        } = await API.get(`news?category=${searchValue.toLowerCase()}`);
        if (!data.length) {
            // toast.success("Show. Manda Bala 🚀");
            toast.error("Nada Encontrado");
        }
        return data;
    };

    return (
        <ContextUseAPI.Provider
            value={{
                userAdmin,
                setUserAdmin,
                navigate,
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

export const useAPINews = () => useContext(ContextUseAPI);
