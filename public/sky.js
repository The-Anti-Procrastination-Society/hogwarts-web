/* Variables */
const starsAmmount = 5000;
const backgroundColor = "#191b40";
const starsColor = "#fff";
const moonPosition = { x: 100, y: 300 };
const shootingStartPosition = { x: 100, y: 300 };
const moonSize = 60;
const cratersAmmount = 10;
const cratersColor = "#e0e0e0";
const moonVelocity = 0.03;
/* Variables */

/* Generating the background */
const $html = document.querySelector("html");
const $canvas = document.createElement("canvas");
$canvas.style.zIndex = -5;
$html.append($canvas);
$canvas.style.position = "fixed";
$canvas.style.top = "0";
$canvas.style.left = "0";

//$canvas.style.backgroundColor = backgroundColor;
/* Generating the background */

const ctx = $canvas.getContext("2d");
let stars = [];
let moonCraters = [];
let shootingStars = [];
//Particle
const particle = {
  x: 0,
  y: 0,
  vx: 0,
  vy: 0,
  radius: 0,

  create: function (x, y, speed, direction) {
    var obj = Object.create(this);
    obj.x = x;
    obj.y = y;
    obj.vx = Math.cos(direction) * speed;
    obj.vy = Math.sin(direction) * speed;
    return obj;
  },

  getSpeed: function () {
    return Math.sqrt(this.vx * this.vx + this.vy * this.vy);
  },

  setSpeed: function (speed) {
    var heading = this.getHeading();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  },

  getHeading: function () {
    return Math.atan2(this.vy, this.vx);
  },

  setHeading: function (heading) {
    var speed = this.getSpeed();
    this.vx = Math.cos(heading) * speed;
    this.vy = Math.sin(heading) * speed;
  },

  update: function () {
    this.x += this.vx;
    this.y += this.vy;
  },
};

function generateStars() {
  for (let i = 0; i < starsAmmount; i++) {
    let x = Math.floor(Math.random() * 5000);
    let y = Math.floor(Math.random() * window.innerHeight);
    let velocity = Math.random() * 0.1;
    let star = { x: x, y: y, size: velocity * 20, velocity: velocity };

    stars.push(star);
  }
}
stars.sort((a, b) => a.x - b.x);
generateStars();
function moveStars() {
  for (let i = 0; i < starsAmmount; i++) {
    stars[i].x += stars[i].velocity;
    if (stars[i].x >= 5000) {
      stars[i].x = -20;
    }
  }
}
function moveMoon() {
  moonPosition.x += moonVelocity;
  for (let i = 0; i < cratersAmmount; i++) {
    moonCraters[i].x += moonVelocity;
  }
}
function generateMoonCraters() {
  for (let i = 0; i < cratersAmmount; i++) {
    const radius =
      Math.random() * (moonSize / 8 - moonSize / 25) + moonSize / 25; // Calcula el radio aleatorio
    const angle = Math.random() * 2 * Math.PI; // Calcula el ángulo aleatorio
    const craterX = moonPosition.x + radius * 3 * Math.cos(angle); // Calcula la posición x aleatoria
    const craterY = moonPosition.y + radius * 3 * Math.sin(angle); // Calcula la posición y aleatoria

    moonCraters.push({ x: craterX, y: craterY, radio: radius });
  }
}

generateMoonCraters();
function drawMoonCraters() {
  for (let i = 0; i < cratersAmmount; i++) {
    ctx.beginPath();
    ctx.fillStyle = cratersColor; // Usa el mismo color pero con menor opacidad
    /* ctx.globalAlpha = 0.5; // Aplica una opacidad reducida
     */ ctx.arc(
      moonCraters[i].x,
      moonCraters[i].y,
      moonCraters[i].radio,
      0,
      2 * Math.PI
    );
    ctx.fill();
    ctx.globalAlpha = 1; // Restaura la opacidad original para el siguiente dibujo
  }
}

