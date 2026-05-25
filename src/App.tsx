import "./App.css";
import { useNavigate } from "react-router-dom";
import Header from "./components/header/Header";

const Home = () => {
    const navigate = useNavigate();

    return(
        <div className="container">
            <Header />

            <div className="mainContent">
                <button className="mainContentBtn">
                    <div className="iconContentBtn" />
                </button>

                <button className="mainContentBtn">
                    <div className="iconContentBtn" />
                </button>

                <button className="mainContentBtn">
                    <div className="iconContentBtn" />
                </button>

                <button className="mainContentBtn" onClick={() => navigate("/classes")}>
                    <div className="iconContentBtn" />
                </button>
            </div>
        </div>
    );
}


export default Home;