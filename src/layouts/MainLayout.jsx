import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";
import PropTypes from "prop-types";

function MainLayout({ children }) {
  return (
    <div className="mx-auto max-w-7xl px-6">
      <header>
        <nav>
          <NavbarComponent />
        </nav>
      </header>
      {/* Desde aqui se pintaran todas las secciones que construire en el folder pages */}
      <main>{children}</main>

      <footer>
        <Footer />
      </footer>
    </div>
  );
}
MainLayout.propTypes = {
  children: PropTypes.node.isRequired,
};

export default MainLayout;
