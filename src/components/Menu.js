const Menu = () => {
  const section = document.createElement("section");
  section.classList.add("py-11");

  const container = document.createElement("div");
  container.classList.add("container", "mx-auto", "px-2");
  section.appendChild(container);

  const textCenter = document.createElement("div");
  textCenter.classList.add("text-center");
  container.append(textCenter);

  const pageTitle = document.createElement("h2");
  pageTitle.classList.add("text-3xl", "mb-4");
  pageTitle.innerHTML = "MENU";
  textCenter.append(pageTitle);

  const hr = document.createElement("hr");
  hr.classList.add("mb-8");
  textCenter.append(hr);

  const card1 = document.createElement("div");
  card1.classList.add("mb-6");
  textCenter.appendChild(card1);

  const title1 = document.createElement("h2");
  title1.classList.add("text-2xl", "mb-4");
  title1.innerHTML = `Pizza #1`;
  card1.append(title1);

  const description1 = document.createElement("p");
  description1.classList.add("text-base");
  description1.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
  accusantium corrupti! Vitae eum voluptatum cumque voluptates
  dolorem, molestiae possimus iusto.`;
  card1.append(description1);

  const card2 = document.createElement("div");
  card2.classList.add("mb-6");
  textCenter.appendChild(card2);

  const title2 = document.createElement("h2");
  title2.classList.add("text-2xl", "mb-4");
  title2.innerHTML = `Pizza #2`;
  card2.append(title2);

  const description2 = document.createElement("p");
  description2.classList.add("text-base");
  description2.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
  accusantium corrupti! Vitae eum voluptatum cumque voluptates
  dolorem, molestiae possimus iusto.`;
  card2.append(description2);

  const card3 = document.createElement("div");
  card3.classList.add("mb-6");
  textCenter.appendChild(card3);

  const title3 = document.createElement("h2");
  title3.classList.add("text-2xl", "mb-4");
  title3.innerHTML = `Pizza #3`;
  card3.append(title3);

  const description3 = document.createElement("p");
  description3.classList.add("text-base");
  description3.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
  accusantium corrupti! Vitae eum voluptatum cumque voluptates
  dolorem, molestiae possimus iusto.`;
  card3.append(description3);

  return section;
};

export default Menu;
