import "./App.css";
import { useNavigate } from "react-router-dom";
import Header from "./components/header/Header";

const Home = () => {
    const navigate = useNavigate();

    return(
        <div className="container">
            <Header />

            <div className="mainContent">
                <div className="mainContentBtn">
                    <div className="iconContentBtn" />
                </div>

                <div className="mainContentBtn">
                    <div className="iconContentBtn" />
                </div>

                <div className="mainContentBtn">
                    <div className="iconContentBtn" />
                </div>

                <div className="mainContentBtn">
                    <div className="iconContentBtn" />
                </div>
            </div>
        </div>
    );
}


export default Home;