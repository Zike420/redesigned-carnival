import { Container, /*Graphics, Sprite, Texture*/ } from "pixi.js";

export class Button extends Container{
    /*
    //private def:Texture;
    private down:Texture;
    private over:Texture;
    //private callback:Function;

    private spr:Sprite;
    private myGraph4: Graphics = new Graphics();
    private myGraph5: Graphics = new Graphics();

    constructor(def:Texture, callback:Function){
        super();

        //this.def = def;
        
        this.down = down;
        this.over = over;
        
        //this.callback = callback;

        this.spr = Sprite.from(def);
        this.spr.anchor.set(0.5);
        this.addChild(this.spr);

        this.spr.interactive = true;
        this.spr.on("mousedown", this.onMouseDown, this);
        this.spr.on("mouseup", this.onMouseUp, this);
        this.spr.on("mouseover", this.onMouseOver, this);
        this.spr.on("mouseout", this.onMouseOut, this);
    
    }
    private onMouseOver():void {
        console.log("mouse enter", this);
        this.myGraph4.lineStyle({color: 0xFFFFFF, width: 3, alpha:1});
        this.myGraph4.beginFill(0x56F728,1);
        this.myGraph4.drawCircle(0,0,30);
        this.myGraph4.endFill();
        this.myGraph4.position.set(323,323);
        this.addChild(this.myGraph4);
        this.addChild(this.spr);
    }
    private onMouseOut():void {
        console.log("mouse exit", this);
        this.myGraph4.clear();
        this.addChild(this.spr);
    }
    private onMouseDown():void {
        console.log("mouse down", this);
        this.myGraph5.lineStyle({color: 0xFFFFFF, width: 3, alpha:1});
        this.myGraph5.beginFill(0x8ED48C,1);
        this.myGraph5.drawCircle(0,0,30);
        this.myGraph5.endFill();
        this.myGraph5.position.set(323,323);
        this.addChild(this.myGraph5);
        this.addChild(this.spr);
    }
    private onMouseUp():void {
        console.log("mouse up", this);
        this.myGraph5.clear();
        this.addChild(this.spr);
    }
    
    private onPointerDown():void {
        console.log("point down", this);
    }
    private onPointerUp():void {
        console.log("point Up", this);
    }
    */  
}