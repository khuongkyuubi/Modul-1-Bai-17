class ElectricLamp {
    constructor(status) {
        this.status = status;
    }

    turnOff() {
        this.status = false;
        alert("Đã tắt đèn ");
    }

    turnOn() {
        this.status = true;
        alert("Đã bật đèn ");
    }
}