import React from 'react';

// This is a functional component that represents a single menu item. It currently takes in the title and displays it in an h2 element.
// Modify the component to take in all the other properties of a menu item you need and display them in the component.
// Use bootstrap to style the elements so that it looks like the mockup in the assignment.
// Hint: You can use the image name to get the image from the images folder.
const MenuItem = ({title, description, imageName, price}) => {
    return (
    <div class="container">
        <div class="row">
            
             <div class="col">
                <img class="foodImages" src={`${process.env.PUBLIC_URL}/images/${imageName}`} alt={title + "menu item image"}/>
            </div>

            <div class="col1">
                <h3 class="foodName">{title}</h3>
                <p>{description}</p>
                <h3>{price}</h3>
                <button type="button">Add</button>
            </div>
        </div>
    </div>
    );
};

export default MenuItem;