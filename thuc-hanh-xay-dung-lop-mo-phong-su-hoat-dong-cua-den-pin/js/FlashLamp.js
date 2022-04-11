class FlashLamp {
    constructor(status, battery) {
        this.status = status; // on/ off tương ứng true / false
        this.battery = battery; // battery là đối tượng tạo từ lớp Battery
        // Hay nói cách khác, battery mang kiểu dữ liệu Battery
    }

    setBattery(battery) {
        this.battery = battery;
    }

    getBatteryInfo() {
        return this.battery.getEnergy();
    }

    light() {
        if (this.status) {
            alert("The light is on");
        } else {
            alert("The light is off");
        }
    }

    turnOn() {
        this.status = true;
    }

    turnOff() {
        this.status = false;
    }

}



let lithium = new Battery(50);
let flashlight = new FlashLamp(false, lithium);
console.log(flashlight.getBatteryInfo()); // 50
// Các phương thức mô tả lại các hành động  với đối tượng
flashlight.light();
flashlight.turnOn();
flashlight.light();

let alkaline = new Battery(70);
flashlight.setBattery(alkaline);
console.log(flashlight.getBatteryInfo());// 70
flashlight.turnOff();
flashlight.light();