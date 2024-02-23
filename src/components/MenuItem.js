import React, {useState, useEffect} from 'react';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({title, description, imageName, price, updateTotal, total, clearAll, setClearAll}) => {
    const [items, updateItems] = useState(0)
    
    useEffect(() => {
        if (clearAll) {
            updateItems(0);
        }
    }, setClearAll(false), [clearAll]);

    return (
    <div class="container">
        <div class="row">
             <div class="col">
                <img class="foodImages" src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt={title + "menu item image"}/>
            </div>

            <div class="col1">
                <h3 class="foodName">{title}</h3>
                <p>{description}</p>
                <h3>${price}</h3>
                <button class="minus" onClick={()=> {
                    updateItems(items > 0 ? items - 1: 0); updateTotal(total > 0 && items > 0? total - price: total)}}
                 type="button">-</button>
                <p class="displayItems">{items}</p>
                <button class="add" onClick={()=> {updateItems(items + 1); updateTotal((total) >= 0 ? total + price: 0)}}  type="button">+</button>  
            </div>
        </div>            
    </div>
    );
};

export default MenuItem;