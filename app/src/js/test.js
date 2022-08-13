console.log("test!");

const btn = document.getElementById("btn");
btn.addEventListener("click", () => {
  console.log("Hello!");

  fetch("http://localhost:8080/src/list.php")
    .then((response) => response.json())
    .then((data) => console.log(data));
});
