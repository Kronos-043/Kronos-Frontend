import "./App.css";
import { useNavigate } from "react-router-dom";
import Header from "./components/header/Header";
import { CalendarPlus, Users, PersonStandingIcon, ClockPlus } from "lucide-react";

const Home = () => {
    const navigate = useNavigate();

    return(
        <div className="container">
            <Header />

            <main className="mainContent">
                <h1 className="welcomeTitle">Kronos</h1>
                <p className="welcomeSubtitle">Gerencie os horários escolares</p>

                <div className="gridContent">
                    <button className="mainContentBtn" onClick={() => navigate("/newSchedule")}>
                        <CalendarPlus size={48} className="iconContentBtn" />
                        <span className="btnLabel">Novo Horário</span>
                    </button>

                    <button className="mainContentBtn" onClick={() => navigate("/classes")}>
                        <PersonStandingIcon size={48} className="iconContentBtn" />
                        <span className="btnLabel">Cursos</span>
                    </button>

                    <button className="mainContentBtn" onClick={() => navigate("/teachers")}>
                        <Users size={48} className="iconContentBtn" />
                        <span className="btnLabel">Professores</span>
                    </button>

                    <button className="mainContentBtn" onClick={() => navigate("/editSchedule")}>
                        <ClockPlus size={48} className="iconContentBtn" />
                        <span className="btnLabel">Editar horário</span>
                    </button>
                </div>
            </main>
        </div>
    );
}


export default Home;