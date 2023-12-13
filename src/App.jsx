import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./page/Home";
import CocktailList from "./components/CocktailList/CocktailList";
import CocktailDetails from "./components/CocktailDetails/CocktailDetails";
import Fetch from "./page/Fetch";
import Fetch2 from "./page/Fetch2";
import Fetch3 from "./page/Fetch3";
import Fetch4 from "./page/Fetch4";
import Fetch5 from "./page/Fetch5";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <Fetch/>
          <Fetch2/>
          <Fetch3/>
          <Fetch4/>
          <Fetch5/>
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<CocktailList />} />
          <Route path="/cocktail/:id" element={<CocktailDetails />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
