import Checkbox from "../../components/customCheckbox/Checkbox";
import Header from "../../components/header/Header";
import "./Settings.css";

const Settings = () => {
    return(
        <div className="container">
            <Header />
            <div className="mainContent2">
                <section className="halfContent">
                    <h2 className="sectionTitle">Preferências</h2>

                    <article className="holder1">
                        <div className="textContainer">
                            <span className="settingLabel">Notificações</span>
                            <span className="settingDesc">Alertas sonoros</span>
                        </div>
                        <Checkbox enabled={false} />
                    </article>

                    <article className="holder1">
                        <div className="textContainer">
                            <span className="settingLabel">Som</span>
                            <span className="settingDesc">Efeitos de clique</span>
                        </div>
                        <Checkbox enabled={true} />
                    </article>

                    <article className="holder1">
                        <div className="textContainer">
                            <span className="settingLabel">Modo escuro</span>
                            <span className="settingDesc">Tema escuro padrão</span>
                        </div>
                        <Checkbox enabled={true} />
                    </article>

                    <article className="holder1">
                        <div className="textContainer">
                            <span className="settingLabel">Iniciar c/ sistema</span>
                            <span className="settingDesc">Abrir automaticamente</span>
                        </div>
                        <Checkbox enabled={false} />
                    </article>
                </section>

                <section className="halfContent">
                    <h2 className="sectionTitle">Geral</h2>

                    <div className="upperSection">
                        <div className="optionDiv">
                            <span className="optionLabel">Idioma</span>
                            <span className="optionValue">Português</span>
                        </div>
                        <div className="optionDiv">
                            <span className="optionLabel">Fuso horário</span>
                            <span className="optionValue">UTC-3</span>
                        </div>
                        <div className="optionDiv">
                            <span className="optionLabel">Semana inicia</span>
                            <span className="optionValue">Segunda</span>
                        </div>
                        <div className="optionDiv">
                            <span className="optionLabel">Fonte</span>
                            <span className="optionValue">Consolas</span>
                        </div>
                    </div>

                    <div className="holder1Fix">
                        <div className="optHolder">
                            <span className="optLabel">Exportar dados</span>
                        </div>
                        <div className="optHolder">
                            <span className="optLabel">Importar dados</span>
                        </div>
                    </div>

                    <div className="holder2">
                        <div className="aboutSection">
                            <span className="aboutVersion">Kronos v1.0.0</span>
                        </div>
                    </div>
                </section>
            </div>
        </div>
    );
}

export default Settings;
