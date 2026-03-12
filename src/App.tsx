import { BookOpenText, Database, HomeIcon, Settings } from "lucide-react";
import "./App.css";
import { useRef } from "react";

const Home = () => {
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
                    <button className="headerBtn" onClick={playWaterDrop}>
                        <HomeIcon />
                    </button>

                    <button className="headerBtn" onClick={playWaterDrop}>
                        <Database />
                    </button>
                </div>

                <p className="kronosHeaderTitle">
                    Kronos
                </p>

                <div className="headerBtnDiv">
                    <button className="headerBtn" onClick={playWaterDrop}>
                        <BookOpenText />
                    </button>

                    <button className="headerBtn" onClick={playWaterDrop}>
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
        </div>
    );
}


export default Home;