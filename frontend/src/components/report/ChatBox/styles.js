import styled from "styled-components";

export const ChatContainer = styled.div`
  margin: 3.75rem 0;
  border: 2px solid #000;
  border-radius: 0.3125rem;
  width: 100%;
  box-shadow: 3px 3px 0px #000;

  .chat-item {
    display: grid;
    grid-template-rows: 1fr;

    .chats {
      padding: 1.875rem 1.25rem;

      .robot-box {
        justify-content: unset;
        gap: 0.9375rem;

        p {
          background: rgba(168, 255, 115, 0.39);
          border-radius: 0.3125rem;
          padding: 1.25rem 1.5rem;
          font-size: clamp(1rem, 0.8611rem + 0.4444vw, 1.25rem);
          line-height: 143%;
          max-width: 688px;
        }
      }

      .user-box {
        display: flex;
        align-items: center;

        .user-message {
          justify-content: unset;
          max-width: 439px;
          margin: 2.8125rem 0;
          margin-left: auto;
          gap: 0.9375rem;

          svg {
            cursor: pointer;
          }

          p {
            background: #fff;
            border-radius: 0.3125rem;
            padding: 1.25rem 1.5rem;
            font-size: clamp(1rem, 0.8611rem + 0.4444vw, 1.25rem);
            line-height: 143%;
          }
        }
      }
    }

    .chat-actions {
      align-self: end;
      border-top: 1px solid #000;
      position: relative;

      svg {
        color: #9c9c9c;
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
      }

      .arrow-icon {
        left: 1.375rem;
      }

      .menu-icon {
        right: 1.375rem;
      }

      input {
        padding: 1.1875rem 3.9375rem;
        background-color: #fff;
        width: 100%;
        border: none;
        outline: none;
        font-size: clamp(1rem, 0.8611rem + 0.4444vw, 1.25rem);
        line-height: 143%;
        font-weight: 500;

        &::placeholder {
          color: #9c9c9c;
          font-size: clamp(1rem, 0.8611rem + 0.4444vw, 1.25rem);
        }
      }
    }
  }
`;
