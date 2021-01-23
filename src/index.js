import "./style.css";
import Header from "./components/Header";
import Hero from "./components/Hero";
import Menu from "./components/Menu";
import Contact from "./components/Contact";

(() => {
  const content = document.getElementById("content");
  const heroContent = Hero();
  const menuContent = Menu();
  const contactContent = Contact();

  const clearContent = () => {
    menu.childNodes.forEach((menuItem) => {
      menuItem.firstChild.classList.remove("bg-yellow-200");
    });
    content.lastChild.remove();
  };

  const renderNewContent = (e) => {
    const menuItem = e.target.dataset.item;
    menuItem && clearContent();
    if (menuItem === "home") {
      document.getElementById("content").appendChild(heroContent);
      e.target.classList.add("bg-yellow-200");
    }
    if (menuItem === "menu") {
      document.getElementById("content").appendChild(menuContent);
      e.target.classList.add("bg-yellow-200");
    }
    if (menuItem === "contact-us") {
      document.getElementById("content").appendChild(contactContent);
      e.target.classList.add("bg-yellow-200");
    }
  };

  content.appendChild(Header());
  document.getElementById("content").appendChild(Hero());

  window.addEventListener("DOMContentLoaded", () => {
    const menu = document.getElementById("menu");
    menu.firstChild.firstChild.classList.add("bg-yellow-200");
    menu.addEventListener("click", renderNewContent);
  });
})();
