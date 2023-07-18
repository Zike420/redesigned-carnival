import { AnimatedSprite, Container, Texture } from "pixi.js";
import { IUpdateable } from "./IUpdateable";

export class TickerScene extends Container implements IUpdateable{

    private fuegoAnimado: AnimatedSprite;

    constructor(){
        super();

        this.fuegoAnimado = new AnimatedSprite([
            Texture.from("Fuego1"),
            Texture.from("Fuego2"),
            Texture.from("Fuego3"),
            Texture.from("Fuego4"),
            Texture.from("Fuego5"),
            Texture.from("Fuego6")
        ], true);
        this.fuegoAnimado.play();
        this.fuegoAnimado.animationSpeed = 0.2;
        this.addChild(this.fuegoAnimado);
    }

    update(_deltaTime: number, deltaFrame: number): void {
       this.fuegoAnimado.update(deltaFrame);
    }

    /*
    public override update(_deltaTime:number, deltaFrame:number){
        this.fuegoAnimado.update(deltaFrame);
    }
    
    private update(deltaFrame:number){
        console.log(deltaFrame, Ticker.shared.FPS, Ticker.shared.deltaMS);
        console.log(Keyboard.state.get("KeyA"))
    }*/
} 