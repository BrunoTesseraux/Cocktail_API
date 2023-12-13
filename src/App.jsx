import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./page/Home";
import CocktailList from "./components/CocktailList/CocktailList";
import CocktailDetails from "./components/CocktailDetails/CocktailDetails";
import TestList from "./components/TestList"; //NUR ZUM TESTEN

function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/cocktails" element={<CocktailList />} />
          <Route path="/cocktail/:id" element={<CocktailDetails />} />
          {/* NUR ZUM TESTEN */}
          <Route path="/test-cocktail/:name" element={<TestList />} /> 
        </Routes>
        <Footer />
      </BrowserRouter>
    </>
  );
}

export default App;
