//<canvas id="landing-canvas"></canvas>
const canvas = document.getElementById("landing-canvas")
const ctx = canvas.getContext("2d", { alpha: true })


const SPEED = 1 //Speed of particles
const COLOR = "#fcfcfc" //Color for particles
const BOUND_COLOR = "#fcfcfc" //Color for bounds
const RADIUS_BOUND = 170 //Radio distance for bounding
const PORTION_WINDOW = 3 / 5
const PARTICLE_RADIUS = 4

canvas.style.width = window.innerWidth * PORTION_WINDOW + "px"
canvas.width = window.innerWidth * PORTION_WINDOW
canvas.height = window.innerHeight

let mouseX = 0
let mouseY = 0

const particles = []

//Filling particles
for (let i = 0; i < 40; i++) {
    //Generating particle in random position with random motion angle
    particles.push({ x: Math.floor(Math.random() * canvas.width), y: Math.floor(Math.random() * canvas.height), angle: Math.floor(Math.random() * 360) * Math.PI * 2 / 360 })
}

function adjustCanvas() {
    //If window size changed
    if (window.innerWidth * PORTION_WINDOW != canvas.width || window.innerHeight != canvas.height) {
        //Change canvas size
        canvas.style.width = window.innerWidth * PORTION_WINDOW + "px"
        canvas.width = window.innerWidth * PORTION_WINDOW
        canvas.height = window.innerHeight
        //Reinsert in space particles left outside
        for (let i = 0; i < particles.length; i++) {
            let p = particles[i]
            if (p.x > canvas.width || p.x < 0 || p.y > canvas.height || p.y < 0)
                p = { x: Math.floor(Math.random() * canvas.width), y: Math.floor(Math.random() * canvas.height), angle: Math.floor(Math.random() * 360) * Math.PI * 2 / 360 }
            particles[i] = { ...p }
        }
        particles.map(p => {

        })
    }
}

function draw() {


    //Clearing canvas
    ctx.clearRect(0, 0, canvas.width, canvas.height)

    //Readjusting canvas size to half window width
    adjustCanvas()


    particles.forEach(p => {
        //Drawing particle
        ctx.shadowBlur = "1"
        ctx.shadowColor = "#50413c"
        ctx.beginPath()
        ctx.fillStyle = COLOR
        ctx.arc(p.x, p.y, PARTICLE_RADIUS, 0, Math.PI * 2, false)
        ctx.fill()
        ctx.closePath()
        //Moving particle
        p.x += Math.cos(p.angle) * SPEED
        p.y += Math.sin(p.angle) * SPEED
        //Particle avoidance
        if (Math.sqrt(Math.pow(mouseX - p.x, 2) + Math.pow(mouseY - p.y, 2)) < 170 && !(p.x >= canvas.width - PARTICLE_RADIUS || p.x <= PARTICLE_RADIUS || p.y >= canvas.height - PARTICLE_RADIUS || p.y <= PARTICLE_RADIUS)) {
            if (mouseX < p.x)
                p.x += 1
            if (mouseX > p.x)
                p.x -= 1
            if (mouseY > p.y)
                p.y -= 1
            if (mouseY < p.y)
                p.y += 1
        }
        //Moving toward center if going outside canvas
        if (p.x > canvas.width - PARTICLE_RADIUS || p.x <= PARTICLE_RADIUS || p.y > canvas.height - PARTICLE_RADIUS || p.y <= PARTICLE_RADIUS)
            p.angle += Math.PI
        ctx.shadowBlur = "0.5"
        ctx.shadowColor = "#50413c"
        //Create bounds
        particles.forEach(e => {
            if (Math.sqrt(Math.pow(p.x - e.x, 2) + Math.pow(p.y - e.y, 2)) < RADIUS_BOUND) {
                ctx.beginPath()
                ctx.strokeStyle = BOUND_COLOR
                ctx.strokeWith = "1px"
                ctx.moveTo(p.x, p.y)
                ctx.lineTo(e.x, e.y)
                ctx.stroke()
                ctx.closePath()
            }
        })
    })

    requestAnimationFrame(draw)
}

draw()

document.addEventListener("mousemove", e => {
    mouseX = e.clientX - (window.innerWidth - canvas.width)
    mouseY = e.clientY
})