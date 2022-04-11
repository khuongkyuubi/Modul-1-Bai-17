let sony = new Tivi(3, 15, false);
let remote = new Remote("Sony");
// remote.turnOn(sony);
sony.turnOn();
sony.setChanel(7);
remote.selectChanel(sony, 3);
remote.increaseVolume(sony);
remote.increaseVolume(sony);
remote.turnOff(sony);