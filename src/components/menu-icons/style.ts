import { MdPeopleOutline, MdOutlineGroups } from 'react-icons/md'
import { AiOutlineHome } from 'react-icons/ai'
import { CiVideoOn } from 'react-icons/ci'
import { TbReplace } from 'react-icons/tb'
import styled, { css } from 'styled-components'

const StylesIcon = css`
    padding: 1rem 2rem;
    font-size: 100px;
    max-height: 60px;
    border-top: 4px solid transparent;
    border-bottom: 4px solid transparent;
    cursor: pointer;

    &:hover {
        color: mediumslateblue;
        border-bottom: 4px solid mediumslateblue;
    }
`

export const HomeIcon = styled(AiOutlineHome)`
    ${StylesIcon}
`

export const PersonIcon = styled(MdPeopleOutline)`
    ${StylesIcon}
`

export const MarketPlaceIcon = styled(TbReplace)`
    ${StylesIcon}
`

export const GroupPersonIcon = styled(MdOutlineGroups)`
    ${StylesIcon}
`

export const VideoIcon = styled(CiVideoOn)`
    ${StylesIcon}
`
