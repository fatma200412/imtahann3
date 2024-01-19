import Add from "../pages/add";
import Basket from "../pages/basket";
import Details from "../pages/details";
import Root from "../pages/root";
import Wishlist from "../pages/wishlist";
import Home from "../pages/home";

export const routerss = [
  {
    path: "/",
    element: <Root />,
    children: [
      {
        path: "/",
        element: <Home />,
      },
      {
        path: "/:id",
        element: <Details />,
      },
      {
        path: "/basket",
        element: <Basket />,
      },
      {
        path: "/wishlist",
        element: <Wishlist />,
      },
      {
        path: "/add",
        element: <Add />,
      },
    ],
  },
];
