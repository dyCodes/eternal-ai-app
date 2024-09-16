import styled from 'styled-components';

export const StyledHeader = styled.header`
  h4 {
    font-size: clamp(1.5rem, 1.3611rem + 0.4444vw, 1.75rem);
    border-bottom: 1px solid #9c9c9c;
    padding-bottom: clamp(1rem, 0.9306rem + 0.2222vw, 1.125rem);
  }

  p {
    margin-top: clamp(1rem, 0.9306rem + 0.2222vw, 1.125rem);
    font-size: clamp(1.5rem, 1.3611rem + 0.4444vw, 1.75rem);

    span:nth-child(2) {
      color: #659945;
    }
  }

  .input-box {
    margin-top: clamp(1rem, 0.9306rem + 0.2222vw, 1.125rem);
    display: flex;
    align-items: center;
    gap: 0.625rem;

    .search-box {
      flex-basis: min(314px, 100%);
      position: relative;
      width: fit-content;

      input {
        width: 100%;
        background: #ffffff;
        border: 1px solid #dddcdc;
        border-radius: 5px;
        outline: none;
        font-size: 16px;
        padding: 0.5625rem 2.4375rem 0.5625rem 0.8125rem;

        &::placeholder {
          color: #dddcdc;
        }
      }

      svg {
        position: absolute;
        top: 50%;
        right: 0.975rem;
        transform: translateY(-50%);
      }
    }
  }

  button.filter {
    background: rgba(255, 0, 0, 0.06);
    color: #ff0000;
    border: 1px solid #dddcdc;
    border-radius: 5px;
    padding: 0.5625rem 0.8125rem;
    font-size: 1rem;
    gap: 0.5rem;
  }
`;

export const DoctorSection = styled.section`
  margin-top: clamp(1.75rem, 1.5764rem + 0.5556vw, 2.0625rem);
  display: grid;
  grid-template-columns: repeat(auto-fit, minmax(322px, 1fr));
  gap: 1.25rem;

  h3 {
    color: #ff0000;
    font-weight: 600;
    font-size: clamp(1.125rem, 0.8819rem + 0.7778vw, 1.5625rem);
  }
`;
