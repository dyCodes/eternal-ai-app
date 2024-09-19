import styled from 'styled-components';

export const StyledSection = styled.section`
  .content {
    padding: clamp(1.5rem, 1.2222rem + 0.8889vw, 2rem) 0;

    p {
      font-size: clamp(1.1875rem, 1.0833rem + 0.3333vw, 1rem);
      font-weight: 300;
    }

    img {
      height: 100%;
      border: 1px solid #cbcbcb;
      border-radius: 30px;
    }

    h6 {
      font-size: clamp(1.1rem, 1.0833rem + 0.3333vw, 1.125rem);
      padding: 3px 10px;
      background-color: var(--primary-color);
      width: max-content;
    }

    div.paragraph-box {
      margin-bottom: 1.375rem;

      &:last-child {
        margin-bottom: 0;
      }

      p {
        padding-top: 0.875rem;
      }
    }

    div.info-grid {
      display: grid;
      justify-content: space-between;
      grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
      row-gap: 3.5rem;

      div.paragraph-box {
        margin: 0;
      }
    }
  }
`;
