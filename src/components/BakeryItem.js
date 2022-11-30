// TODO: create a component that displays a single bakery item

function BakeryItem(props) {

    function isGlutenFree(yes){
        if (yes){
            return "Yes!"
        } else {
            return "No!"
        }
    }

    return (
        <div className="BakeryItem">
            <h1>{props.item.name}</h1>

            <img src= {props.item.image}/>
            
            <p>{props.item.description}</p>

            <p>Price: {props.item.price}</p>

            <p>Category: {props.item.category}</p>

            <p>Is this gluten free: {isGlutenFree(props.item.glutenFree)}</p>

            <button onClick={() => {props.addToCart(props.item); props.updateTotal(props.item)} }>Add to Cart</button>
            <button onClick={() => {props.removeFromCart(props.item)}}>Remove From Cart</button>
        </div>
    )
}

export default BakeryItem;
