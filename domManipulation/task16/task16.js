const ul=document.querySelector('ul');
let btn=document.createElement('button');
let editBtn=document.createElement('button');

function handleFormSubmit(event){
    event.preventDefault();

    const newUser={
        username : document.getElementById('username').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value
    };

    let newUser_serialized=JSON.stringify(newUser);

    localStorage.setItem(email.value,newUser_serialized);

    let newUser_deserialized=JSON.parse(localStorage.getItem(email.value));

    const newLi=document.createElement('li');
    newLi.className='user';


    // newLi.innerText=`${newUser_deserialized.username} ${newUser_deserialized.email} ${newUser_deserialized.phone}`;
    
    const para=document.createElement('p');
    const paraText=document.createTextNode(newUser_deserialized.username);
    para.appendChild(paraText);
    newLi.appendChild(para);

    const para1=document.createElement('p');
    const para1Text=document.createTextNode(newUser_deserialized.email);
    para1.appendChild(para1Text);
    newLi.appendChild(para1);

    const para2=document.createElement('p');
    const para2Text=document.createTextNode(newUser_deserialized.phone);
    para2.appendChild(para2Text);
    newLi.appendChild(para2);
    

    btn=document.createElement('button');
    const btnText=document.createTextNode('delete');
    btn.appendChild(btnText);
    btn.type='delete';
    btn.className='delete-btn';
    btn.addEventListener('click',deleteDetails);
    // btn.onclick=deleteDetails;
    newLi.appendChild(btn);

    editBtn=document.createElement('button');
    const editBtnText=document.createTextNode('edit');
    editBtn.appendChild(editBtnText);
    editBtn.type='edit';
    editBtn.className='edit-btn';
    editBtn.addEventListener('click',editDetails);
    // editBtn.onclick=editDetails;
    newLi.appendChild(editBtn);

    ul.appendChild(newLi);
    
}

// ul.addEventListener('click',function(event){
    // if(event.target.classList.contains('delete-btn')){
    //     const curentUserDetails=event.target.parentElement;
    //     ul.removeChild(curentUserDetails);
    //     localStorage.removeItem(curentUserDetails.children[1].textContent);
    // }
// })

function deleteDetails(event){
    if(event.target.classList.contains('delete-btn')){
        const curentUserDetails=event.target.parentElement;
        ul.removeChild(curentUserDetails);
        localStorage.removeItem(curentUserDetails.children[1].textContent);
    }
}

// ul.addEventListener('click',function(event){
//     if(event.target.classList.contains('edit-btn')){
//         const form=document.querySelector('form');
//         form.reset();
//         const curentUserDetails=event.target.parentElement;
//         const userNameInput=document.getElementById('username');
//         userNameInput.setAttribute('value',curentUserDetails.children[0].textContent);
//         const emailInput=document.getElementById('email');
//         emailInput.setAttribute('value',curentUserDetails.children[1].textContent);
//         const phoneInput=document.getElementById('phone');
//         phoneInput.setAttribute('value',curentUserDetails.children[2].textContent);
//         ul.removeChild(curentUserDetails);
//         localStorage.removeItem(curentUserDetails.children[1].textContent);
//     }
// })

function editDetails(event){
    if(event.target.classList.contains('edit-btn')){
        const form=document.querySelector('form');
        form.reset();
        const curentUserDetails=event.target.parentElement;
        const userNameInput=document.getElementById('username');
        userNameInput.setAttribute('value',curentUserDetails.children[0].textContent);
        const emailInput=document.getElementById('email');
        emailInput.setAttribute('value',curentUserDetails.children[1].textContent);
        const phoneInput=document.getElementById('phone');
        phoneInput.setAttribute('value',curentUserDetails.children[2].textContent);
        ul.removeChild(curentUserDetails);
        localStorage.removeItem(curentUserDetails.children[1].textContent);
    }
}
