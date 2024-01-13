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

    // console.log(newUser_deserialized.userName);
    
    const ul=document.querySelector('.userDetails');

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

    ul.appendChild(newLi);
    
}
// console.log(para);
