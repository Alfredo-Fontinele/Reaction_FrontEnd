import { createContext, useContext } from "react";
import React from "react";
import { API } from "../services";
import { toast } from "react-toastify";
import { useAPINews } from "./useApiNews";

interface IValidationFormContext {
    onSubmitFormLogin: (data: any) => Promise<void>;
    onSubmitFormRegister: (data: any) => Promise<void>;
}

const ValidationFormContext = createContext<IValidationFormContext>(
    {} as IValidationFormContext
);

const DB = [
    {
        email: "neto@gmail.com",
        password: 1234,
        name: "Alfredo",
    },
];

const ValidationFormProvider = ({ children }: React.PropsWithChildren) => {
    const { navigate } = useAPINews();

    const onSubmitFormLogin = async (data: any) => {
        const existUser = await DB.find((user) => user.email === data.email);
        if (existUser) {
            toast.success(`Show. Manda Bala ${existUser.name}`);
            navigate("/dashboard");
            return;
        }
        toast.error("Ops. Usuário não encontrado");
    };

    const onSubmitFormRegister = async (data: any) => {
        const existUser = await DB.find((user) => user.email === data.email);
        if (existUser) {
            toast.success(`Show. Manda Bala ${existUser.name}`);
            navigate("/dashboard");
            return;
        }
        toast.error("Ops. Usuário não encontrado");
    };

    return (
        <ValidationFormContext.Provider
            value={{
                onSubmitFormLogin,
                onSubmitFormRegister,
            }}
        >
            {children}
        </ValidationFormContext.Provider>
    );
};

export const useValidationForm = () => useContext(ValidationFormContext);
