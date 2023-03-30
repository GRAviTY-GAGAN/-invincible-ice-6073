import "./App.css";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";

function App() {
  const location = useLocation();
  // console.log(location);

  return (
    <Box>
      {location.pathname == "/admin" ? "" : <Navbar />}

      <AllRoutes />
      <Box
        p={{ base: "0.5rem", md: "1rem", "2xl": "3rem" }}
        pt={"3rem"}
        pb={"3rem"}
        m={6}
      >
        <Footer />
      </Box>
    </Box>
  );
}

export default App;
