import styled from 'styled-components';

const Card = styled.div`
  align-self: start;
  border: 1px solid #000;
  border-radius: 0.3125rem;
  height: auto;
  box-shadow: 3px 3px 0px #000;

  .body {
    padding: 1.3125rem 1.375rem;

    li {
      color: var(--secondary-color);
      list-style: disc;
      margin-left: 18px;
      margin-bottom: 5px;
    }
  }
`;

export default Card;
