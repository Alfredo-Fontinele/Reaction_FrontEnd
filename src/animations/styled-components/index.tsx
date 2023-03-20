import { fadeInDown, fadeInLeft, flipInY, fadeInRight } from "react-animations";
import { keyframes } from "styled-components";

export const FadeLeft = keyframes`${fadeInLeft}`;
export const FadeInDown = keyframes`${fadeInDown}`;
export const FlipIny = keyframes`${flipInY}`;
export const FadeInRight = keyframes`${fadeInRight}`;

export const LeftToRightAnime = keyframes`
    0% {
        opacity: 0;
        transform: translateX(-100%);
    }
    100% {
        opacity: 1;
        transform: translateX(0%);
    }
`;
