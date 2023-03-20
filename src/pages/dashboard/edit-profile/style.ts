import styled from "styled-components";
import { FadeInRight } from "../../../animations/styled-components";

export const EditProfile = styled.div`
    animation: 0.5s ${FadeInRight};
    display: flex;
    flex-direction: column;
    padding: 2rem;
    border-radius: 10px;
    gap: 1.5rem;
    width: 100%;
    max-width: 500px;
    background-color: rgba(20, 30, 50, 0.97);
`;
