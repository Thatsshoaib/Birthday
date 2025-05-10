import { BrowserRouter as Router, Routes, Route } from "react-router-dom"; // Import router components
import Home from "./Components/Home"; // Correct the import for Home component
import Carousel from "./Components/Carousel"; // Assuming Carousel component is located here
import BirthdayLetter from "./Components/Letter";

function App() {
  return (
    <>
    <BirthdayLetter/>
    </>
    // <Router> {/* Wrap the whole app in Router */}
    //   <Routes>
    //     {/* Define your routes here */}
    //     <Route path="/" element={<Home />} /> {/* Home component on the root path */}
    //     <Route path="/carousel" element={<Carousel />} /> {/* Carousel component on /carousel path */}
    //   </Routes>
    // </Router>
  );
}

export default App;
