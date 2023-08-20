import {Container, Sprite} from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { IUpdateable } from "../IUpdateable";
//import { PhysicsContainer } from "../Containers/PhysicsContainer";


export class TickerScene extends Container implements IUpdateable{

    private Fondo : Sprite;

    constructor(){
        super();
        
        this.Fondo = Sprite.from("SFMap");


        this.Fondo.scale.set(2,2);
        this.Fondo.anchor.set(0.5);
        this.Fondo.position.set(WIDTH/2,HEIGHT/2);

        this.Fondo.interactive = true;
        this.Fondo.on("wheel", this.onMouseWheel,this);
        this.Fondo.on("pointerdown", this.onPointerDown, this);
        this.Fondo.on("mouseup", this.onMouseUp, this);

        this.addChild(this.Fondo);;

    }
    

    public update(deltaTime: number, _deltaFrame: number): void {
        deltaTime;
    }

    private onMouseWheel(event: WheelEvent): void {
      this.scale.x -= event.deltaY * 0.1;
      this.scale.y -= event.deltaY * 0.1;
      console.log("wheel", this);
    }

    private onPointerDown():void {
      this.scale.x += this.scale.x * 0.1;
      this.scale.y += this.scale.y * 0.1;
      console.log("point down", this);
   }

   private onMouseUp():void {
    this.scale.x = 1;
    this.scale.y = 1;
    console.log("mouse up", this);
 }

} 

    