function createShootingStar() {
  let shootingStar = particle.create(
    randomRange(width / 2, width),
    randomRange(0, height / 2),
    0,
    0
  );
  shootingStar.setSpeed(
    randomRange(shootingStarSpeed.min, shootingStarSpeed.max)
  );
  shootingStar.setHeading(degreesToRads(starsAngle));
  shootingStar.radius = shootingStarRadius;
  shootingStar.opacity = 0;
  shootingStar.trailLengthDelta = 0;
  shootingStar.isSpawning = true;
  shootingStar.isDying = false;
  shootingStars.push(shootingStar);
}
function createShootingStars() {
  for (i = 0; i < shootingStars.length; i += 1) {
    var shootingStar = shootingStars[i];
    if (shootingStar.isSpawning) {
      shootingStar.opacity += shootingStarOpacityDelta;
      if (shootingStar.opacity >= 1.0) {
        shootingStar.isSpawning = false;
        killShootingStar(shootingStar);
      }
    }
    if (shootingStar.isDying) {
      shootingStar.opacity -= shootingStarOpacityDelta;
      if (shootingStar.opacity <= 0.0) {
        shootingStar.isDying = false;
        shootingStar.isDead = true;
      }
    }
    shootingStar.trailLengthDelta += trailLengthDelta;

    shootingStar.update();
    if (shootingStar.opacity > 0.0) {
      drawShootingStar(shootingStar);
    }
  }

  //Delete dead shooting shootingStars
  for (i = shootingStars.length - 1; i >= 0; i--) {
    if (shootingStars[i].isDead) {
      shootingStars.splice(i, 1);
    }
  }
}
function drawShootingStar(p) {
  let x = p.x;
  let y = p.x;
  let currentTrailLength = maxTrailLength * p.trailLengthDelta;
  let pos = lineToAngle(x, y, -currentTrailLength, p.getHeading());

  context.fillStyle = "rgba(255, 255, 255, " + p.opacity + ")";
  // context.beginPath();
  // context.arc(x, y, p.radius, 0, Math.PI * 2, false);
  // context.fill();
  var starLength = 5;
  context.beginPath();
  context.moveTo(x - 1, y + 1);

  context.lineTo(x, y + starLength);
  context.lineTo(x + 1, y + 1);

  context.lineTo(x + starLength, y);
  context.lineTo(x + 1, y - 1);

  context.lineTo(x, y + 1);
  context.lineTo(x, y - starLength);

  context.lineTo(x - 1, y - 1);
  context.lineTo(x - starLength, y);

  context.lineTo(x - 1, y + 1);
  context.lineTo(x - starLength, y);

  context.closePath();
  context.fill();

  //trail
  context.fillStyle = "rgba(255, 221, 157, " + p.opacity + ")";
  context.beginPath();
  context.moveTo(x - 1, y - 1);
  context.lineTo(pos.x, pos.y);
  context.lineTo(x + 1, y + 1);
  context.closePath();
  context.fill();
}

function drawStar(x, y, width, height) {
  ctx.beginPath();
  ctx.fillStyle = starsColor;
  ctx.fillRect(x, y, width, height);
  ctx.fill();
}

function drawMoon() {
  // Dibuja la luna
  ctx.beginPath();
  ctx.fillStyle = starsColor;
  ctx.arc(moonPosition.x, moonPosition.y, moonSize / 2, 0, 2 * Math.PI);
  ctx.fill();
  //drawMoonCraters();
}

function loadCanvasSize() {
  $canvas.width = window.innerWidth;
  $canvas.height = window.innerHeight;
}
function draw() {
  createShootingStars();
  moveStars();
  moveMoon();
  stars.forEach((star) => {
    drawStar(star.x, star.y, star.size, star.size);
  });
  drawMoon();
}

function loop() {
  loadCanvasSize();
  draw();
  window.requestAnimationFrame(loop);
}

loop();
