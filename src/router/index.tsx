import { createBrowserRouter } from "react-router-dom";
import MainLayout from "../components/Layouts/MainLayouts";
import Home from "../pages/Home/Home";
import Product from "../pages/Product/Product";
import ProductDetail from "../pages/ProductDetail/ProductDetail";
import Cart from "../pages/Cart/Cart";
import Checkout from "../pages/Checkout/Checkout";
import AboutUs from "../pages/AboutUs/AboutUs";
import ConfirmedOrder from "../pages/Checkout/ConfirmedOrder";
import StripeWrapper from "../stripe/StripeWrapper";
import ProductManageMent from "@/pages/ProductManagement/ProductManagement";
import NotFound from "@/pages/Shared/NotFound";

const router = createBrowserRouter([
  {
    path: "/",
    element: <MainLayout />,
    children: [
      {
        index: true,
        element: <Home />,
      },
      {
        index: true,
        path: "product",
        element: <Product />,
      },
      {
        index: true,
        path: "product/:id",
        element: <ProductDetail />,
      },
      {
        index: true,
        path: "cart",
        element: <Cart />,
      },
      {
        index: true,
        path: "checkout",
        element: <Checkout />,
      },
      {
        index: true,
        path: "manage-product",
        element: <ProductManageMent />,
      },
      {
        index: true,
        path: "aboutus",
        element: <AboutUs />,
      },
      {
        index: true,
        path: "confirm",
        element: <ConfirmedOrder />,
      },
      {
        index: true,
        path: "payment",
        element: <StripeWrapper />,
      },
      {
        path: "*",
        element: <NotFound />,
      },
    ],
  },
]);

export default router;
