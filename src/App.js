import "./App.css";
import { Box } from "@chakra-ui/react";
import AllRoutes from "./routes/AllRoutes";
import Navbar from "./components/navbar/Navbar";
import { useLocation } from "react-router-dom";
import Footer from "./components/footer/Footer";
import { useState } from "react";

function App() {
  const location = useLocation();
  // console.log(location);
  const [searchString, setSearchString] = useState();

  function handleSearch(e) {
    // console.log(e.target.value);
    setSearchString(e.target.value);
  }

  return (
    <Box>
      {location.pathname == "/admin" ? (
        ""
      ) : (
        <Navbar handleSearch={handleSearch} />
      )}

      <AllRoutes searchString={searchString} />
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
