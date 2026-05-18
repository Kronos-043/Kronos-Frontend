import Checkbox from "../../components/customCheckbox/Checkbox";
import Header from "../../components/header/Header";
import "./Settings.css";


const Settings = () => {
    return(
        <div className="container">
            <Header />
            <div className="mainContent2">
                <section className="halfContent">
                    <article className="holder1">
                        <div className="textContainer">

                        </div>

                        <Checkbox enabled={false}/>

                    </article>

                    <article className="holder1">
                        <div className="textContainer">
                            
                        </div>

                        <Checkbox enabled={true}/>
                    </article>

                    <article className="holder1">
                        <div className="textContainer">

                        </div>

                        <Checkbox enabled={false}/>
                    </article>
                    
                    <article className="holder1">
                        <div className="textContainer">
                            
                        </div>

                        <Checkbox enabled={true}/>
                    </article>
                </section>



                <section className="halfContent">
                    <div className="upperSection">
                        <div className="optionDiv">

                        </div>
                        <div className="optionDiv">
                            
                        </div>
                        <div className="optionDiv">
                            
                        </div>
                        <div className="optionDiv">
                            
                        </div>
                    </div>

                    <div className="holder1Fix">
                        <div className="optHolder">

                        </div>

                        <div className="optHolder"></div>
                    </div>

                    <div className="holder2">
                        
                    </div>

                </section>
            </div>
        </div>
    );
}

export default Settings;