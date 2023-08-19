import {Container, Sprite} from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { IUpdateable } from "../IUpdateable";
//import { PhysicsContainer } from "../Containers/PhysicsContainer";


export class TickerScene extends Container implements IUpdateable{

    private world : Container;
    private FondoNoche: Sprite;
    private Fondo: Container;
    
    constructor(){
        super();
        this.world = new Container();
        
        this.Fondo = new Container();
        this.addChild(this.Fondo);

        let scale = 2;
        this.FondoNoche = Sprite.from("SFMap");
        this.Fondo.addChild(this.FondoNoche);

        this.FondoNoche.scale.set(scale,scale);
        this.FondoNoche.anchor.set(0.5);
        this.FondoNoche.position.set(WIDTH/2,HEIGHT/2);
        //this.addChild(this.FondoNoche);
        //this.FondoNoche.interactive = true;
        this.addEventListener('wheel', this.handleWheel.bind(this));
        //this.FondoNoche.on("mouseup", this.onMouseUp, this);

      
        this.addChild(this.world);
    }
    

    public update(deltaTime: number, _deltaFrame: number): void {
        deltaTime;
    }

    handleWheel(event: { preventDefault: () => void; deltaY: number; }) {
        event.preventDefault();
    
        if (event.deltaY > 0) {
          this.scale *= 0.9;
        } else {
          this.scale *= 1.1;
        }
    
        this.scale = Math.max(0.5, Math.min(2, this.scale));
    
        this.background.scale.set(this.scale);
        this.background.x = this.app.screen.width / 2;
        this.background.y = this.app.screen.height / 2;
      }


} 


    
    