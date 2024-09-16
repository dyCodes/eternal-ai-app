import styled from 'styled-components';

export const Card = styled.div`
  border: 2px solid #cbcbcb;
  border-radius: 0.9375rem;
  cursor: pointer;
  transition: border 0.2s ease-in-out;

  &:hover,
  &:focus {
    border-color: #659945;

    .doctor-info {
      background-color: #659945;

      p {
        color: #fff;
      }
      p.rate {
        color: #000;
      }
    }
  }

  .image-banner {
    min-height: 386px;
    background-color: rgba(168, 255, 115, 0.24);
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

  .doctor-info {
    padding: 0.6875rem 0.9375rem;
    background-color: #fff;
    border-radius: 0 0 0.9375rem 0.9375rem;
    transition: all 0.2s ease-in-out;

    p.rate {
      font-size: 1rem;
      font-weight: 500;
      color: #6ba249;
    }

    p.name {
      font-size: clamp(1.09375rem, 1.0417rem + 0.1667vw, 1.1875rem);
      font-weight: 500;
    }

    & > div {
      p {
        display: flex;
        align-items: center;
        font-size: 0.8438rem;
        font-weight: 500;
        color: #9c9c9c;

        .bar {
          margin: 0 0.125rem;
        }

        @media (max-width: 402px) {
          flex-direction: column;
          align-items: unset;

          .bar {
            display: none;
          }
        }
      }
    }
  }
`;
