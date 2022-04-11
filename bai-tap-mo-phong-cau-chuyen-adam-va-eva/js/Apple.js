class Apple {
    constructor() {
        this.weight = 10;
    }

    decrease() {
        if (this.weight > 0) {
            this.weight--;
        }
    }

    isEmpty() {
        return !!this.weight; // 1 lần phủ định để chuyển về boolean, lần tiếp theo convert về kiểu boolean đúng
    }

    getWeight() {
        return this.weight;
    }

}