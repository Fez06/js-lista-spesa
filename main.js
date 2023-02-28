'use script';


const toBuy = ['avocado', 'onion', 'lime', 'tomatoes', 'nachos'];

const ul = document.getElementById('lista');
console.log(ul);



let i = 0;

while (i < toBuy.length ) {
    const listItem = document.createElement('li');
    listItem.append(toBuy[i]);
    ul.append(listItem);
    console.log(toBuy[i]);
    i++;
}



