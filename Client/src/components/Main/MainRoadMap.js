import React, {
    useState,
    useEffect,
} from "react";
import "../../styles/MainRoadMap.css";
import { useNavigate } from "react-router-dom";
import Header from "../Header";

const MainRoadMap =
    () => {
        return (
            <div id="hero">
                <h3 id="header-subtext-first">
                    OUR
                    ROADMAP
                </h3>
                <h1 id="">
                    {" "}
                    SAMALS
                </h1>
                <h5 id="">
                    Start
                    your
                    NFT
                    collection
                    now
                </h5>
            </div>
        );
    };

export default MainRoadMap;
