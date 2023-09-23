import { Container, Graphics } from "pixi.js";


export class Punto extends Container{
    private PX : any; 
    private PY : any;
    
    constructor(){
        super();

        this.PX = 300;
        this.PY = 200;

        const CerrarGraph : Graphics = new Graphics();
        CerrarGraph.lineStyle({color: 0xFFFFFF, width: 1, alpha:1});
        CerrarGraph.beginFill(0xEA61DA,1);
        CerrarGraph.drawCircle(0,0,8);
        CerrarGraph.endFill();
        CerrarGraph.position.set(this.PX,this.PY);
        this.addChild(CerrarGraph);

    }

   
    
}

