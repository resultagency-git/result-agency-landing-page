import styled from "styled-components";

export const HeaderBox = styled.section`
  background-color: var(--theme-color-title-primary);
  color: var(--theme-bg-primary-hex);

  display: flex;
  justify-content: center;

  section {
    width: 100%;
    max-width: 1180px;
    height: 80px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 20px;

    img {
      cursor: pointer;
      height: 40px;
    }

    .item-list {
      display: flex;
      align-items: center;

      gap: 40px;

      .item-link {
        font-weight: bold;

        color: var(--theme-color-primary-hex);

        &:hover {
          color: var(--theme-bg-primary-hex);

          cursor: pointer;

          text-decoration: underline;
          text-decoration-color: var(--theme-bg-primary-hex);
        }
      }
    }

    .item-button {
      width: 209px;
      display: flex;
      justify-content: end;
      text-align: right;

      .item-button-i {
        cursor: pointer;
        font-weight: bold;

        height: 40px;

        background-color: var(--theme-bg-primary-hex);
        color: var(--theme-bg-secondary-hex);

        padding: 9px 20px 9px;

        border-radius: 50px;
      }
    }

    .item-button-mobile {
      display: none;
    }
  }

  @media (max-width: 1024px) {
    section {
      max-width: 769px;

      .item-list {
        display: none;
      }
      .item-button {
        display: none;
      }
      .item-button-mobile {
        display: flex;

        background-color: var(--theme-bg-primary-hex);
        color: var(--theme-bg-secondary-hex);

        padding: 4px 6px 0px;

        border-radius: 10px;
        .item-button-i {
          font-size: 28px;
          line-height: 1;
        }
      }
    }
  }

  @media (max-width: 769px) {
  }
`;
