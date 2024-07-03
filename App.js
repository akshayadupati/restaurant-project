import React from 'react';
import ReactDOM from 'react-dom/client';


// const heading = React.createElement(
//   "h1",
//   { id: "heading", className: "my-class", style: {
//     color: 'red',
//     fontSize: '20px'
//   } },
//   "Hello World from React!"
// );

/*
<div>
    <p>I am p tag</p>
    <h1>I am h1 tag</h1>
</div>
/*/

const parent = React.createElement(
    'ul',
    {}, // Specify the key prop here
    React.createElement('li', { key: 'item1' }, 'Item One'),
    React.createElement('li', { key: 'item2' }, 'Item Two'),
    React.createElement('li', { key: 'item3' }, 'Item Three')
  );
  
  //ReactDOM.render(element, document.getElementById('root'));

console.log(parent);
const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(parent);
