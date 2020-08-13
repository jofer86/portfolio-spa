import Home from "../pages/Home";
import TopNav from "../templates/TopNav";
import Error404 from "../pages/Error404";
import getHash from "../utils/getHash";
import resolveRoutes from "../utils/resolveRoutes";

const routes = {
  "/": Home,
};

const router = async () => {
  const sidenav = null || document.getElementById("top-nav");
  const content = null || document.getElementById("content");

  sidenav.innerHTML = await TopNav();
  const hash = getHash();

  const route = await resolveRoutes(hash);

  const render = routes[route] ? routes[route] : Error404;
  content.innerHTML = await render();
};

export default router;
