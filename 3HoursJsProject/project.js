const addExpenseForm = document.querySelector("#expenseDetails");
const ul = document.createElement("ul");
const body = document.querySelector("body");
body.appendChild(ul);
addExpenseForm.addEventListener("submit", function (event) {
  event.preventDefault();

  const newLi = document.createElement("li");
  newLi.className = "newExpense";
  ul.appendChild(newLi);
  const category = document.getElementById("category").value;
  const xpense = {
    amount: document.getElementById("amount").value,
    description: document.getElementById("Description").value,
    category: document.getElementById("category").value,
  };

  const xpense_serial = JSON.stringify(xpense);

  localStorage.setItem(category, xpense_serial);

  const xpense_deserial = JSON.parse(localStorage.getItem(category));

  // const amntShow = document.createElement("p");
  // const amntShowText = document.createTextNode(xpense_deserial.amount);
  // amntShow.appendChild(amntShowText);
  // newLi.appendChild(amntShow);

  // const catShow = document.createElement("p");
  // const catShowText = document.createTextNode(xpense_deserial.category);
  // catShow.appendChild(catShowText);
  // newLi.appendChild(catShow);

  // const descShow = document.createElement("p");
  // const descShowText = document.createTextNode(xpense_deserial.description);
  // descShow.appendChild(descShowText);
  // newLi.appendChild(descShow);

  // newLi.innerHTML = `${xpense_deserial.amount} - ${xpense_deserial.category} - ${xpense_deserial.description} `;

  newLi.innerHTML = "<p></p> <p></p> <p></p>";
  newLi.children[0].innerText = `${xpense_deserial.amount}`;
  newLi.children[1].innerText = `${xpense_deserial.category}`;
  newLi.children[2].innerText = `${xpense_deserial.description}`;

  const deleteBtn = document.createElement("button");
  const deleteBtnText = document.createTextNode("Delete Expense");
  deleteBtn.appendChild(deleteBtnText);
  deleteBtn.className = "delete-btn";
  newLi.appendChild(deleteBtn);

  const editBtn = document.createElement("button");
  const editBtnText = document.createTextNode("Edit Expense");
  editBtn.appendChild(editBtnText);
  editBtn.className = "edit-btn";
  newLi.appendChild(editBtn);
});

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("delete-btn")) {
    const currentDetails = event.target.parentElement;
    ul.removeChild(currentDetails);
    localStorage.removeItem(currentDetails.children[1].textContent);
  }
});

ul.addEventListener("click", (event) => {
  if (event.target.classList.contains("edit-btn")) {
    const currentDetails = event.target.parentElement;
    document.getElementById("amount").value =
      currentDetails.children[0].textContent;
    document.getElementById("Description").value =
      currentDetails.children[2].textContent;
    document.getElementById("category").value =
      currentDetails.children[1].textContent;
    ul.removeChild(currentDetails);
    localStorage.removeItem(currentDetails.children[1].textContent);
  }
});
