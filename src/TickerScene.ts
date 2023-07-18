import { AnimatedSprite, Container, Graphics, Texture } from "pixi.js";
import { HEIGHT, WIDTH } from ".";
import { IUpdateable } from "./IUpdateable";
import { PhysicsContainer } from "./PhysicsContainer";

export class TickerScene extends Container implements IUpdateable{

    private fuegoAnimado: AnimatedSprite;
    private physFuego: PhysicsContainer;

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
        this.fuegoAnimado.anchor.set(0.5,1);
        this.fuegoAnimado.animationSpeed = 0.12;
        this.addChild(this.fuegoAnimado);

        this.physFuego = new PhysicsContainer();
        this.physFuego.speed.x = 50;
        this.physFuego.speed.y = 0;
        this.physFuego.acceletation.y = 50;
        this.addChild(this.physFuego);

        const auzZERO = new Graphics();
        auzZERO.beginFill(0xFF00FF);
        auzZERO.drawCircle(0,0,10);
        auzZERO.endFill();

        this.physFuego.addChild(this.fuegoAnimado);
        this.physFuego.addChild(auzZERO);
    }

    public update(deltaTime: number, deltaFrame: number): void {
        //update de la animacion
        this.fuegoAnimado.update(deltaFrame);

        //delta time en segundos
        const dt = deltaTime / 1000;
        this.physFuego.update(dt);
        
        //limite horizontal
        if(this.physFuego.x > WIDTH){
            //Limite derecha
                this.physFuego.x = WIDTH;
                this.physFuego.speed.x = Math.abs(this.physFuego.speed.x) * -1;
                this.physFuego.scale.x = -1;

                this.fuegoAnimado.tint = 0x5FE84A;
        }else if(this.physFuego.x < 0){
            //Limite izquierda
            this.physFuego.x = 0;
            this.physFuego.speed.x = Math.abs(this.physFuego.speed.x);
            this.physFuego.scale.x = 1;

            this.fuegoAnimado.tint = 0;
        }

        //limite vertical
        if(this.physFuego.y > HEIGHT){
            this.physFuego.y = HEIGHT;
            this.physFuego.speed.y = -100 * Math.random();            
        }
    }

 
} 




   /*
    public override update(_deltaTime:number, deltaFrame:number){
        this.fuegoAnimado.update(deltaFrame);
    }
    
    private update(deltaFrame:number){
        console.log(deltaFrame, Ticker.shared.FPS, Ticker.shared.deltaMS);
        console.log(Keyboard.state.get("KeyA"))
    }*/