import { FormProps } from "react-router-dom";
import { FormEvent } from "react";
import * as S from "./style";
import React from "react";
import { ComponentDefaultProps } from "@chakra-ui/react";

interface IFormComponent
    extends React.PropsWithChildren,
        FormProps,
        ComponentDefaultProps {}

export const FormComponent = ({ children, ...rest }: IFormComponent) => {
    return <S.Form {...rest}>{children}</S.Form>;
};
