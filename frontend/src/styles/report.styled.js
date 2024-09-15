import styled from 'styled-components';

const Box = styled.div`
  display: grid;
  gap: 30px 36px;
  grid-template-columns: repeat(auto-fit, minmax(400px, 1fr));

  @media (max-width: 460px) {
    gap: 18px 0;
    grid-template-columns: 1fr;
  }

  @media (min-width: 1536px) {
    grid-template-columns: repeat(2, 1fr);
  }
`;

const StyledButton = styled.button`
  margin-top: 2.3125rem;
  gap: 0.75rem;
  padding: 0.75rem 0.9375rem;
  font-size: clamp(1rem, 0.8611rem + 0.4444vw, 1.25rem);
  line-height: 143%;
  background-color: #fff;
  border: 1px solid #000000;
  border-radius: 5px;
  box-shadow: 3px 3px 0px #000;
`;

export { Box, StyledButton };
