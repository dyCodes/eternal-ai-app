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
  padding: 1.5rem 1.625rem;
  background-color: #fff;
  width: 80%; /* Adjust width as needed */
  max-width: 700px;
  height: auto; /* Allow height to adjust based on content */
  max-height: 90vh;
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

  .heading {
    display: flex;
    gap: 1rem;

    .image {
      flex-basis: min(177px, 100%);
      min-height: 134px;
      background: rgba(168, 255, 115, 0.24);
      border: 2px solid #6ba249;
      border-radius: 0.625rem;
      position: relative;

      &::before {
        content: '';

        display: block;
        position: absolute;
        top: 0;
        left: 0;
        width: 100%;
        height: 100%;
        background-image: url(${({ $image }) => $image});
        background-repeat: no-repeat;
        background-size: cover;
        background-position: center auto;
      }
    }

    .heading-info {
      display: grid;
      grid-template-rows: 1fr;

      p.name {
        font-size: clamp(1.375rem, 1.3056rem + 0.2222vw, 1.5rem);
        font-weight: 500;
      }

      p.ratings {
        font-size: clamp(1.125rem, 1.0208rem + 0.3333vw, 1.3125rem);
        font-weight: 500;
        color: #9c9c9c;
        margin-top: 0.625rem;
      }
      p.rate {
        align-self: end;
        font-size: clamp(1.3125rem, 1.2431rem + 0.2222vw, 1.4375rem);
        font-weight: 500;
        color: #6ba249;
      }
    }
  }

  .metric-box {
    border: 2px solid #f5f5f5;
    border-radius: 0.625rem;
    margin-top: clamp(1.6875rem, 1.5139rem + 0.5556vw, 2rem);

    .metrics {
      display: flex;
      align-items: center;
      justify-content: space-around;
      padding: 1.125rem;

      @media (max-width: 570px) {
        flex-direction: column;
        row-gap: 1rem;

        > svg {
          display: none;
        }
      }

      & > div {
        .experience {
          color: #9747ff;
        }

        .patients {
          color: #0fa958;
        }

        .reviews {
          color: #ffc700;
        }

        p {
          text-align: center;
        }
        p:first-child {
          font-size: clamp(1.5rem, 1.3611rem + 0.4444vw, 1.75rem);
          font-weight: 500;
          display: flex;
          align-items: center;
          justify-content: center;
        }

        p.label {
          font-size: 1.0625rem;
          font-weight: 500;
          color: #9c9c9c;
        }
      }
    }
  }

  .user-bio {
    margin-top: clamp(1.6875rem, 1.5139rem + 0.5556vw, 2rem);

    nav {
      ul {
        display: flex;
        align-items: center;
        justify-content: space-around;

        @media (max-width: 570px) {
          justify-content: unset;
        }

        li {
          padding-bottom: 0.9375rem;
          border-bottom: 2px solid #cbcbcb;
          padding: 0 1rem 0.9375rem;
          cursor: pointer;
          font-size: 1.125rem;
          font-weight: 500;
          color: #9c9c9c;

          &:first-child {
            border-bottom-color: #6ba249;
          }

          @media (max-width: 570px) {
            &:nth-child(n + 2):nth-child(-n + 4) {
              display: none;
            }
          }
        }
      }
    }

    .about {
      margin-top: 1.0625rem;
      font-weight: 500;
      font-size: 1rem;
      line-height: 138%;
      color: #9c9c9c;

      p:nth-child(2) {
        margin-top: 1.4rem;
      }
    }

    .upload {
      margin-top: clamp(1.25rem, 1.1111rem + 0.4444vw, 1.5rem);
      min-height: 151px;
      background: rgba(168, 255, 115, 0.24);
      border: 1px dashed #659945;
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

    button.confirm {
      margin-top: clamp(1.25rem, 1.1111rem + 0.4444vw, 1.5rem);
      width: 100%;
      background: #6ba249;
      border-radius: 5px;
      padding: 1rem 0;
      font-weight: 500;
      font-size: 1.125rem;
      color: #ffffff;
    }
  }
`;
