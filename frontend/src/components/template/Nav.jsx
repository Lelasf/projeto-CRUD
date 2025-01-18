/* eslint-disable import/no-anonymous-default-export */
import { Link } from "react-router-dom";
import "./Nav.css";
import React from "react";

export default (props) => {
  return (
    <aside className="menu-area">
      <nav className="menu">
        {/* REFATORAR DPS CRIANDO OUTRO COMPONENTE */}
        <Link to="/">
          <i className="fa fa-home"></i>Início
        </Link>
        <Link to="/users">
          <i className="fa fa-users"></i>Usuários
        </Link>
      </nav>
    </aside>
  );
};
