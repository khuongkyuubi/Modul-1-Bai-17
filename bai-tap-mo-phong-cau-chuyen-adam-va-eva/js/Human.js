class Human {
    constructor(name, gender, weight) {
        this.name = name;
        this.gender = gender;
        this.weight = weight;
    }

    isMale() {
        return this.gender.toLowerCase() === "male";
    }

    setGender(trueOrFalse) {
        if (trueOrFalse) {
            this.gender = "male";
        }
        this.gender = "not male";
    }

    getName() {
        return this.name;
    }

    setName() {
        this.name = name;
    }

    getWeight() {
        return this.weight;
    }

    setWeight(weight) {
        this.weight = weight;
    }

    saySomething(words) {
        console.log(words);
    }

    eatApple(apple) {
        if (apple.getWeight()) {
            apple.decrease();
            this.weight++;
        } else {
            console.log("Hết táo rồi");
        }
    }

    checkApple(apple) {
        return !!apple.getWeight();
    }

}