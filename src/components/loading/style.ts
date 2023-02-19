import styled, { keyframes } from "styled-components";

export const animation = keyframes`
    to {
      transform: rotate(1turn);
    }
`;

export const Loading = styled.div`
    animation: ${animation} 1s infinite;
    border: 16px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: var(--primary);
    height: 150px;
    width: 150px;
    position: fixed;
    top: 0;
    left: 0;
    right: 0;
    bottom: 0;
    margin: 40vh auto;
    z-index: 9999;
`;
