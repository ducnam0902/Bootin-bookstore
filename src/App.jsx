import Header from "./components/Header";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";

const App = () => {
  return (
    <div>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<a>sa</a>} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </div>
  );
};

export default App;
