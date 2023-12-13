import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./page/Home";
import GinCocktailList from "./components/CocktailList/GinCocktailList";
import CocktailDetails from "./components/CocktailDetails/CocktailDetails";
import TestList from "./components/TestList"; //NUR ZUM TESTEN
import { useState } from "react";

// useContext: Gin, Vodka, Rum, Alkoholfrei
import {
  AlcFreeContext,
  GinContext,
  RandomCocktailContext,
  RumContext,
  VodkaContext,
} from "./components/Context/Context";

import FetchGinList from "./fetch/FetchGinList";
import FetchVodkaList from "./fetch/FetchVodkaList";
import FetchRumList from "./fetch/FetchRumList";
import FetchAlcFreeList from "./fetch/FetchAlcFreeList";
import FetchRandomList from "./fetch/FetchRandomList";

function App() {
  // useState() für Gin, Vodka, Rum, Alkoholfrei, Random
  const [ginCocktailsList, setGinCocktailsList] = useState([]);
  const [vodkaCocktailsList, setVodkaCocktailsList] = useState([]);
  const [rumCocktailsList, setRumCocktailsList] = useState([]);
  const [alcFreeCocktailsList, setAlcFreeCocktailsList] = useState([]);
  const [randomCocktail, setRandomCocktail] = useState([]);

  return (
    <>
      <BrowserRouter>
      <GinContext.Provider value={{ginCocktailsList, setGinCocktailsList}}>
        <VodkaContext.Provider value={{vodkaCocktailsList, setVodkaCocktailsList}}>
          <RumContext.Provider value={{rumCocktailsList, setRumCocktailsList}}>
            <AlcFreeContext.Provider value={{alcFreeCocktailsList, setAlcFreeCocktailsList}}>
              <RandomCocktailContext.Provider value={{randomCocktail, setRandomCocktail}}>

              {/* Fetch Components Gin, Vodka, Rum, Alkoholfrei, Random */}
              <FetchGinList/>
              <FetchVodkaList />
              <FetchRumList />
              <FetchAlcFreeList />
              <FetchRandomList />
              <Header />
              <Routes>
                <Route path="/" element={<Home />} />
                <Route path="/cocktaillist" element={<GinCocktailList />} />
                <Route path="/cocktail/:id" element={<CocktailDetails />} />
                {/* NUR ZUM TESTEN */}
                <Route path="/test-cocktail/:name" element={<TestList />} /> 
              </Routes>
              <Footer />
              </RandomCocktailContext.Provider>
            </AlcFreeContext.Provider>
          </RumContext.Provider>
        </VodkaContext.Provider>
      </GinContext.Provider>
      </BrowserRouter>
    </>
  );
}

export default App;
