import { useState } from "react";


function CheckBox(props) {
    const [isChecked, setChecked] = useState(false)

    function handleChange(){
        setChecked(!isChecked);
        if (isChecked){
            {props.sort()}
        }
    }

    return (
        <label>
            <input type="checkbox" checked={isChecked} onChange={handleChange()}/>
            {props.label}
        </label>
    );
}

export default CheckBox