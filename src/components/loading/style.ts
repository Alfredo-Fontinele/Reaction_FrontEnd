import styled, { keyframes } from "styled-components";

export const animation = keyframes`
    to {
      transform: rotate(1turn);
    }
`;

// export const ContainerLoading = styled.div`
//   display: flex;
//   justify-content: center;
//   align-items: center;
//   height: 100%;
//   width: 100%;
// `

export const Loading = styled.div`
    animation: ${animation} 1s infinite;
    border: 16px solid #e5e5e5;
    border-radius: 50%;
    border-top-color: var(--primary);
    height: 150px;
    width: 150px;
    position: absolute;
    top: 0;
    bottom: 0;
    left: 0;
    right: 0;
    margin: auto;
    z-index: 9999;
`;
