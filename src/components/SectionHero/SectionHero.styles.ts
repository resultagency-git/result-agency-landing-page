import styled from "styled-components";

export const SectionHeroBox = styled.section`
  color: var(--theme-bg-primary-hex);

  display: flex;
  justify-content: center;

  section {
    width: 100%;
    max-width: 1180px;

    display: flex;
    align-items: center;
    justify-content: space-between;

    padding: 0px 20px;

    img {
      width: 200px;
      top: 120px;
      position: absolute;
      left: calc(50% - 100px);
      opacity: 0.6;
    }
  }

  @media (max-width: 769px) {
    section {
      img {
        top: 80px;
      }
    }
  }
`;
