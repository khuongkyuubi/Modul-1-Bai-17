class Remote {
    constructor(id) {
        this.id = id;
    }

    selectChanel(tivi, chanel) {
        if (tivi.status) {
            tivi.setChanel(chanel);
            console.log("Chuyển sang kênh: " + chanel)
        }
    }

    increaseVolume(tivi) {

        tivi.setVolume(tivi.volumeNow++);

    }

    decreaseVolume(tivi) {

        tivi.setVolume(tivi.volumeNow--);

    }

    turnOff(tivi) {
        tivi.status = false;
        console.log("Tivi is off");
    }

    turnOn(tivi) {
        tivi.status = true;
        console.log("Tivi is on");
    }


}