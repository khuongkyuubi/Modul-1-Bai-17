class Character {
    constructor(positionX = 100, positionY = 100, speed = 5) {

        this.positionX = positionX - 50; // 50 is a hafl of imgage width
        this.positionY = positionY - 75;// 75 is a hafl of imgage height
        this.direction = "down";
        this.speed = speed;
        this.img = new Image();
        this.img.src = `./images/car-${this.direction}.png`;

    }

    getCanvas() {
        return document.getElementById("myCanvas");
    }

    clearCharacter() {
        let ctx = this.getCanvas().getContext("2d");
        ctx.clearRect(this.positionX, this.positionY, this.img.width, this.img.height);
    }

    drawCharacrer() {
        let canvas = this.getCanvas();
        let ctx = canvas.getContext("2d");
        this.img.onload = () => {
            // ctx.clearRect(0, 0, canvas.width, canvas.height);
            ctx.drawImage(this.img, this.positionX, this.positionY);
        }
        console.log(this.positionX);
        console.log(this.positionY);

    }

    setDirection(direction) {
        this.direction = direction;
    }

    moveDown() {
        this.clearCharacter();
        let canvas = this.getCanvas();
        this.img.src = `./images/car-${this.direction}.png`;
        if (this.img.height + this.positionY < canvas.height) {
            this.positionY += this.speed;
            this.drawCharacrer();

        }
    }

    moveUp() {
        this.clearCharacter();
        let canvas = this.getCanvas();
        this.img.src = `./images/car-${this.direction}.png`;
        if (this.positionY > 0) {
            this.positionY -= this.speed;
            this.drawCharacrer();

        }
    }

    moveLeft() {
        this.clearCharacter();
        let canvas = this.getCanvas();
        this.img.src = `./images/car-${this.direction}.png`;
        if (this.positionX > 0) {
            this.positionX -= this.speed;
            this.drawCharacrer();

        }
    }

    moveRight() {
        this.clearCharacter();
        let canvas = this.getCanvas();
        this.img.src = `./images/car-${this.direction}.png`;
        if (this.img.width + this.positionX < canvas.width) {
            this.positionX += this.speed;
            this.drawCharacrer();

        }
    }
}