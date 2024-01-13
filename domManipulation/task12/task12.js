const storeData=document.querySelector('form');

storeData.addEventListener('submit',function(event){
    event.preventDefault();
    const userName=document.getElementById('u_name');
    const email=document.getElementById('u_email');
    const phone=document.getElementById('u_telephone');
    // console.log(userName.value);

    localStorage.setItem('userName',userName.value);
    localStorage.setItem('Email',email.value);
    localStorage.setItem('Phone Number',phone.value);

})