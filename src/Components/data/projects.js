import img1 from "./img/crypto-atlas.png";
import img2 from "./img/dict.png";
import img3 from "./img/memory-card.png";
import img4 from "./img/e-commerce.png";
import img5 from "./img/todo.png";
export const projects = [
  {
    id: 1,
    img: img1,
    title: "Crypto Atlas",
    desc: "Cryptocurrency tracker with the ability to register and track selected cryptocurrencies.",
    stack: ["ReactJS", "ChartJS", "Material UI"],
    urlDemo: "https://crypto-atlas.herokuapp.com/",
    urlRepo: "https://github.com/SamHeatfield1199/cryptocurrency-tracker",
  },
  {
    id: 2,
    img: img2,
    title: "Dictionary",
    desc: "Minimalistic dictionary PWA supporting 12 languages. Contains Rus/Eng ver. and Dark/Light Mode.",
    stack: ["ReactJS", "Material UI"],
    urlDemo: "https://react-dict.herokuapp.com/",
    urlRepo: "https://github.com/SamHeatfield1199/dictionary",
  },
  {
    id: 3,
    img: img3,
    title: "Memory card game",
    desc: "Simple card game to train skills of css animation and react hooks",
    stack: ["ReactJS"],
    urlDemo: "https://mem-memory-game.herokuapp.com/",
    urlRepo: "https://github.com/SamHeatfield1199/memory-game",
  },
  {
    id: 4,
    img: img4,
    title: "SWUG",
    desc: "Completely working site with the ability to add items to the cart and subsequent payment (in test mode)",
    stack: ["ReactJS", "Material UI"],
    urlDemo: "",
    urlRepo: "https://github.com/SamHeatfield1199/e-commerce",
  },
  {
    id: 5,
    img: img5,
    title: "To-do List",
    desc: "Simple but pretty draggable to-do list",
    stack: ["ReactJS"],
    urlDemo: "https://to-do-draggable-list.herokuapp.com/",
    urlRepo: "https://github.com/SamHeatfield1199/to-do_list",
  },
];
