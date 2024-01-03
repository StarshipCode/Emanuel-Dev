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
        .then(() => { alert("Email copied to the clipboard") })
        .catch(err => {
            console.log('Something went wrong', err);
        })
})
//Animacion out de la transision
let transition2 = document.getElementById("transition2")
let transition1 = document.getElementById("transition1")


let starButton = document.getElementById("button-star")

starButton.addEventListener("click", e => {
    transition1.animate([
        { width: "0%" },
        { width: "100%" }
    ],
        {
            duration: 1000,
            iterations: 1,
            easing: "ease-in-out",
            delay: 100
        })
    transition2.animate([
        { width: "0%" },
        { width: "100%" }
    ],
        {
            duration: 1000,
            iterations: 1,
            easing: "ease-in-out",
            delay: 0
        })
    setTimeout(() => {
        try{
        location.assign("/Emanuel-Dev/projects.html")
        }
        catch(e){

        }
        try{
        location.assign("Emanuel-Dev/projects.html")
        }
        catch(e){

        }
        try{
        location.assign("/projects.html")
        }
        catch(e){

        }
    }, 1000)
})
