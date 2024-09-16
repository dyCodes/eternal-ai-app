import styled from 'styled-components';
import css from 'styled-jsx/css';

export const Card = styled.div`
  border-radius: 50px;
  min-height: 671px;
  display: grid;
  grid-template-rows: 1fr;
  background-image: url(${({ $image }) => $image});
  background-repeat: no-repeat;
  background-size: cover;
  background-position: center center;
  cursor: pointer;

  h5,
  p {
    color: #fff;
  }

  h5 {
    font-size: clamp(1.75rem, 1.5417rem + 0.6667vw, 2.125rem);
    line-height: 120%;
    font-weight: 700;
  }

  .info-box {
    align-self: end;
    padding: 2rem 1.75rem 1.75rem 1.75rem;
    border-radius: 0 0 3.125rem 3.125rem;

    ${({ $id }) =>
      $id === 'book'
        ? css`
            background: linear-gradient(
              180deg,
              rgba(168, 255, 115, 0.03) 0%,
              rgba(129, 200, 85, 0.65) 23.5%,
              rgba(132, 200, 90, 0.8233) 38%,
              #7bbb54 61.5%,
              #76b351 69.22%,
              #6fa84c 80%,
              #6ba249 90.22%,
              #659945 100%
            );
          `
        : css`
            background: linear-gradient(
              180deg,
              rgba(69, 77, 153, 0.03) 0%,
              rgba(69, 77, 153, 0.44) 23.5%,
              rgba(69, 77, 153, 0.81) 38%,
              #454d99 61.5%,
              #454d99 69.22%,
              #454d99 80%,
              #454d99 90.22%,
              #454d99 100%
            );
          `}

    .info-details {
      margin-top: 1.375rem;
      display: flex;
      gap: 0.9375rem;

      @media (min-width: 768px) and (max-width: 1023px) {
        flex-direction: column;
      }
      @media (max-width: 490px) {
        flex-direction: column;
      }

      .svg-box {
        flex: 1;
      }

      p.caption {
        font-size: 1.125rem;
      }
      p.description {
        margin-top: 0.3125rem;
        font-size: 0.875rem;
      }
    }
  }
`;
