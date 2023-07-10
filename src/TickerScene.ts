import { AnimatedSprite, Texture } from "pixi.js";
import { SceneBase } from "./SceneBase";

export class TickerScene extends SceneBase{

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

    public override update(_deltaTime:number, _deltaFrame:number){
        this.fuegoAnimado.update(_deltaFrame);
    }
    
    /*private update(deltaFrame:number){
        console.log(deltaFrame, Ticker.shared.FPS, Ticker.shared.deltaMS);
        console.log(Keyboard.state.get("KeyA"))
    }*/
} 