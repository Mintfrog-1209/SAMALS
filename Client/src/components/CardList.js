import { useState, useEffect } from "react";
import MNFTCard from "./MNFTCard";
import "../styles/CardList.css";
import { useNavigate } from "react-router-dom";
import { $, jQuery } from "jquery";
import "../styles/AnimalFillter.css";
import shark from "../assets/fillter/shark.png";
import tiger from "../assets/fillter/tiger.png";
import iguana from "../assets/fillter/iguana.png";
import tiger2 from "../assets/fillter/tiger2.png";
import tiger4 from "../assets/fillter/tiger4.png";
import elephant from "../assets/fillter/elephant.png";
import elephant2 from "../assets/fillter/elephant2.png";
import elephant3 from "../assets/fillter/elephant3.png";
import elephant5 from "../assets/fillter/elephant5.png";
import toucan from "../assets/fillter/toucan.png";
import iguana2 from "../assets/fillter/iguan-col.png";
import shark3 from "../assets/fillter/shark3.png";
import toad from "../assets/fillter/toad.png";
import toad2 from "../assets/fillter/toad2.png";

// declare var $: $;

const CardList = ({ list, type = "horizontal" }) => {
  // 동물 필터
  const [activeAnimal, setActiveAnimal] = useState("All");
  const [animal, setAnimal] = useState(list);
  let navigate = useNavigate();

  // 필터링 함수
  // $(function () {
  //   $(".toggles button").click(function () {
  //     var get_id = this.id;
  //     var get_current = $(".posts ." + get_id);

  //     $(".post").not(get_current).hide(500);
  //     get_current.show(500);
  //   });

  //   $("#showall").click(function () {
  //     $(".post").show(500);
  //   });
  // });

  // 동물 필터
  useEffect(() => {
    activeAnimal === "All"
      ? setAnimal(list)
      : setAnimal(list.filter((vga) => vga.species === activeAnimal));
  }, [activeAnimal]);

  return (
    <div>
      <div className='toggles'>
        {/* <button id="showall">Show All</button> */}
        <button animalActive={activeAnimal === "tiger" ? true : false} onClick={setActiveAnimal}>
          <img className='animal-fillter' src={tiger4} />{" "}
          <h2 className='animal-name'> {"Tiger"} </h2>
        </button>
        <button>
          <img className='animal-fillter' src={elephant5} />
          <h2 className='animal-name'> {"Elephant"} </h2>
        </button>
        <button>
          <img className='animal-fillter' src={toad2} />
          <h2 className='animal-name'> {"Toad"} </h2>
        </button>
        <button>
          {/* {"ddd "} */}
          <img className='animal-fillter' src={shark3} />{" "}
          <h2 className='animal-name'> {"Shark"} </h2>
        </button>
        <button>
          <img className='animal-fillter' src={toucan} />{" "}
          <h2 className='animal-name'> {"Toucan"} </h2>
        </button>
        {/* <button>
          <img className="animal-fillter" src={elephant2} />{" "}
        </button> */}
        {/* <button id="web">호랑이</button>
        <button id="ux">사자</button>
        <button id="graphic">백상아리</button>
        <button id="motion">토끼</button> */}
      </div>

      <div id='card-list' style={{ flexDirection: type == "horizontal" ? "row" : "column" }}>
        {list &&
          list.map((item, index) => (
            <MNFTCard
              nftSrc={item.src}
              key={index}
              onClick={() => navigate("/detail", { state: { item: item } })}
            />
          ))}
      </div>
    </div>
  );
};

export default CardList;
