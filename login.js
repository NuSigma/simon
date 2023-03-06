function login()
{
    const nameEl = document.querySelector("#name"); // hold selection of name input field from index.html
    localStorage.setItem("userName", nameEl.value); // set "userName" (in localstorage?) to  nameE1 above
    window.location.href = "play.html"; // redirect browser to play.html, replaces <form method="get" action="play.html">
}