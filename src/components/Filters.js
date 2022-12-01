//import CheckBox from "./checkBox";
import { useState } from "react";

function FilterBox(props) {
    const [breadFilter, setBreadFilter] = useState(false)
    const [cakeFilter, setCakeFilter] = useState(false)
    const [chocolateFilter, setChocolateFilter] = useState(false)
    const [isSorted, setSorted] = useState(false)

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

    return (
        <div>
            <p> Hello Welcome to Krusty Krabs </p>

            <label>
                <input type="checkbox" checked={breadFilter} onChange={() => {handleBread(); props.calculateDisplays(!breadFilter, cakeFilter, chocolateFilter, isSorted)}}/>
                Bread Filter
            </label>

            <label>
            <input type="checkbox" checked={cakeFilter} onChange={() => {handleCake(); props.calculateDisplays(breadFilter, !cakeFilter, chocolateFilter, isSorted)}}/>
                Cake Filter
            </label>

            <label>
            <input type="checkbox" checked={chocolateFilter} onChange={() => {handleChocolate(); props.calculateDisplays(breadFilter, cakeFilter, !chocolateFilter, isSorted)}}/>
                Chocolate Filter
            </label>

            <label>
            <input type="checkbox" checked={isSorted} onChange={() => {handleSort(); props.calculateDisplays(breadFilter, cakeFilter, chocolateFilter, !isSorted)}}/>
                Sort by Price
            </label>
            
        </div>
    );
}

export default FilterBox