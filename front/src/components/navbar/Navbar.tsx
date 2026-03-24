import { useState } from "react";
import { Link } from "react-router-dom";
import "./Navbar.css";

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="navbar">
      <div className="navbar-logo">
        <Link to="/">MyMusc</Link>
      </div>
      <ul className="navbar-links">
        <li><Link to="/">Início</Link></li>
        <li><Link to="/explorar">Explorar</Link></li>
        <li><Link to="/ferramentas">Ferramentas</Link></li>
        {/* Links de conta à direita ou separados se preferir */}
        <li><Link to="/dashboard">Dashboard</Link></li>
        <div className="user" onClick={() => setMenuOpen(!menuOpen)}>
            {/* @ts-ignore */}
            <ion-icon name="person-circle"></ion-icon>
          {menuOpen && (
            <ul className="dropdown">
              <li><Link to="/login">Login</Link></li>
              <li><Link to="/cadastro">Cadastro</Link></li>
            </ul>
          )}
        </div>
      </ul>
    </nav>
  );
}
