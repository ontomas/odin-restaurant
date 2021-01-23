const Header = () => {
  const header = document.createElement("header");

  const nav = document.createElement("nav");
  nav.classList.add("container", "mx-auto", "p-2");
  header.appendChild(nav);

  const flex = document.createElement("div");
  flex.classList.add("flex", "justify-between");
  nav.appendChild(flex);

  const logo = document.createElement("div");
  logo.innerHTML = "LOGO";
  flex.appendChild(logo);

  const ul = document.createElement("ul");
  ul.setAttribute("id", "menu");
  ul.classList.add("flex");
  flex.appendChild(ul);

  const li1 = document.createElement("li");
  const li2 = document.createElement("li");
  const li3 = document.createElement("li");

  li1.classList.add("px-2");
  li2.classList.add("px-2");
  li3.classList.add("px-2");

  const menuLink1 = document.createElement("a");
  const menuLink2 = document.createElement("a");
  const menuLink3 = document.createElement("a");

  menuLink1.setAttribute("data-item", "home");
  menuLink2.setAttribute("data-item", "menu");
  menuLink3.setAttribute("data-item", "contact-us");

  menuLink1.setAttribute("href", "#");
  menuLink2.setAttribute("href", "#");
  menuLink3.setAttribute("href", "#");

  menuLink1.innerHTML = "HOME";
  menuLink2.innerHTML = "MENU";
  menuLink3.innerHTML = "CONTACT US";

  li1.appendChild(menuLink1);
  li2.appendChild(menuLink2);
  li3.appendChild(menuLink3);

  ul.appendChild(li1);
  ul.appendChild(li2);
  ul.appendChild(li3);

  return header;
};

export default Header;
