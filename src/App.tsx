import "./App.css";
import { useRef } from "react";


const Home = () => {
    const audioRef = useRef(new Audio("../public/sounds/Water-Drop.mp3"));
    
    function playWaterDrop() {
        audioRef.current.volume = 0.1;
        audioRef.current.currentTime = 0.2;
        audioRef.current.play();
    }

    return(
        <div className="container">
            <header className="header">
                <div className="headerBtnDiv">
                    <button className="headerBtn" onClick={playWaterDrop}>
                        A
                    </button>

                    <button className="headerBtn" onClick={playWaterDrop}>
                        B
                    </button>
                </div>

                <p className="kronosHeaderTitle">
                    Kronos
                </p>

                <div className="headerBtnDiv">
                    <button className="headerBtn" onClick={playWaterDrop}>
                        C
                    </button>

                    <button className="headerBtn" onClick={playWaterDrop}>
                        D
                    </button>
                </div>
            </header>
        </div>
    );
}


export default Home;