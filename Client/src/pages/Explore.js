import react from "react";
import CardList from "../components/Explore/ECardList";
import { exploreList } from "../constants/ExploreDatay";
import "../styles/Explore/Explore.css";
import Search from "../components/Search";
import MainLast from "../components/Main/MainLast";
import Market from "../assets/market.png";
import { getDescription } from "../api";
const Explore = () => {
  const response = getDescription();
  console.log(response);
  return (
    <div id="explore">
      <img className="market-img" src={Market}></img>
      <div id="list-container">
        <CardList list={exploreList} />
      </div>
      <MainLast />
    </div>
  );
};

export default Explore;
