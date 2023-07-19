import {Container} from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { IUpdateable } from "../IUpdateable";
//import { PhysicsContainer } from "../Containers/PhysicsContainer";
import { Player } from "../Containers/Player";

export class TickerScene extends Container implements IUpdateable{

    private playerFuego : Player;

    constructor(){
        super();

        this.playerFuego = new Player();
        this.addChild(this.playerFuego);
    }

    public update(deltaTime: number, _deltaFrame: number): void {
        //update de la animacion
        this.playerFuego.update(deltaTime);

        //delta time en segundos
        //const dt = deltaTime / 1000;
       // this.physFuego.update(dt);
        
        //limite horizontal
        if(this.playerFuego.x > WIDTH){
            //Limite derecha
                this.playerFuego.x = WIDTH;
                //this.playerFuego.speed.x = Math.abs(this.playerFuego.speed.x) * -1;
                //this.playerFuego.scale.x = -1;
        }else if(this.playerFuego.x < 0){
            //Limite izquierda
            this.playerFuego.x = 0;
            //this.playerFuego.speed.x = Math.abs(this.playerFuego.speed.x);
            //this.playerFuego.scale.x = 1;
        }

        //limite vertical
        if(this.playerFuego.y > HEIGHT){
            this.playerFuego.y = HEIGHT;
            this.playerFuego.canJump = true;
            //this.playerFuego.speed.y = -100 * Math.random();            
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