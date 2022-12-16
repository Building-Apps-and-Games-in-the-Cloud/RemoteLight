import * as onoff from 'onoff'; //include onoff to interact with the GPIO

class OutGPIO {
    constructor() {
    }

    init() {
        console.log("Initialising OutGPIO");
        if(onoff.Gpio.accessible){
            this.gpio = new onoff.Gpio(4, 'out'); 
        }
    }

    on(){
        console.log("OutGPIO on");
        if(onoff.Gpio.accessible){
            this.gpio.writeSync(1);
        }
    }

    pulse(){
        console.log("Pulse OutGPIO");
        this.on();
        setTimeout(()=>{this.off();}, 1000);
    }

    off(){
        if(onoff.Gpio.accessible){
            this.gpio.writeSync(0);
        }
        console.log("OutGPIO off");
    }
}

export { OutGPIO as OutGPIO };

