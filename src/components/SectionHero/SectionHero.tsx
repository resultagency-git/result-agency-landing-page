import React from "react";
import EmptyListOne from "../../../src/assets/images/section-1.png";

import { SectionHeroBox } from "./SectionHero.styles";

export default function SectionHero() {
  return (
    <SectionHeroBox>
      <section>
        <img src={EmptyListOne} alt="" />
      </section>
    </SectionHeroBox>
  );
}
