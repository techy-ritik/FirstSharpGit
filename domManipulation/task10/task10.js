
const li=document.getElementsByClassName('fruit');

for(let i=0;i<li.length;i++){
    const btn = document.createElement('button');
    const btnText=document.createTextNode('Edit');
    btn.appendChild(btnText);
    btn.className='edit-btn';
    li[i].appendChild(btn);
}


//  functionality of add and delete button

const form = document.querySelector('form');
const ul=document.querySelector('.fruits');

form.addEventListener('submit',function(event){
    event.preventDefault();

    const fruitToAdd= document.querySelector('#fruit-to-add');

    const newLi=document.createElement('li');
    const newLiText=document.createTextNode(fruitToAdd.value);
    newLi.appendChild(newLiText);
    newLi.className='fruit';

    const deleteBtn=document.createElement('button');
    const deleteBtnText=document.createTextNode('x');
    deleteBtn.appendChild(deleteBtnText);
    deleteBtn.className='delete-btn';
    newLi.appendChild(deleteBtn);

    const editBtn = document.createElement('button');
    const editBtnText=document.createTextNode('Edit');
    editBtn.appendChild(editBtnText);
    editBtn.className='edit-btn';
    newLi.appendChild(editBtn);

    // newLi.innerHTML=fruitToAdd.value + '<button class="delete-btn">x</button><button class="edit-btn">edit</button>';
    ul.appendChild(newLi);

})


ul.addEventListener('click',function(event){
    if(event.target.classList.contains('delete-btn')){
        const deleteFruit=event.target.parentElement;
         ul.removeChild(deleteFruit);
    }
})
