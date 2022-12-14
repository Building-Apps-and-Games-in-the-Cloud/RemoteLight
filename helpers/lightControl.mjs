import * as onoff from 'onoff'; //include onoff to interact with the GPIO

class LightControl {
    constructor() {
    }

    init() {
        console.log("Initialising light");
        if(onoff.Gpio.accessible){
            this.gpio = new onoff.Gpio(4, 'out'); 
        }
    }

    on(){
        console.log("Light on");
        if(onoff.Gpio.accessible){
            this.gpio.writeSync(1);
        }
    }

    pulse(){
        console.log("Pulse light");
        this.on();
        setTimeout(()=>{this.off();}, 1000);
    }

    off(){
        if(onoff.Gpio.accessible){
            this.gpio.writeSync(0);
        }
        console.log("Light off");
    }
}

export { LightControl as LightControl };

