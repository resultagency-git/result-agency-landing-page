import styled from "styled-components";

import EmptyListOne from "../../../src/assets/images/top_background_header.png";

export const HeaderContactsBox = styled.div`
  height: 40px;

  color: var(--theme-color-title-primary);

  background: #224432;
  background: linear-gradient(
    90deg,
    rgba(34, 68, 50, 1) 0%,
    rgba(34, 68, 50, 1) 76%,
    rgba(188, 248, 20, 1) 80%,
    rgba(188, 248, 20, 1) 100%
  );

  display: flex;
  justify-content: center;

  section {
    width: 100%;
    max-width: 1180px;
    height: 40px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 20px;

    .header-contacts-box-1 {
      display: flex;
      gap: 30px;

      .header-contacts-box-1-item {
        display: flex;
        align-items: center;
        gap: 10px;

        cursor: pointer;

        svg {
          font-size: 14px;
          color: var(--theme-bg-secondary-hex);
        }

        span {
          font-size: 14px;
        }
      }
    }

    .fake-image {
      width: 300px;
      height: 40px;

      display: flex;
      align-items: center;
      justify-content: end;

      background-image: url(${EmptyListOne});
      background-size: cover;
      background-position: center;
      .float-social-network {
        display: flex;

        gap: 10px;

        .circular-icon {
          background-color: var(--theme-bg-primary-hex);
          display: flex;
          align-items: center;

          padding: 6px;

          cursor: pointer;

          border-radius: 50px;
          svg {
            font-size: 16px;
            color: var(--theme-bg-secondary-hex);
          }
        }
      }
    }
  }

  @media (max-width: 1024px) {
    section {
      max-width: 769px;

      display: flex;
      align-items: center;
      justify-content: space-between;

      .header-contacts-box-1 {
        .header-contacts-box-1-item {
          display: none;
        }
        .header-contacts-box-1-item:first-child {
          display: flex;
        }
      }
    }
  }

  @media (max-width: 769px) {
    display: none;
  }
`;
