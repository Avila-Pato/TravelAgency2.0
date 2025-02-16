import React from "react";
import NavbarComponent from "../components/Navbar";
import Footer from "../components/Footer";

function MainLayout({ children }) {
  return (
    <div>
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

export default MainLayout;
