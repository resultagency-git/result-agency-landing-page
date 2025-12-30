import styled from "styled-components";

export const SectionHeroBox = styled.section`
  color: var(--theme-bg-primary-hex);

  display: flex;
  align-items: flex-start;
  justify-content: center;

  /* height: calc(100dvh - var(--height-topbar)); */
  height: 100dvh;

  background-color: var(--theme-bg-main);

  padding-top: 100px;

  section {
    width: 100%;
    max-width: 1180px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 20px;

    .floagin-dots {
      width: 200px;
      top: 120px;
      position: absolute;
      left: calc(50% - 100px);
      opacity: 0.6;
    }

    .content-hero {
      .content-hero-left {
        .chl-header {
          display: flex;
          align-items: center;

          gap: 20px;

          padding-bottom: 26px;

          img {
            height: 30px;
          }

          span {
            font-size: 28px;
            font-weight: 600;
            font-family: "ABeeZee", sans-serif;
          }
        }

        .chl-text {
          width: 50%;

          display: flex;

          font-size: 60px;
          line-height: 68px;

          font-weight: 700;
          font-family: -apple-system, BlinkMacSystemFont, "Segoe UI", "Roboto",
            "Oxygen", "Ubuntu", "Cantarell", "Fira Sans", "Droid Sans",
            "Helvetica Neue", sans-serif;

          padding-bottom: 26px;
        }

        .chl-span {
          width: 60%;

          font-size: 18px;
          line-height: 28px;

          padding-bottom: 30px;
        }
        .chl-buttons {
          display: flex;

          align-items: center;

          gap: 26px;

          .chl-buttons-button {
            display: flex;
            align-items: center;

            cursor: pointer;

            font-size: 18px;
            font-weight: bold;

            gap: 16px;

            background-color: var(--theme-bg-primary-hex);
            color: var(--theme-bg-secondary-hex);

            padding: 14px 30px 14px;

            border-radius: 50px;
          }

          .chl-buttons-button-outline {
            cursor: pointer;
            padding: 0px 30px 0px;
            font-size: 18px;
            font-weight: bold;
            text-decoration: underline;
          }
        }
      }
    }
  }

  @media (max-width: 769px) {
    padding-top: 40px;
    section {
      /* background-color: tan; */

      .floagin-dots {
        top: 60px;
        display: none;
      }

      .content-hero {
        .content-hero-left {
          .chl-header {
            display: flex;
            align-items: center;
            justify-content: center;

            gap: 20px;

            padding-bottom: 26px;

            img {
              height: 20px;
            }

            span {
              font-size: 20px;
              font-weight: 600;
              font-family: "ABeeZee", sans-serif;
            }
          }

          .chl-text {
            width: 100%;
            text-align: center;
            font-size: 50px;
            line-height: 58px;
            padding-bottom: 16px;
          }
          .chl-span {
            width: 100%;

            text-align: center;
          }
          .chl-buttons {
            flex-direction: column;
          }
        }
      }
    }
  }
`;
