import './Checkbox.css';
import { useState } from 'react';
const Checkbox = ({enabled}: {enabled: boolean}) => {
    const [btnActive, setBtnActive] = useState(enabled);

    return(
        <>
            {btnActive ? (
                <button className="checkboxHolder" onClick={() => setBtnActive(!btnActive)}>
                    <div className="enabled">
                        <div className="ball1" />
                    </div>
                </button>
            ) : (
                <button className="checkboxHolder" onClick={() => setBtnActive(!btnActive)}>
                    <div className="disabled">
                        <div className="ball2" />
                    </div>
                </button>

            )}
        </>
    );
}

export default Checkbox;