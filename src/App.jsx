import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./page/Home";
import CocktailList from "./components/CocktailList/CocktailList";
import CocktailDetails from "./components/CocktailDetails/CocktailDetails";
import FetchByName from "./fetch/FetchByName";
import FetchById from "./fetch/FetchById";
import FetchByIngredient from "./fetch/FetchByIngredient";
import FetchAllIngredients from "./fetch/FetchAllIngredients";
import FetchRandom from "./fetch/FetchRandom";


function App() {
  return (
    <>
      <BrowserRouter>
        <Header />
          <FetchByName/>
          <FetchById/>
          <FetchByIngredient/>
          <FetchAllIngredients/>
          <FetchRandom/>
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
