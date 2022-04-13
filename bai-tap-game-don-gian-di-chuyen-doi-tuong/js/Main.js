let canvas = document.getElementById("myCanvas");
let ctx = canvas.getContext("2d");
let score = 0;



// Hàm hiển thị điểm
function displayScore() {
    ctx.font = "75px Comic Sans MS";
    ctx.fillStyle = "brown";
    ctx.textAlign = "center";
    ctx.fillText("Score: " + score, canvas.width / 2, 100);
}

setInterval(() => {
    displayScore();
}, 100);

// Tạo đối tượng xe ô tô
let character = new Character(canvas.width / 2, canvas.height / 2, 20);
character.drawCharacrer();

function random(min, mid1, mid2, max) {

    let x = Math.random();
    console.log(x);
    if (x <= 0.5) {
        return Math.floor(Math.random() * (mid1 - min) + min);
    } else {
        return Math.floor(Math.random() * (max - mid2) + mid2);
    }
}

// Function create cone

function createCone() {


    let cone = {
        positionX: random(0, character.positionX, (character.positionX + character.img.width), (canvas.width - 75)),
        positionY: random(0, character.positionY, (character.positionY + character.img.height), (canvas.height - 75)),
        img: new Image(),
        drawCone: function () {

            this.img.src = `./images/cone.png`;
            this.img.onload = () => {
                // console.log(this.positionY);
                ctx.drawImage(this.img, this.positionX, this.positionY);
            }
        }
    }
    cone.drawCone();
    return cone;
}

let cone = createCone();

// Function create coin
function createCoin() {


    const coin = {
        positionY: random(0, character.positionY, (character.positionY + character.img.height), (canvas.height - 75)),
        positionX: random(0, character.positionX, (character.positionX + character.img.width), (canvas.width - 75)),
        // positionY: ,
        img: new Image(),
        drawCoin: function () {
            this.img.src = `./images/coin.png`;
            this.img.onload = () => {
                // console.log(this.positionY);
                ctx.drawImage(this.img, this.positionX, this.positionY);
                // console.log("X : "+this.positionX);

            }
        }
    }

    coin.drawCoin();
    return coin;
}

let coin = createCoin();

// Keydown Event handler

window.addEventListener("keydown", controlCharater);

function controlCharater(evt) {
    switch (evt.key) {
        case "ArrowDown":
            character.setDirection("down");
            character.moveDown();
            break;
        case "ArrowUp":
            character.setDirection("up");
            character.moveUp();
            break;
        case "ArrowLeft":
            character.setDirection("left");
            character.moveLeft();
            break;
        case "ArrowRight":
            character.setDirection("right");
            character.moveRight();
            break;
    }
    // Test điều kiện
    console.log("Test")
    console.log((character.positionX + character.img.width));
    console.log(coin.positionX);
    console.log("vế 2");
    console.log(character.positionX);
    console.log((coin.positionX + coin.img.width));

    console.log("điều kiện 1");
    console.log(((character.positionY + character.img.height) >= coin.positionY && (character.positionY) <= (coin.positionY + coin.img.height)));
    console.log("Điều kiện 2");
    console.log(((character.positionX + character.img.width >= cone.positionX) && (character.positionX + character.img.width) <= (cone.positionX + cone.img.width)
        || (character.positionX <= (cone.positionX + cone.img.width) && character.positionX >= cone.positionX)
    ));
    console.log("điều kiện 3");
    console.log((character.positionX + character.img.width) >= coin.positionX && (character.positionX) <= (coin.positionX + coin.img.width));
    console.log("Điều kiện 4");
    console.log(((character.positionY >= (cone.positionY + cone.img.height)) && (character.positionY) <= (cone.positionY + cone.img.height)
        || (character.positionY <= (cone.positionY + cone.img.height) && character.positionY >= cone.positionY)
    ))

    checkEnd();
    checkScore();
}

function checkEnd() {
    let check = false;
    if ((character.positionY + character.img.height) >= cone.positionY && (character.positionY) <= (cone.positionY + cone.img.height)) {
        if ((character.positionX + character.img.width >= cone.positionX) && (character.positionX + character.img.width) <= (cone.positionX + cone.img.width)
            || (character.positionX <= (cone.positionX + cone.img.width) && character.positionX >= cone.positionX)
        ) {
            check = true;
        }
    }
    if ((character.positionX + character.img.width) >= cone.positionX && (character.positionX) <= (cone.positionX + cone.img.width)) {
        if (((character.positionY + character.img.height) >= (cone.positionY)) && (character.positionY) <= (cone.positionY + cone.img.height)
            || (character.positionY <= (cone.positionY + cone.img.height) && character.positionY >= cone.positionY)
        ) {
            check = true;
        }

    }

    if (check) {
        setTimeout(() => {
            alert("End game");
        }, 50);
        window.removeEventListener("keydown", controlCharater);

    }

}
// Function check score

function checkScore() {
    let check = false;
    if ((character.positionY + character.img.height) >= coin.positionY && (character.positionY) <= (coin.positionY + coin.img.height)) {
        if ((character.positionX + character.img.width >= coin.positionX) && (character.positionX + character.img.width) <= (coin.positionX + coin.img.width)
            || (character.positionX <= (coin.positionX + coin.img.width) && character.positionX >= coin.positionX)
        ) {
            check = true;
        }
    }
    if ((character.positionX + character.img.width) >= coin.positionX && (character.positionX) <= (coin.positionX + coin.img.width)) {
        if ((character.positionY + character.img.height >= (coin.positionY)) && (character.positionY + character.img.height) <= (coin.positionY + coin.img.height)
            || (character.positionY <= (coin.positionY + coin.img.height) && character.positionY >= coin.positionY)
        ) {
            check = true;
        }

    }

    if (check) {
        score += 10;
        ctx.clearRect(0, 0, canvas.width, canvas.height);
        coin = createCoin();
        cone = createCone();

        setInterval(() => {
            displayScore();
        }, 100);

    }

}

