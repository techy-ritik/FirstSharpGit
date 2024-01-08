const mainHeading = document.querySelector('#main-heading'); // for selecting elemnts using id 
mainHeading.style.textAlign='center';

const fruits=document.querySelector('.fruits');  // for selecting elemnts using class name 
fruits.style.backgroundColor='gray';
fruits.style.padding='30px';
fruits.style.margin='30px';
fruits.style.width='50%';
fruits.style.borderRadius='5px';
fruits.style.listStyleType='none';

const basketHeading=document.querySelector('h2');  // for selecting elemnts using tag name 
basketHeading.style.marginLeft='30px';

const fruitItems=document.querySelectorAll('.fruit');

// for(let i=0;i<fruitItems.length;i++){
  // fruitItems[i].style.backgroundColor='white';
  // fruitItems[i].style.padding='10px';
  // fruitItems[i].style.margin='10px';
  // fruitItems[i].style.borderRadius='5px';
// }

for(let temp of fruitItems){
  temp.style.backgroundColor='white';
  temp.style.padding='10px';
  temp.style.margin='10px';
  temp.style.borderRadius='5px';
}

const oddFruitItems=document.querySelectorAll('.fruit:nth-child(odd)');
for(let temp1 of oddFruitItems){
  temp1.style.backgroundColor='lightgray';
}


// Write answer to the questions asked below:


const basketHeading1 = document.querySelector('#basket-heading');
basketHeading1.style.color='brown';

const evenFruitItems=document.querySelectorAll('.fruit:nth-child(even)');
for(let temp1 of evenFruitItems){
  temp1.style.backgroundColor='brown';
  temp1.style.color='white';
}