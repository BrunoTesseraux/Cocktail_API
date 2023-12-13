import { Link } from "react-router-dom";
import "./Home.scss";
import FetchGinList from "../fetch/FetchGinList";
import FetchVodkaList from "../fetch/FetchVodkaList";
import FetchAlcFreeList from "../fetch/FetchAlcFreeList";
import FetchRumList from "../fetch/FetchRumList";
import FetchRandomList from "../fetch/FetchRandomList";
const Home = () => {
  return (
    <>
      {/* Gin */}
      <FetchGinList />
      <Link to="/gin">zur Gin Liste</Link>

      {/* Vodka */}
      <FetchVodkaList />
      <Link to="/vodka">zur Vodka Liste</Link>

      {/* Rum */}
      <FetchRumList />
      <Link to="/rum">zur Rum Liste</Link>

      {/* Alkoholfrei */}
      <FetchAlcFreeList />
      <Link to="/alcfree">zur Alkoholfrei Liste</Link>

      {/* Random */}
      <FetchRandomList />
      <Link to="/random">zur Random Liste</Link>
    </>
  );
};

export default Home;
