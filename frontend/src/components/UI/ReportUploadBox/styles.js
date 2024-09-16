import styled from 'styled-components';
import css from 'styled-jsx/css';

export const UploadContainer = styled.div`
  margin-top: clamp(1.25rem, 1.1111rem + 0.4444vw, 1.5rem);
  min-height: 151px;

  label {
    padding: 0 1rem;
    ${({ $modalType }) =>
      $modalType === 'appointment'
        ? css`
            background: rgba(168, 255, 115, 0.24);
            border: 1px dashed #659945;
          `
        : $modalType === 'case-study'
        ? css`
            background: rgba(29, 32, 250, 0.24);
            border: 1px dashed #2023f9;
          `
        : null}
  }
`;
