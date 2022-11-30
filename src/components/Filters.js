import CheckBox from "./checkBox";

function filterBox(props) {

    function sort(){
        {props.sort()}
    }

    return (
        
        <div>
            <p> Hello Welcome to Krusty Krabs </p>
            <CheckBox label = "can I get uhhhh" />
            <CheckBox label = "krusty krabs" />
            <CheckBox label = "sort by price" sort={sort}/>
        </div>
    );
}

export default filterBox