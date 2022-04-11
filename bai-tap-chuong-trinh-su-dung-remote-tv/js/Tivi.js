class Tivi {
    constructor(chanelNow, volumeNow, status) {
        this.chanelNow = chanelNow;
        this.volumeNow = volumeNow;
        this.status = status; // true is on and false is off
    }

    setChanel(chanel) {
        if (this.status) {
            this.chanelNow = chanel;
            console.log("Đã chuyển sang kênh: " + this.chanelNow);
        } else {
            console.log("Tivi  đang tắt mà");
        }
    }

    setVolume(volume) {
        if (this.status) {
            if (volume >= 0 && volume <= 100) {
                this.volumeNow = volume;
                console.log("Đã chỉnh âm lượng đến: " + this.volumeNow);
            } else {
                console.log("Âm lượng ngoài vùng cho phép")
            }
        } else {
            console.log("Tivi đang tắt mà");
        }

    }

    turnOn() {
        this.status = true;
        console.log("Đã bật tivi");
    }
}