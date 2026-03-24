function login() {
    let username = document.getElementById("brugernavn").value;
    let password = document.getElementById("adgangskode").value;
    let message = document.getElementById("message");

    let correctUsername = "SofieHansen";
    let correctPassword = "12345";

    /* Rydder gammel tekst */
    message.innerText = "";

    if (username === correctUsername && password === correctPassword) {
        message.innerText = "Du er logget ind!";
        message.style.color = "green";

        setTimeout(() => {
            window.location.href = "main.html";
        }, 1000);

    } else {
        message.innerText = "Invalid code or username";
        message.style.color = "red";
    }

        setTimeout(() => {
        message.innerText = "";
    }, 2000);
}

