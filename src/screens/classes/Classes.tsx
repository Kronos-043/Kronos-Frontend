import Header from "../../components/header/Header";
import "./Classes.css";
import { useState } from "react";

interface ClassData {
    id: number;
    name: string;
    code: string;
    coordinator: string;
    period: string;
    description: string;
}

const classesData: ClassData[] = [
    {
        id: 1,
        name: "Eletrotécnica",
        code: "ELT",
        coordinator: "Prof. Carlos",
        period: "Manhã / Noite",
        description: "Formação técnica em instalações elétricas, máquinas e equipamentos elétricos industriais."
    },
    {
        id: 2,
        name: "Eletrônica",
        code: "ELN",
        coordinator: "Profª Ana",
        period: "Tarde / Noite",
        description: "Desenvolvimento de circuitos eletrônicos, sistemas embarcados e automação."
    },
    {
        id: 3,
        name: "Desenvolvimento de Sistemas",
        code: "DS",
        coordinator: "Prof. Rafael",
        period: "Manhã / Tarde",
        description: "Programação, banco de dados, engenharia de software e desenvolvimento web."
    },
    {
        id: 4,
        name: "Administração",
        code: "ADM",
        coordinator: "Profª Marina",
        period: "Manhã / Noite",
        description: "Gestão empresarial, recursos humanos, finanças, marketing e logística."
    },
];

const Classes = () => {
    const [selectedClass, setSelectedClass] = useState<ClassData | null>(null);

    return(
        <div className="containerClasses">
            <Header />
            <div className="mainContent2Classes">
                <section
                    className="biggestHalfContentClasses"
                    style={{ width: selectedClass ? "60%" : "100%" }}
                >
                    {classesData.map((cls) => (
                        <button
                            key={cls.id}
                            className={`classItem ${selectedClass?.id === cls.id ? "selected" : ""}`}
                            onClick={() => setSelectedClass(cls)}
                        >
                            <span className="classCode">{cls.code}</span>
                            <span className="className">{cls.name}</span>
                        </button>
                    ))}
                </section>

                <section
                    className="smallestHalfContentClasses"
                    style={{ display: selectedClass ? "flex" : "none" }}
                >
                    {selectedClass && (
                        <>
                            <h2 className="detailTitle">{selectedClass.name}</h2>
                            <span className="detailCode">{selectedClass.code}</span>

                            <div className="detailRow">
                                <span className="detailLabel">Coordenador</span>
                                <span className="detailValue">{selectedClass.coordinator}</span>
                            </div>

                            <div className="detailRow">
                                <span className="detailLabel">Período</span>
                                <span className="detailValue">{selectedClass.period}</span>
                            </div>

                            <p className="detailDesc">{selectedClass.description}</p>
                        </>
                    )}
                </section>
            </div>
        </div>
    );
}

export default Classes;
