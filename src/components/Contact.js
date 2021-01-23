const Contact = () => {
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
  pageTitle.innerHTML = "CONTACT US";
  textCenter.append(pageTitle);

  const hr = document.createElement("hr");
  hr.classList.add("mb-8");
  textCenter.append(hr);

  const card1 = document.createElement("div");
  card1.classList.add("mb-6", "text-left");
  textCenter.appendChild(card1);

  const title1 = document.createElement("h2");
  title1.classList.add("text-2xl", "mb-4");
  title1.innerHTML = `Pizzeria #1`;
  card1.append(title1);

  const description1 = document.createElement("p");
  description1.classList.add("text-base");
  description1.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit.`;
  card1.append(description1);

  return section;
};

export default Contact;
