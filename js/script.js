const formE1 = document.getElementById("form");

formE1.addEventListener("submit", (evento) => {
  evento.preventDefault();

  const formData = new FormData(formE1);
  const data = Object.fromEntries(formData);

  //envaindo para api
  fetch("api do java", {
    method: "POST",
    headers: {
      "Content-Type": "application/json",
    },
    body: JSON.stringify(data),
  })
    .then((res) => res.json())
    .then((data) => console.log(data));
});
