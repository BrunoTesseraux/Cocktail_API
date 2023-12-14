import "./App.scss";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Header from "./components/header/header";
import Footer from "./components/footer/footer";
import Home from "./page/Home";
import CocktailList from "./components/CocktailList/CocktailList";
import SearchResultList from "./components/CocktailList/SearchResultList"; //NUR ZUM TESTEN
import { useEffect, useState } from "react";

import {
  AlcFreeContext,
  AllIngredientsContext,
  FavListContext,
  GinContext,
  RandomCocktailContext,
  RumContext,
  VodkaContext,
} from "./components/Context/Context";

// import fetches 
import FetchGinList from "./fetch/FetchGinList";
import FetchVodkaList from "./fetch/FetchVodkaList";
import FetchRumList from "./fetch/FetchRumList";
import FetchAlcFreeList from "./fetch/FetchAlcFreeList";
import FetchRandomList from "./fetch/FetchRandomList";
import FetchAllIngredients from "./fetch/FetchAllIngredients";

function App() {
  // states ingredients
  const [ginCocktailsList, setGinCocktailsList] = useState([]);
  const [vodkaCocktailsList, setVodkaCocktailsList] = useState([]);
  const [rumCocktailsList, setRumCocktailsList] = useState([]);
  const [alcFreeCocktailsList, setAlcFreeCocktailsList] = useState([]);
  const [randomCocktail, setRandomCocktail] = useState([]);
  const [allIngredients, setAllIngredients] = useState([]);

  // get local storage
  const getLocalData = () => {
    const favListLocal = localStorage.getItem('drink');
    return favListLocal ? JSON.parse(favListLocal) : [];
  };
  // local storage state
  const [favCocktails, setFavCocktails] = useState(getLocalData);
  
  // update local data eachtime state changes
  useEffect(() => {
    setFavCocktails(getLocalData)
  }, [FavListContext]);

  return (
    <>
      <BrowserRouter>
        <GinContext.Provider value={{ ginCocktailsList, setGinCocktailsList }}>
          <VodkaContext.Provider
            value={{ vodkaCocktailsList, setVodkaCocktailsList }}
          >
            <RumContext.Provider
              value={{ rumCocktailsList, setRumCocktailsList }}
            >
              <AlcFreeContext.Provider
                value={{ alcFreeCocktailsList, setAlcFreeCocktailsList }}
              >
                <RandomCocktailContext.Provider
                  value={{ randomCocktail, setRandomCocktail }}
                >
                  <AllIngredientsContext.Provider value={{allIngredients, setAllIngredients}}>
      
                    <FavListContext.Provider value={{favCocktails, setFavCocktails}}> 

                        {/* Fetch Components*/}
                        <FetchGinList />
                        <FetchVodkaList />
                        <FetchRumList />
                        <FetchAlcFreeList />
                        <FetchRandomList />
                        <FetchAllIngredients />
                        <Header />
                        <Routes>
                          <Route path="/" element={<Home />} />
                          {/* path to cocktail list component  */}
                          <Route path="/cocktails/:name" element={< CocktailList />} />

                          {/* NUR ZUM TESTEN */}
                          <Route path="/:name" element={< SearchResultList />} />
                        </Routes>
                      <Footer />
                    </FavListContext.Provider>
                  </AllIngredientsContext.Provider>
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
