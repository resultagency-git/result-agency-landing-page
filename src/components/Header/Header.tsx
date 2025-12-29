import React from "react";
import { IoMenu } from "react-icons/io5";

import EmptyListOne from "../../../src/assets/images/Logo_01.png";
import { HeaderBox } from "./Header.styles";

export default function Header() {
  return (
    <HeaderBox>
      <section>
        <img src={EmptyListOne} alt="" />
        <div className="item-list">
          <div className="item-link">Início</div>
          <div className="item-link">Projetos</div>
          <div className="item-link">Blogs</div>
          <div className="item-link">Sobre nós</div>
          <div className="item-link">Preços</div>
        </div>
        <div className="item-button">
          <div className="item-button-i">Contactar</div>
        </div>
        <div className="item-button-mobile">
          <div className="item-button-i">
            <IoMenu />
          </div>
        </div>
      </section>
    </HeaderBox>
  );
}
