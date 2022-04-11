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
        console.log("Đã tắt công tắc");
        this.lamp.turnOff();
    }

    switchOn() {
        this.status = true;
        console.log("Đã bật công tắc");
        this.lamp.turnOn();
    }
}