import React, {
    useState,
    useEffect,
} from "react";
import "../../styles/MainToken.css";
import title from "../../assets/our-token.png";
import { useNavigate } from "react-router-dom";
import Header from "../Header";
import coinimg from "../../assets/coin-img.png";
const MainToken =
    () => {
        return (
            <div
                id="hero"
                class="box-container"
            >
                <div>
                    <img
                        width="500px"
                        src={
                            title
                        }
                    />

                    <h5 id="header-subtext-second">
                        멸종하는
                        많은
                        동물들의
                        생존을
                        위해,{" "}
                        <br />
                        저희
                        올청이팀은
                        멸종
                        동물
                        개체
                        수와
                        동일하게
                        <br />
                        한정된
                        수량의
                        ACE
                        토큰을
                        발행하기로
                        했습니다.
                        <br />
                        <br />
                        ACE
                        토큰은
                        ERC-20
                        표준을
                        지원하며
                        Samals
                        플랫폼
                        내
                        기부,
                        거래에
                        사용됩니다.
                        <br />
                        ACE
                        토큰을
                        통해
                        Animal
                        NFT인
                        AMT
                        토큰을
                        분배
                        받을
                        수
                        있습니다.{" "}
                        <br />
                        AMT
                        토큰은
                        '아틀란티스
                        아일랜드'에서
                        살아있는
                        3D
                        동물의
                        모습으로
                        확인할
                        수
                        있습니다.
                    </h5>
                </div>
                <div class="autonft">
                    <div class="jump">
                        <img
                            width="340"
                            height="340"
                            src={
                                coinimg
                            }
                        />{" "}
                    </div>
                </div>
            </div>
        );
    };

export default MainToken;
