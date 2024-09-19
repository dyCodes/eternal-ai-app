import styled from 'styled-components';

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
      padding: 1.875rem 1.25rem 0.125rem;
      height: 380px;
      overflow-y: auto;
      scroll-behavior: smooth;

      .message {
        border-radius: 0.3125rem;
        font-size: clamp(1rem, 0.8611rem + 0.4444vw, 1rem);
        line-height: 143%;
        max-width: 688px;
        margin-bottom: 1.375rem;
      }

      .robot-box {
        justify-content: unset;
        gap: 0.9375rem;

        .message {
          background: rgba(168, 255, 115, 0.39);
          max-width: 688px;
          padding: 1rem 1.25rem;
        }
      }

      .user-box {
        display: flex;
        align-items: center;

        .message {
          background: #fff;
          max-width: 439px;
          padding: 0.625rem 1.125rem;
          margin-left: auto;
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
        top: 0;
        bottom: 0;
        margin-block: auto;
      }

      .arrow-icon {
        left: 1.375rem;
      }

      .menu-icon {
        right: 1.375rem;
        color: #222;
      }

      input {
        padding: 0.9375rem 3.875rem;
        background-color: #fff;
        width: 100%;
        border: none;
        outline: none;
        font-size: clamp(1rem, 0.8611rem + 0.4444vw, 1.125rem);
        line-height: 143%;

        &::placeholder {
          color: #9c9c9c;
          font-size: clamp(1rem, 0.8611rem + 0.4444vw, 1rem);
        }
      }
    }
  }
`;
