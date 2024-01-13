const ul=document.querySelector('ul');
let btn=document.createElement('button');
const email=document.getElementById('email');
function handleFormSubmit(event){
    event.preventDefault();

    const email=document.getElementById('email');
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
    btn.onclick=deleteDetails;
    newLi.appendChild(btn);

    ul.appendChild(newLi);
    
}

// ul.addEventListener('click',function(event){
//     if(event.target.classList.contains('delete-btn'));
//     const curentUserDetails=event.target.parentElement;
//     ul.removeChild(curentUserDetails);
//     localStorage.removeItem(email.value);
// })

function deleteDetails(event){
    if(event.target.classList.contains('delete-btn')){
        const curentUserDetails=event.target.parentElement;
        ul.removeChild(curentUserDetails);
        localStorage.removeItem(curentUserDetails.children[1].textContent);
    }
}