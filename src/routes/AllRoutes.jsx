import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Landing from "../pages/Landing";
import ProductsPage from "../pages/ProductsPage";
import SingleProduct from "../pages/SingleProduct";
import Login from "../pages/Login";
import Signup from "../pages/Signup";

const AllRoutes = ({ searchString }) => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
        <Route
          path="/products"
          element={<ProductsPage searchString={searchString} />}
        />
        <Route path="/singleProduct" element={<SingleProduct />} />
        <Route path="/login" element={<Login />} />
        <Route path="/signup" element={<Signup />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
