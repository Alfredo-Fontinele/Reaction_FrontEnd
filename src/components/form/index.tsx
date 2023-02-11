import { FormEvent } from 'react'
import * as S from './style'
import React from 'react'

interface IFormComponent extends React.PropsWithChildren {
    functionSubmit: (e: FormEvent) => Promise<void>
}

export const FormComponent = ({ children, functionSubmit, ...rest }: IFormComponent) => {
    return (
        <S.Form onSubmit={functionSubmit} {...rest}>
            {children}
        </S.Form>
    )
}
