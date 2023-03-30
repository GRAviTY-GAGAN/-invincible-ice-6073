import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Landing from "../pages/Landing";
import ProductsPage from "../pages/ProductsPage";

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
      </Routes>
    </Box>
  );
};

export default AllRoutes;
