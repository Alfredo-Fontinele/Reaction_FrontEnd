import { Flex } from '@chakra-ui/react'
import * as S from './style'

export const MenuIcons = () => {
    return (
        <Flex>
            <S.HomeIcon/>
            <S.PersonIcon/>
            <S.VideoIcon/>
            <S.MarketPlaceIcon/>
            <S.GroupPersonIcon/>
        </Flex>
    )
}
