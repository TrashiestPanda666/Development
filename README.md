
# Development

### Link to Deployed Website

If you used the stencil code, this is `https://TrashiestPanda666.github.io/Development`

### Goal and Value of the Application
    The application is a bakery similar to the one we made in studio. The user will be able to add items to their cart and the total price
will be calculated for them. The user will also be able to filter through the items by their category and whether they are gluten free or not.
Finally, there is a sort feature, where it will sort all of the items by their price from low to high. All of these filters will work together 
if multiple are selected.

### Usability Principles Considered
    I chose to display the items in a grid fashion in order to display each item as efficiently as possible. Each item card has a header
for the name of the item, an image, a description, and buttons to add and remove it from the user's cart. The filters and cart are on the right
side of the screen for ease of visibility.

### Organization of Components
    The bulk of this project consists of a grid containing BakeryItem componenents. These components represent the items that are available for
the user to add to their cart. The other component is the filters tab to the right. This component contains the interactive checkboxes that
allows for the user to filter based on their preferences. 

### How Data is Passed Down Through Components
    The BakeryItems component takes in props that contain both the json items that is to be displayed as well as functions from the parent 
container. For example, the buttons that are used to add items to cart use functions from the parent container to modify the cartItems state.
The filters component also takes in props in the form of functions so that I can modify the display items.

### How the User Triggers State Changes
    The user can use the "Add to Cart" and "Remove From Cart" buttons at the bottom of each item card to modify the cart state. They can also
clear the cart state at any time by using the "Reset Cart" button. The display items state can be modified by using the filter checkboxes. Each
filter checkbox will work together if multiple are selected at the same time.

