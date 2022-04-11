class ElectricLamp {
    constructor(status) {
        this.status = status;
    }

    turnOff() {
        this.status = false;
        console.log("Đã tắt đèn ");
    }

    turnOn() {
        this.status = true;
        console.log("Đã bật đèn ");
    }
}