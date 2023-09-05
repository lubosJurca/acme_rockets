import { useState } from "react";


import MenuIcon from "@mui/icons-material/Menu";
import CloseIcon from "@mui/icons-material/Close";

const Header = () => {
  const hamburgeMenu = document.getElementById("hamburger-menu")
  const [open, setOpen] = useState(true)

  const toggleMenu = ( ) => {
    setOpen(prevState => !prevState)
    hamburgeMenu.classList.toggle("toggle-btn")
  }

  return (
    <header className="bg-teal-700 text-white sticky top-0 z-10 ">
      <section className="max-w-4xl mx-auto p-4 flex justify-between items-center">
        <h1 className="text-3xl font-medium">
          {" "}
          <a href="#hero">🚀 Acme Rockets</a>
        </h1>
        <div>
          <button
            id="hamburger-menu"
            className=" md:hidden cursor-pointer relative w-8 h-8"
            onClick={toggleMenu}
          >
            {/* <MenuIcon style={{ fontSize: "3rem"}} /> */}
            <div id="hamburger-menu" className="toggle-btn absolute top-4 -mt-0.5 h-1 w-8 rounded bg-white transition-all duration-500 before:absolute before:h-1 before:w-8 before:-translate-x-4 before:-translate-y-3 before:rounded before:bg-white before:transition-all before:duration-500 before:content-[''] after:absolute after:h-1 after:w-8 after:-translate-x-4 after:translate-y-3 after:rounded after:bg-white after:transition-all after:duration-500 after:content-['']"></div>
          </button>
          <nav className="hidden md:block space-x-8" aria-label="main">
            <a href="#rockets" className="hover:opacity-90">
              Our Rockets
            </a>
            <a href="#testimonials" className="hover:opacity-90">
              Testimonials
            </a>
            <a href="#contact" className="hover:opacity-90">
              Contact Us
            </a>
          </nav>
        </div>
      </section>
      <section
        id="mobile-menu"
        className={`absolute top-68 bg-black w-full text-5xl  flex-col justify-center origin-top animate-open-menu ${open ? "flex" : "hidden"}`}
      >
        <button className="self-end px-6" onClick={toggleMenu}>
          {/* <CloseIcon style={{ fontSize: "3.5rem"}} /> */}
        </button>
        <nav onClick={toggleMenu} className="flex flex-col min-h-screen items-center py-8 " aria-label="mobile">
          <a href="#hero" className="w-full text-center py-6 hover:opacity-90">Home</a>
          <a href="#rockets" className="w-full text-center py-6 hover:opacity-90">Rockets</a>
          <a href="#testimonials" className="w-full text-center py-6 hover:opacity-90">Testimonials</a>
          <a href="#contact" className="w-full text-center py-6 hover:opacity-90">Contact Us</a>
          <a href="#footer" className="w-full text-center py-6 hover:opacity-90">Legal</a>
        </nav>
      </section>
    </header>
  );
};

export default Header;
