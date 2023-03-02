import React, { useEffect } from "react";
import sun from "../../img/icons/sun.svg";
import mun from "../../img/icons/moon.svg";
import "./style.css";
import { useLocalStorage } from "../../utils/useLocalSorage";
import { detectDarkMode } from "../../utils/detectDarkMode";

export const BtnDarkMode = () => {
  const [darkMode, setDarkMode] = useLocalStorage("darkMode", detectDarkMode());

  useEffect(() => {
    window
      .matchMedia("(prefers-color-scheme: dark)")
      .addEventListener("change", (event) => {
        const newColorScheme = event.matches ? "dark" : "light";
        setDarkMode(newColorScheme);
      });
  }, [setDarkMode]);
  useEffect(() => {
    if (darkMode === "dark") {
      document.body.classList.add("dark");
    } else {
      document.body.classList.remove("dark");
    }
  }, [darkMode]);
  const toggleDarkMode = () => {
    setDarkMode((prevState) => {
      return prevState === "light" ? "dark" : "light";
    });
  };
  const btnNormal = "dark-mode-btn";
  const btnActive = "dark-mode-btn dark-mode-btn--active";
  return (
    <button
      className={darkMode === "dark" ? btnActive : btnNormal}
      onClick={toggleDarkMode}
    >
      <img src={sun} alt="Light mode" className="dark-mode-btn__icon" />
      <img src={mun} alt="Dark mode" className="dark-mode-btn__icon" />
    </button>
  );
};
