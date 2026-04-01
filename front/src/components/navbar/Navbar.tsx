import { useEffect, useState } from "react";
import { Link } from "react-router-dom";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      if (window.innerWidth >= 960) setOpenNav(false);
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  const navItems = [
    { label: "Início", path: "/" },
    { label: "Explorar", path: "/explorar" },
    { label: "Ferramentas", path: "/ferramentas" },
    { label: "Dashboard", path: "/dashboard" },
  ];

  const navList = (
    <ul className="flex flex-col gap-2 lg:flex-row lg:items-center lg:gap-6">
      {navItems.map((item) => (
        <li key={item.path} className="font-medium">
          <Link
            to={item.path}
            className="flex items-center p-1 text-gray-800 hover:text-blue-500 transition"
          >
            {item.label}
          </Link>
        </li>
      ))}
    </ul>
  );

  return (
    <nav className="w-full border-b bg-white">
      <div className="mx-auto max-w-screen-xl px-4 py-3 flex items-center justify-between">
        
        {/* LOGO */}
        <Link
          to="/"
          className="font-bold text-xl text-gray-900"
        >
          MyMusc
        </Link>

        {/* NAV DESKTOP */}
        <div className="hidden lg:block">{navList}</div>

        {/* BOTÕES DESKTOP */}
        <div className="hidden lg:flex items-center gap-2">
          <Link to="/login">
            <button className="px-4 py-1 text-sm text-gray-700 hover:text-blue-500">
              Entrar
            </button>
          </Link>

          <Link to="/cadastro">
            <button className="px-4 py-1 text-sm bg-blue-500 text-white rounded hover:bg-blue-600 transition">
              Cadastrar
            </button>
          </Link>
        </div>

        {/* MENU MOBILE */}
        <button
          onClick={() => setOpenNav(!openNav)}
          className="lg:hidden text-xl"
        >
          {openNav ? "✕" : "☰"}
        </button>
      </div>

      {/* NAV MOBILE */}
      {openNav && (
        <div className="lg:hidden px-4 pb-4">
          {navList}

          <div className="flex flex-col gap-2 mt-4">
            <Link to="/login">
              <button className="w-full py-2 text-gray-700 border rounded">
                Entrar
              </button>
            </Link>

            <Link to="/cadastro">
              <button className="w-full py-2 bg-blue-500 text-white rounded">
                Cadastrar
              </button>
            </Link>
          </div>
        </div>
      )}
    </nav>
  );
}