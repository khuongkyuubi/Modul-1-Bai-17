let lamp1 = new ElectricLamp(true);
let lamp2 = new ElectricLamp(false);
let switchButton = new SwitchButton(true, lamp1);
switchButton.connectToLamp(lamp1);
switchButton.connectToLamp(lamp2);