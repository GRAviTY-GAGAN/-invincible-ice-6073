import { Box } from "@chakra-ui/react";
import React from "react";
import { Route, Routes } from "react-router-dom";
import Admin from "../pages/Admin";
import Landing from "../pages/Landing";

const AllRoutes = () => {
  return (
    <Box>
      <Routes>
        <Route path="/" element={<Landing />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
    </Box>
  );
};

export default AllRoutes;
