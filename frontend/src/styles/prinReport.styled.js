import styled from 'styled-components';

export const ReportHeader = styled.section`
  display: grid;
  justify-content: space-between;
  grid-template-columns: repeat(auto-fit, minmax(200px, 1fr));
  row-gap: 2rem;
  padding-bottom: clamp(2.625rem, 2.2083rem + 1.3333vw, 3.375rem);

  div {
    flex: 1;

    h5 {
      font-size: 15px;
      text-transform: uppercase;
      font-weight: 400;
      margin-bottom: 2px;
    }

    p {
      font-size: clamp(1rem, 1.2014rem + 0.5556vw, 24px);
      font-weight: 500;
    }

    p.gemini {
      display: flex;
      align-items: center;
      gap: 0 6px;
    }
  }
`;
