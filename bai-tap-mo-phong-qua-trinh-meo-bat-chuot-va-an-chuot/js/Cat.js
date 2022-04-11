class Cat {
    constructor(name, weight, maxSpeed) {
        this.name = name;
        this.weight = weight;
        this.maxSpeed = maxSpeed;
    }

    meowing() {
        alert("moew moew!");
    }

    catchTheRat(rat) {
        if (this.maxSpeed > rat.speed) {
            // alert("Caught");
            return true;
        } else {
            // alert("Too slow");
            return false;
        }
    }

    eatTheRat(rat) {
        if (this.catchTheRat(rat)) {
            alert(this.name + " is ate " + rat.getName());
            this.weight += rat.getWeight();
        } else {
            alert(this.name + " have no caught " + rat.getName() + " yet!");
        }
    }
}