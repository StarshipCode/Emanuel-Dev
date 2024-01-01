//https://github.com/StarshipCode

let telegramIcon = document.getElementById("telegram")

telegramIcon.addEventListener("click", e => {
    location.href = "https://web.telegram.org/k/#@Gamer_Coder"
})

let githubIcon = document.getElementById("github")

githubIcon.addEventListener("click", e => {
    location.href = "https://github.com/StarshipCode"
})

let emailIcon = document.getElementById("email")

email.addEventListener("click", e => {
    navigator.clipboard.writeText("byteoverflowyt@gmail.com")
        .then(() => { alert("Email copied to the clipboard")})
        .catch(err => {
            console.log('Something went wrong', err);
        })
})