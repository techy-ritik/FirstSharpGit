const ul = document.querySelector("ul");
let btn = document.createElement("button");
let editBtn = document.createElement("button");

function handleFormSubmit(event) {
  event.preventDefault();

  const newUser = {
    username: document.getElementById("username").value,
    email: document.getElementById("email").value,
    phone: document.getElementById("phone").value,
  };

  axios
    .get(
      "https://crudcrud.com/api/0d68010025f04ebda68b0f1cc5b0d8ee/MakeAppointment"
    )
    .then((res) => {
      console.log(res);

      for (let i = 0; i < res.data.length; i++) {

        const newLi = document.createElement("li");
        newLi.className = "user";

        const para = document.createElement("p");
        const paraText = document.createTextNode(res.data[i].username);
        para.appendChild(paraText);
        newLi.appendChild(para);

        const para1 = document.createElement("p");
        const para1Text = document.createTextNode(res.data[i].email);
        para1.appendChild(para1Text);
        newLi.appendChild(para1);

        const para2 = document.createElement("p");
        const para2Text = document.createTextNode(res.data[i].phone);
        para2.appendChild(para2Text);
        newLi.appendChild(para2);

        btn = document.createElement("button");
        const btnText = document.createTextNode("delete");
        btn.appendChild(btnText);
        btn.type = "delete";
        btn.className = "delete-btn";
        btn.addEventListener("click", deleteDetails);
        // btn.onclick=deleteDetails;
        newLi.appendChild(btn);

        editBtn = document.createElement("button");
        const editBtnText = document.createTextNode("edit");
        editBtn.appendChild(editBtnText);
        editBtn.type = "edit";
        editBtn.className = "edit-btn";
        editBtn.addEventListener("click", editDetails);
        // editBtn.onclick=editDetails;
        newLi.appendChild(editBtn);

        ul.appendChild(newLi);
      }
    })
    .catch((err) => {
      console.log(err);
    });

  //   let newUser_serialized = JSON.stringify(newUser);

  //   localStorage.setItem(email.value, newUser_serialized);

  //   let newUser_deserialized = JSON.parse(localStorage.getItem(email.value));

  //   const newLi = document.createElement("li");
  //   newLi.className = "user";

  // newLi.innerText=`${newUser_deserialized.username} ${newUser_deserialized.email} ${newUser_deserialized.phone}`;

  //   const para = document.createElement("p");
  //   const paraText = document.createTextNode(res.data.username);
  //   para.appendChild(paraText);
  //   newLi.appendChild(para);

  //   const para1 = document.createElement("p");
  //   const para1Text = document.createTextNode(res.data.email);
  //   para1.appendChild(para1Text);
  //   newLi.appendChild(para1);

  //   const para2 = document.createElement("p");
  //   const para2Text = document.createTextNode(res.data.phone);
  //   para2.appendChild(para2Text);
  //   newLi.appendChild(para2);

  //   btn = document.createElement("button");
  //   const btnText = document.createTextNode("delete");
  //   btn.appendChild(btnText);
  //   btn.type = "delete";
  //   btn.className = "delete-btn";
  //   btn.addEventListener("click", deleteDetails);
  //   // btn.onclick=deleteDetails;
  //   newLi.appendChild(btn);

  //   editBtn = document.createElement("button");
  //   const editBtnText = document.createTextNode("edit");
  //   editBtn.appendChild(editBtnText);
  //   editBtn.type = "edit";
  //   editBtn.className = "edit-btn";
  //   editBtn.addEventListener("click", editDetails);
  //   // editBtn.onclick=editDetails;
  //   newLi.appendChild(editBtn);

//   ul.appendChild(newLi);
}

function deleteDetails(event) {
  if (event.target.classList.contains("delete-btn")) {
    const curentUserDetails = event.target.parentElement;
    ul.removeChild(curentUserDetails);
    localStorage.removeItem(curentUserDetails.children[1].textContent);
  }
}

function editDetails(event) {
  if (event.target.classList.contains("edit-btn")) {
    const form = document.querySelector("form");
    form.reset();
    const curentUserDetails = event.target.parentElement;
    const userNameInput = document.getElementById("username");
    userNameInput.setAttribute(
      "value",
      curentUserDetails.children[0].textContent
    );
    const emailInput = document.getElementById("email");
    emailInput.setAttribute("value", curentUserDetails.children[1].textContent);
    const phoneInput = document.getElementById("phone");
    phoneInput.setAttribute("value", curentUserDetails.children[2].textContent);
    ul.removeChild(curentUserDetails);
    localStorage.removeItem(curentUserDetails.children[1].textContent);
  }
}
