import Header from "../../components/header/Header";
import "./Classes.css";
import { useState, useEffect } from "react";

const Classes = () => {
    const [anyActive, isAnyActive] = useState(false);

    return(
        <div className="containerClasses">
            <Header />
            <div className="mainContent2Classes">
                <section className="biggestHalfContentClasses" style={{ width: anyActive ? "60%" : "100%" }}>
                    {/* Vai ter que colocar um Map com banco de dados aqui. */}
                    <button className="classItem" onClick={() => isAnyActive(!anyActive)}>
                        exemplo
                    </button>
                </section>

                <section className="smallestHalfContentClasses" style={{ display: anyActive ? "flex" : "none" }}>
                    
                </section>
            </div>
        </div>
    );
}

export default Classes;