import styled, { keyframes } from 'styled-components';

const zoomIn = keyframes`
from {
    transform: translate(-50%, -50%) scale(0.5);
    opacity: 0;
  }
  to {
    transform: translate(-50%, -50%) scale(1);
    opacity: 1;
  }
`;
export const BackDrop = styled.div`
  position: fixed;
  top: 0;
  left: 0;
  width: 100%;
  height: 100vh;
  background-color: rgba(0, 0, 0, 0.5);
  backdrop-filter: blur(10px);
  -webkit-backdrop-filter: blur(10px);
`;

export const StyledModal = styled.div`
  background-color: #fff;
  width: 80%; /* Adjust width as needed */
  max-width: 900px;
  height: auto; /* Allow height to adjust based on content */
  max-height: 90vh; /* Set a maximum height */
  position: fixed;
  top: 50%;
  left: 50%;
  transform: translate(-50%, -50%);
  overflow-y: auto;
  overflow-x: hidden;
  z-index: 10;
  border-radius: 0.625rem;
  animation: ${zoomIn} 0.3s ease forwards;

  @media (max-width: 1439px) {
    width: 90%;
  }
  @media (max-width: 500px) {
    width: 96%;
  }

  .banner {
    min-height: 205px;
    background-image: url('/images/banner.png');
    background-repeat: no-repeat;
    background-size: cover;
    background-position: center center;
  }

  .content {
    padding: 1.3125rem 1.8125rem;

    h3 {
      font-size: clamp(1.5rem, 1.2917rem + 0.6667vw, 1.875rem);
      font-weight: 500;
      line-height: 120%;
    }

    .upload {
      margin-top: clamp(1.25rem, 1.1111rem + 0.4444vw, 1.5rem);
      min-height: 151px;
      background: rgba(29, 32, 250, 0.24);
      border: 1px dashed #2023f9;
      border-radius: 5px;
      display: flex;
      align-items: center;

      p {
        text-align: center;
        margin: auto;
        font-weight: 500;
        font-size: 0.9375rem;
        line-height: 113%;
        color: #9c9c9c;
      }
    }

    p.description {
      font-size: clamp(1rem, 0.9306rem + 0.2222vw, 1.125rem);
      line-height: 124%;
      color: #9c9c9c;
      margin-top: clamp(1.25rem, 1.1111rem + 0.4444vw, 1.5rem);
    }

    .checkbox {
      margin-top: 1.1111rem;
      display: flex;
      align-items: center;
      gap: 0.5rem;

      button {
        all: unset;
        display: flex;
        justify-content: center;
        align-items: center;
        border: 1px solid #1c274c;
        width: 10px;
        height: 10px;
        padding: 0.125rem;
        border-radius: 4px;
        cursor: pointer;

        svg {
          color: #484291;
          font-size: 0%.7rem;
        }
      }

      span {
        font-size: 0.8125rem;
        font-weight: 400;
      }
    }

    button.confirm {
      margin-top: clamp(1.25rem, 1.1111rem + 0.4444vw, 1.5rem);
      width: 100%;
      background: #484291;
      border-radius: 5px;
      padding: 1rem 0;
      font-weight: 500;
      font-size: 1.125rem;
      color: #ffffff;
    }
  }
`;
