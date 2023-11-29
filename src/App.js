import React, { useState, useEffect } from "react";
import Menu from "./component/Menu";
import Nav from "./component/Nav";
import Header from "./component/Header";
import About from "./component/About";
import Projects from "./component/Projects";
import Contact from "./component/Contact";
import "./style/global.css";

export default function App() {
  const [menuState, setMenuState] = useState(false);

  const toggleMenu = () => {
    setMenuState((prevState) =>
      prevState === "active" ? "deactive" : "active"
    );
  };

  useEffect(() => {
    const navbar = document.querySelector("#navbar");
    const header = document.querySelector("#welcome-section");
    const forest = document.querySelector(".forest");
    const wolf = document.querySelector(".wolf");
    let forestInitPos = -300;

    const handleScroll = () => {
      let scrollPos =
        document.documentElement.scrollTop || document.body.scrollTop;

      if (scrollPos <= window.innerHeight) {
        wolf.style.bottom = `${parseInt(scrollPos / 3)}px`;
        forest.style.bottom = `${parseInt(forestInitPos + scrollPos / 3)}px`;
      }

      if (scrollPos - 100 <= window.innerHeight) {
        header.style.visibility =
          header.style.visibility === "hidden"
            ? "visible"
            : header.style.visibility;
      } else {
        header.style.visibility = "hidden";
      }

      if (scrollPos + 100 >= window.innerHeight) {
        navbar.classList.add("bg-active");
      } else {
        navbar.classList.remove("bg-active");
      }
    };

    const navSmoothScrolling = () => {
      const internalLinks = document.querySelectorAll('a[href^="#"]');
      for (let i in internalLinks) {
        if (internalLinks.hasOwnProperty(i)) {
          internalLinks[i].addEventListener("click", (e) => {
            e.preventDefault();
            document.querySelector(internalLinks[i].hash).scrollIntoView({
              block: "start",
              behavior: "smooth",
            });
          });
        }
      }
    };

    window.addEventListener("scroll", handleScroll);
    navSmoothScrolling();

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <>
      <Menu toggleMenu={toggleMenu} showMenu={menuState} />
      <Nav toggleMenu={toggleMenu} showMenu={menuState} />
      <Header />
      <About />
      <Projects />
      <Contact />
    </>
  );
}
