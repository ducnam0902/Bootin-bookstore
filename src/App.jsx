import Header from "./components/Header";
import { HashRouter, Routes, Route } from "react-router-dom";
import "./App.scss";
import Footer from "./components/Footer";
import Homepage from "./page/Homepage";
import Shop from "./page/Shop";
import Author from "./page/Author";
import Blog from "./page/Blog";
import Contact from "./page/Contact";

const App = () => {
  return (
    <div>
      <HashRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Homepage />} />
          <Route path="/shop" element={<Shop />} />
          <Route path="/blog" element={<Blog />} />
          <Route path="/author" element={<Author />} />
          <Route path="/contact" element={<Contact />} />
        </Routes>
        <Footer />
      </HashRouter>
    </div>
  );
};

export default App;
