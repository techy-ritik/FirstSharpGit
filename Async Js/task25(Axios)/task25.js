const getBtn = document.getElementById("get-btn");
const postBtn = document.getElementById("post-btn");
const putBtn = document.getElementById("put-btn");
const deleteBtn = document.getElementById("delete-btn");

getBtn.addEventListener("click", getTodos);
postBtn.addEventListener("click", postTodo);
putBtn.addEventListener("click", putTodo);
deleteBtn.addEventListener("click", deleteTodo);

function getTodos() {
  axios
    .get("https://crudcrud.com/api/8b405d0472c6411ca1ad23d69c2a3ecd/todo")
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function postTodo() {
  axios
    .post("https://crudcrud.com/api/8b405d0472c6411ca1ad23d69c2a3ecd/todo", {
      title: "Interview Scheduled",
      completed: true,
    })
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function putTodo() {
  axios
    .put(
      "https://crudcrud.com/api/8b405d0472c6411ca1ad23d69c2a3ecd/todo/65ca1ff86227a803e824bcc7",
      {
        title: "meet counselor",
        completed: false,
      }
    )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}

function deleteTodo() {
  axios
    .delete(
      "https://crudcrud.com/api/8b405d0472c6411ca1ad23d69c2a3ecd/todo/65ca1ff86227a803e824bcc7"
    )
    .then((result) => {
      console.log(result);
    })
    .catch((err) => {
      console.log(err);
    });
}
