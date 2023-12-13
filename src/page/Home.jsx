import { Link } from "react-router-dom";
import FetchByIngredient from "../fetch/FetchGinList";
import "./Home.scss";
const Home = () => {
  return <>
  <FetchByIngredient/>
  <Link to="/cocktaillist">Zu der Cocktailliste</Link>
  </>;
};

export default Home;
