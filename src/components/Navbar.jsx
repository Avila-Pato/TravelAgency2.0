import { useState } from "react";
import { BiPlay } from "react-icons/bi";
import { MdMenu } from "react-icons/md";
import { Link } from "react-router-dom";

const NavbarComponent = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const MenuItems = [
    { label: "Home", href: "#" },
    { label: "Descubre", href: "#" },
    { label: "Destinos especiales", href: "#" },
  ];

  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between px-6 relative">
      {/* Botón de menú móvil */}
      <button
        className="md:hidden"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        {isMenuOpen ? <BiPlay size={24} /> : <MdMenu size={24} />}
      </button>

      {/* Logo a la izquierda */}
      <div className="flex-shrink-0">
        <img src="traveLcon.png" alt="Lama Logo" className="h-16 md:h-16" />
      </div>

      {/* Menú Desktop  */}
      {/* hidden md:flex me desaparece el texto */}
      <div className="hidden md:flex space-x-9 text-xl font-semibold">
        {MenuItems.map((item) => (
          <a key={item.label} href={item.href} className="hover:text-gray-600 transition-colors">
            {item.label}
          </a>
        ))}
      </div>

      {/* Menú Mobile */}
      {isMenuOpen && (
        <div className="absolute top-16 left-0 w-full bg-white z-10 transition-all duration-300">
          <div className="flex flex-col space-y-2 p-4">
            {MenuItems.map((item) => (
              <a
                key={item.label}
                href={item.href}
                className="text-black hover:text-gray-600 transition-colors duration-300"
                onClick={() => setIsMenuOpen(false)}
              >
                {item.label}
              </a>
            ))}
          </div>
        </div>
      )}

      {/* Botones de Login y Sign Up */}
      <div className="flex items-center gap-x-4">
        <Link to="/Login">
          <button className="w-[107px] h-[40px] cursor-pointer rounded-3xl border-2 text-black">
            Login
          </button>
        </Link>
        <Link to="/register">
          <button className="w-[107px] h-[40px] rounded-3xl cursor-pointer text-white bg-gradient-to-t from-pink-400 to-purple-400">
            Sign Up
          </button>
        </Link>
      </div>
    </div>
  );
};

export default NavbarComponent;
