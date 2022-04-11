class Rat {
    constructor(name, weight, speed, status) {
        this.name = name;
        this.weight = weight;
        this.speed = speed;
        this.status = status; // true === alive, false === dead;
    }

    squeaking() {
        alert("chít chít!");
    }

    getName() {
        return this.name;
    }

    getWeight() {
        return this.weight;
    }
}