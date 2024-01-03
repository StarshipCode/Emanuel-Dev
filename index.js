particlesJS('landing-canvas',
  
  {
    "particles": {
      "number": {
        "value": 80,
        "density": {
          "enable": true,
          "value_area": 800
        }
      },
      "color": {
        "value": "#ffffff"
      },
      "shape": {
        "type": "circle",
        "stroke": {
          "width": 0,
          "color": "#000000"
        },
        "polygon": {
          "nb_sides": 5
        },
        "image": {
          "src": "img/github.svg",
          "width": 100,
          "height": 100
        }
      },
      "opacity": {
        "value": 0.5,
        "random": false,
        "anim": {
          "enable": false,
          "speed": 1,
          "opacity_min": 0.1,
          "sync": false
        }
      },
      "size": {
        "value": 5,
        "random": true,
        "anim": {
          "enable": false,
          "speed": 40,
          "size_min": 0.1,
          "sync": false
        }
      },
      "line_linked": {
        "enable": true,
        "distance": 150,
        "color": "#ffffff",
        "opacity": 0.4,
        "width": 1
      },
      "move": {
        "enable": true,
        "speed": 6,
        "direction": "none",
        "random": false,
        "straight": false,
        "out_mode": "out",
        "attract": {
          "enable": false,
          "rotateX": 600,
          "rotateY": 1200
        }
      }
    },
    "interactivity": {
      "detect_on": "canvas",
      "events": {
        "onhover": {
          "enable": true,
          "mode": "repulse"
        },
        "onclick": {
          "enable": true,
          "mode": "push"
        },
        "resize": true
      },
      "modes": {
        "grab": {
          "distance": 400,
          "line_linked": {
            "opacity": 1
          }
        },
        "bubble": {
          "distance": 400,
          "size": 40,
          "duration": 2,
          "opacity": 8,
          "speed": 3
        },
        "repulse": {
          "distance": 200
        },
        "push": {
          "particles_nb": 4
        },
        "remove": {
          "particles_nb": 2
        }
      }
    },
    "retina_detect": true,
    "config_demo": {
      "hide_card": false,
      "background_color": "#b61924",
      "background_image": "",
      "background_position": "50% 50%",
      "background_repeat": "no-repeat",
      "background_size": "cover"
    }
  }

);


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
        location.assign("https://starshipcode.github.io/Emanuel-Dev/projects.html")
    }, 1000)
})
