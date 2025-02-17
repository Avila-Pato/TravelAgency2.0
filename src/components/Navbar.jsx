import { Link } from "react-router-dom";

const NavbarComponent = () => {
  return (
    <div className="w-full h-16 md:h-20 flex items-center justify-between px-6">
      {/* Logo a la izquierda */}
      <div className="flex-shrink-0">
        <img src="traveLcon.png" alt="Lama Logo" className="h-16 md:h-16" />
      </div>

      {/* Enlaces de navegación */}
      <div className="flex items-center gap-x-17">
        <Link to="/" className="font-bold">
          Home
        </Link>
        <Link to="/">Descubre</Link>
        <Link to="/">Destinos especiales</Link>
        <Link to="/">Contacto</Link>
      </div>

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
