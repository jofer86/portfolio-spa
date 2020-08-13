import router from "./routes/index";
import getHash from "./utils/getHash";
import indexLogic from "./assets/js/indexLogic";
import "./assets/css/style.css";

const logicInjector = (hash) => {
  switch (hash) {
    case "/":
      indexLogic();
      break;
  }
};

window.addEventListener("load", async function () {
  await router();
  logicInjector("/");
});
window.addEventListener("hashchange", async function () {
  await router();
  logicInjector(getHash());
});
