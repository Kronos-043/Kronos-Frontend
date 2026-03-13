import { BookOpenText, Database, HomeIcon, Settings } from "lucide-react";
import "./App.css";
import { useRef } from "react";
import { useNavigate } from "react-router-dom";
import { Tooltip } from "react-tooltip";

const Home = () => {
    const navigate = useNavigate();
    const audioRef = useRef(new Audio("/sounds/Water-Drop.mp3"));
    function playWaterDrop() {
        audioRef.current.volume = 0.3;
        audioRef.current.currentTime = 0.2;
        audioRef.current.play();
    }

    return(
        <div className="container">
            <header className="header">
                <div className="headerBtnDiv">
                    <button data-tooltip-id="myTooltip" data-tooltip-content="Visualizar Home" className="headerBtn" onClick={playWaterDrop}>
                        <HomeIcon />
                    </button>

                    <button data-tooltip-id="myTooltip" data-tooltip-content="Visualizar Banco" className="headerBtn" onClick={playWaterDrop}>
                        <Database />
                    </button>
                </div>

                <p className="kronosHeaderTitle">
                    Kronos
                </p>

                <div className="headerBtnDiv">
                    <button data-tooltip-id="myTooltip" data-tooltip-content="Sobre os Autores" className="headerBtn" onClick={playWaterDrop}>
                        <BookOpenText />
                    </button>

                    <button data-tooltip-id="myTooltip" data-tooltip-content="Abrir configurações" className="headerBtn" onClick={() => {
                        playWaterDrop();
                        navigate("/settings");
                    }}>
                        <Settings />
                    </button>

                </div>
            </header>

            <div className="mainContent">
                <div className="mainContentBtn">
                    A
                </div>

                <div className="mainContentBtn">
                    B
                </div>

                <div className="mainContentBtn">
                    C
                </div>

                <div className="mainContentBtn">
                    D
                </div>
            </div>

            <Tooltip id="myTooltip" />   
        </div>
    );
}


export default Home;