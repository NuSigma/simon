function login()
{
    const nameE1 = document.querySelector("#name"); // hold selection of name input field from index.html
    localStorage.setItem("userName", nameE1.value); // set "userName" (in localstorage?) to  nameE1 above
    window.location.href = "play.html"; // redirect browser to play.html, replaces <form method="get" action="play.html">
}