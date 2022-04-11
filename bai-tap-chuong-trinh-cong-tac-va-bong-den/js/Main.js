let lamp1 = new ElectricLamp(true);
let lamp2 = new ElectricLamp(false);
let switchButton = new SwitchButton(true, lamp1);
switchButton.connectToLamp(lamp1);
for (let i = 0; i < 10; i++) {
    console.log(i);
    switchButton.switchOff();
    switchButton.switchOn();
}

switchButton.connectToLamp(lamp2);