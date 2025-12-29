import styled from "styled-components";

export const BoxLayzingLoad = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  border-radius: 10px;
  background-color: rgba(0, 0, 0, 0.1);
  animation: hintloading 1s ease-in-out 0s infinite reverse;
  -webkit-animation: hintloading 1s ease-in-out 0s infinite reverse;
  @keyframes hintloading {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }

  @-webkit-keyframes hintloading {
    0% {
      opacity: 0.5;
    }
    50% {
      opacity: 1;
    }
    100% {
      opacity: 0.5;
    }
  }
`;

export const BoxChildren = styled.div`
  width: 100%;
  height: 100%;
  .firstBoxChildren {
    opacity: 0;
    transform: scale(1);
  }
`;
