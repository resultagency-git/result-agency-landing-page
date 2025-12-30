import React from "react";
import HeroSectionHeader from "../../../src/assets/images/hero_title.png";
import FloaginDots from "../../../src/assets/images/section-1.png";

import { SectionHeroBox } from "./SectionHero.styles";
import { FaArrowRight } from "react-icons/fa6";

export default function SectionHero() {
  return (
    <SectionHeroBox>
      <section>
        <img className="floagin-dots" src={FloaginDots} alt="" />
        <div className="content-hero">
          <div className="content-hero-left">
            <div className="chl-header">
              <img src={HeroSectionHeader} alt="" />
              <span>Eleve sua marca conosco</span>
            </div>
            <div className="chl-text">
              Empondere
              <br />e mostre sua marca para o mundo.
            </div>
            <div className="chl-span">
              Tecnologia orientada a resultados, construída com experiência.
              Criamos e desenvolvemos soluções digitais que posicionam marcas
              através de entregas consistentes. Entregamos{" "}
              <b>tecnologia de verdade.</b>
            </div>
            <div className="chl-buttons">
              <div className="chl-buttons-button">
                Explorar mais
                <FaArrowRight />
              </div>
              <div className="chl-buttons-button-outline">Explorar mais</div>
            </div>
          </div>
        </div>
      </section>
    </SectionHeroBox>
  );
}
