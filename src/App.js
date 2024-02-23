import './App.css';
import MenuItem from './components/MenuItem';
import Header from './components/Header';
import React, {useState} from 'react';


// import 'bootstrap/dist/css/bootstrap.min.css'; // This imports bootstrap css styles. You can use bootstrap or your own classes by using the className attribute in your elements.

// Menu data. An array of objects where each object represents a menu item. Each menu item has an id, title, description, image name, and price.
// You can use the image name to get the image from the images folder.
const menuItems = [
  {
    id: 1,
    title: 'Gyoza',
    description: 'Japanese dumplings',
    imageName: 'gyoza.png',
    price: 5,
  },
  {
    id: 2,
    title: 'Sushi',
    description: 'Japanese rice rolls',
    imageName: 'sushi.png',
    price: 6,
  },
  {
    id: 3,
    title: 'Ramen',
    description: 'Japanese noodle soup',
    imageName: 'ramen.png',
    price: 7,
  },
  {
    id: 4,
    title: 'Matcha Cake',
    description: 'Japanese green tea cake',
    imageName: 'matcha-cake.png',
    price: 4,
  },
  {
    id: 5,
    title: 'Mochi',
    description: 'Japanese rice cake',
    imageName: 'mochi.png',
    price: 3,
  },
  {
    id: 6,
    title: 'Yakitori',
    description: 'Japanese skewered chicken',
    imageName: 'yakitori.png',
    price: 2,
  },
  {
    id: 7,
    title: 'Takoyaki',
    description: 'Japanese octopus balls',
    imageName: 'takoyaki.png',
    price: 5,
  },
  {
    id: 8,
    title: 'Sashimi',
    description: 'Japanese raw fish',
    imageName: 'sashimi.png',
    price: 8,
  },
  {
    id: 9,
    title: 'Okonomiyaki',
    description: 'Japanese savory pancake',
    imageName: 'okonomiyaki.png',
    price: 6,
  },
  {
    id: 10,
    title: 'Katsu Curry',
    description: 'Japanese curry with fried pork',
    imageName: 'katsu-curry.png',
    price: 9,
  }
];


function App() {
  const [total, updateTotal] = useState(0)
  const [clearAll, setClearAll] = useState(false);

  const handleClearAll = () => {
    updateTotal(0); 
    setClearAll(true); 
  };

  const handleClearAllButtonClick = () => {
    handleClearAll();
  };


  
  return (
    <div>
      <div className="body">
          <Header title="HAPPII ONAKA" caption="Delicious Japanese bites, guaranteed HAPPY TUMMY"/>
      </div>

      <div className="menu">
        {menuItems.map(item => (
            <MenuItem 
              key={item.id} 
              title={item.title} 
              description={item.description} 
              imageName={item.imageName} 
              price={item.price}
              updateTotal={updateTotal}
              total={total}
              clearAll={clearAll}
              setClearAll={setClearAll}
            />
          ))}
      <div className="checkout-bar">
          <button className="clear" onClick={handleClearAllButtonClick} type="button">Clear all</button>
          <p class="totalDisplay">Subtotal ${total}</p>
          <button className="order" onClick={() => {
            if (total === 0) {
              alert('No items have been added to order!!!');
            } else {
              handleClearAll();
              alert('All items ordered!');
            }
          }} type="button">Order</button>
      </div>
      </div>
    </div>
  );}

export default App;