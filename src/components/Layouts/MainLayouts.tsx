import { useEffect } from "react";
import { Outlet } from "react-router-dom";
import { useAppSelector } from "../../redux/hooks";
import Footer from "@/pages/Shared/Footer";
import Navbar from "@/pages/Shared/Navbar";

const MainLayout = () => {
  const { items } = useAppSelector((state) => state.cart);

  useEffect(() => {
    window.onbeforeunload = function () {
      return !!items.length;
    };
  });
  return (
    <div className="">
      <Navbar />
      <Outlet></Outlet>
      <Footer />
    </div>
  );
};
export default MainLayout;
