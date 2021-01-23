const Hero = () => {
  const section = document.createElement("section");
  section.classList.add("hero-bg", "py-11");

  const container = document.createElement("div");
  container.classList.add("container", "mx-auto", "px-2");
  section.appendChild(container);

  const grid = document.createElement("div");
  grid.classList.add("grid", "grid-cols-2", "gap-4");
  container.append(grid);

  const card = document.createElement("div");
  grid.appendChild(card);

  const tagline = document.createElement("p");
  tagline.classList.add("text-sm", "mb-2", "text-white");
  tagline.innerHTML = "Greatest pizza around";
  card.append(tagline);

  const title = document.createElement("h2");
  title.classList.add("text-3xl", "mb-4", "text-white");
  title.innerHTML = `Lorem Ipsum Pizzeria`;
  card.append(title);

  const subtitle = document.createElement("p");
  subtitle.classList.add("text-base", "mb-5", "text-white");
  subtitle.innerHTML = `Lorem ipsum dolor sit amet consectetur adipisicing elit. Sit,
  accusantium corrupti! Vitae eum voluptatum cumque voluptates
  dolorem, molestiae possimus iusto.`;
  card.append(subtitle);

  const cta = document.createElement("button");
  cta.classList.add(
    "uppercase",
    "px-8",
    "py-2",
    "bg-yellow-500",
    "text-blue-50",
    "max-w-max",
    "shadow-sm",
    "hover:shadow-lg"
  );
  cta.innerHTML = "Order Now";
  card.appendChild(cta);

  return section;
};

export default Hero;
