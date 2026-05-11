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