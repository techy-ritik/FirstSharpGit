const h3=document.createElement('h3');

const h3Text=document.createTextNode('Buy high quality organic fruits online');

h3.appendChild(h3Text);

const divs=document.getElementsByTagName('div');
const firstDiv=divs[0];

firstDiv.appendChild(h3);

h3.style.fontStyle='italic';



const secondDiv=divs[1];
const para=document.createElement('p');

const paraText = document.createTextNode('Total fruits: 4');

para.appendChild(paraText);

const ul=document.querySelector('ul');
secondDiv.appendChild(para);
secondDiv.insertBefore(para,ul);

para.id ='fruits-total';