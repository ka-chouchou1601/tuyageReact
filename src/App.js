import { BrowserRouter
   as Router, Routes, Route } from "react-router-dom";
import Home from "./Components/Views/Home/Home";
import { ChakraProvider } from "@chakra-ui/react";

function App() {
  return (
    <Router>
      <Routes>
        <Route path="/" element={<Home />} />
      </Routes>
    </Router>
  );
}

export default App;
