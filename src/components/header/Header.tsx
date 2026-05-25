import { BookOpenText, Database, HomeIcon, Settings } from "lucide-react";
import "./Header.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Header = () => {

    const navigate = useNavigate();
    const audioRef = useRef(new Audio("/sounds/Water-Drop.mp3"));
    function playWaterDrop() {
        audioRef.current.volume = 0.3;
        audioRef.current.currentTime = 0.2;
        audioRef.current.play();
    }


    return(
        <header className="header">
            <div className="headerBtnDiv">
                <button data-tooltip-id="myTooltip" data-tooltip-content="Visualizar home" className="headerBtn" onClick={() => {
                    playWaterDrop();
                    navigate("/");
                }}>
                    <HomeIcon />
                </button>

                <button data-tooltip-id="myTooltip" data-tooltip-content="Horários passados" className="headerBtn" onClick={playWaterDrop}>
                    <Database />
                </button>
            </div>
            <p className="kronosHeaderTitle">
                {/* Kronos */}
            </p>

            <div className="headerBtnDiv">
                <button data-tooltip-id="myTooltip" data-tooltip-content="Sobre os autores" className="headerBtn" onClick={() => {
                    playWaterDrop();
                    navigate("/about");
                }}>
                    <BookOpenText />
                </button>

                <button data-tooltip-id="myTooltip" data-tooltip-content="Abrir configurações" className="headerBtn" onClick={() => {
                    playWaterDrop();
                    navigate("/settings");
                }}>
                    <Settings />
                </button>

            </div>
            <Tooltip id="myTooltip" /> 
        </header>
    );
}

export default Header;