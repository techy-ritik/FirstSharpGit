function handleFormSubmit(event){
  event.preventDefault();

    const userDetails={
        userName : document.getElementById('username').value,
        email : document.getElementById('email').value,
        phone : document.getElementById('phone').value
    };

    let userDetails_serialized=JSON.stringify(userDetails);

    localStorage.setItem('User Details',userDetails_serialized);
  
}

module.exports=handleFormSubmit;