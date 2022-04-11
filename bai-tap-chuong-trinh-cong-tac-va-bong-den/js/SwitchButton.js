class SwitchButton {
    constructor(status, lamp) {
        this.status = status;
        this.lamp = lamp;
    }

    connectToLamp(lamp) {
        if (this.status) {
            lamp.turnOn();
        } else {
            lamp.turnOff();
        }

    }

    switchOff() {
        this.status = false;
        alert("Đã tắt công tắc")
        this.lamp.turnOff();
    }

    switchOn() {
        this.status = true;
        alert("Đã bật công tắc")
        this.lamp.turnOn();
    }
}