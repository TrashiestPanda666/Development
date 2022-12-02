//import CheckBox from "./checkBox";
import { useState } from "react";

function FilterBox(props) {
    const [breadFilter, setBreadFilter] = useState(false)
    const [cakeFilter, setCakeFilter] = useState(false)
    const [chocolateFilter, setChocolateFilter] = useState(false)
    const [isSorted, setSorted] = useState(false)
    const [glutenFree, setGlutenFree] = useState(false)

    function handleBread() {
        setBreadFilter(!breadFilter);
    }

    function handleCake() {
        setCakeFilter(!cakeFilter);
    }

    function handleChocolate() {
        setChocolateFilter(!chocolateFilter);
    }

    function handleSort() {
        setSorted(!isSorted);
    }

    function handleGluten() {
        setGlutenFree(!glutenFree)
    }

    return (
        <div style={{
            padding: "5%",
            display: "flex", 
            flexDirection: "column", 
            alignItems: "center",
            backgroundColor: "#E8F3D6",
            borderRadius: "30px"
            }}>

            <p style={{fontWeight: "bold"}}> Filter Options! </p>

            <label>
                <input type="checkbox" checked={breadFilter} onChange={() => {handleBread(); props.calculateDisplays(!breadFilter, cakeFilter, chocolateFilter, isSorted, glutenFree)}}/>
                Bread Filter
            </label>

            <label>
            <input type="checkbox" checked={cakeFilter} onChange={() => {handleCake(); props.calculateDisplays(breadFilter, !cakeFilter, chocolateFilter, isSorted, glutenFree)}}/>
                Cake Filter
            </label>

            <label>
            <input type="checkbox" checked={chocolateFilter} onChange={() => {handleChocolate(); props.calculateDisplays(breadFilter, cakeFilter, !chocolateFilter, isSorted, glutenFree)}}/>
                Chocolate Filter
            </label>

            <label>
            <input type="checkbox" checked={glutenFree} onChange={() => {handleGluten(); props.calculateDisplays(breadFilter, cakeFilter, chocolateFilter, isSorted, !glutenFree)}}/>
                Gluten Free Options
            </label>

            <label>
            <input type="checkbox" checked={isSorted} onChange={() => {handleSort(); props.calculateDisplays(breadFilter, cakeFilter, chocolateFilter, !isSorted, glutenFree)}}/>
                Sort by Price
            </label>
            
        </div>
    );
}

export default FilterBox