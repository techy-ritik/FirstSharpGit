// Add input element inside form, before button, to take fruit description

const br=document.createElement('br');

const div=document.getElementsByTagName('div');
const secondDiv=div[1];
const form=secondDiv.firstElementChild;
const addBtn=form.children[2];

form.appendChild(br);
form.insertBefore(br,addBtn);

const fruitDescription=document.createElement('input');
fruitDescription.type='text';
fruitDescription.name='description';
fruitDescription.id='fruitDescription';
// fruitDescription.value='soSweet';


form.appendChild(fruitDescription);
form.insertBefore(fruitDescription,addBtn);


const form1 = document.querySelector('form');
const ul=document.querySelector('.fruits');

form1.addEventListener('submit',function(event){
    event.preventDefault();

    const fruitToAdd= document.querySelector('#fruit-to-add');

    const newLi=document.createElement('li');

    const newLiText=document.createTextNode(fruitToAdd.value);
    newLi.appendChild(newLiText);
    newLi.className='fruit';

    const para=document.createElement('p'); 
    const paraText=document.createTextNode(fruitDescription.value);
    para.appendChild(paraText);
    para.id='fDescription';
    para.style.fontStyle='italic';
    newLi.appendChild(para);

    const deleteBtn=document.createElement('button');
    const deleteBtnText=document.createTextNode('x');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.className='delete-btn';
    newLi.appendChild(deleteBtn);
    
    // newLi.innerHTML=fruitToAdd.value +'<br>'+ fruitDescription.value + '<button class="delete-btn">x</button>';
    ul.appendChild(newLi);

})



// Show the fruit description in italics on the next line



const li=document.getElementsByClassName('fruit');
for(let i=0;i<li.length;i++){
    const para=document.createElement('p'); 
    const paraText=document.createTextNode('So Sweet');
    para.appendChild(paraText);
    para.id='fDescription';
    para.style.fontStyle='italic';
    li[i].appendChild(para);
    li[i].insertBefore(para,li[i].children[0]);
}


// Create a filter that shows only those fruits whose either name or description or both matches the entered text

const filter=document.getElementById('filter');

filter.addEventListener('keyup',function(event){
    const search = event.target.value.toLowerCase();
    const availableFruits=document.getElementsByClassName('fruit');
    for(let i=0;i<availableFruits.length;i++){
        const currentFruit=availableFruits[i].firstChild.textContent.toLowerCase();

        const currentFruitDescription=availableFruits[i].children[0].textContent.toLowerCase();

        if(currentFruit.indexOf(search)!=-1 || currentFruitDescription.indexOf(search)!=-1){
            availableFruits[i].style.display='flex';
        }
        else{
            availableFruits[i].style.display='none';
        }
    }
})
