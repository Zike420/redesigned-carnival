import { Container, Sprite, Texture } from "pixi.js";

export class Button extends Container{
    //Variables
    //private callback:Function;
    private spr:Sprite;
    private def:Texture;
    private down:Texture;
    private over:Texture;

    //Constructor
    constructor(def:Texture, down:Texture, over:Texture,/*callback:Function*/){
        super();

        /////////////
        //this.callback = callback;
        this.def = def;
        this.down = down;
        this.over = over;
        /////////////

        this.spr = Sprite.from(this.def);
        this.addChild(this.spr);

        this.spr.interactive = true;
        this.spr.on("mousedown", this.onMouseDown, this);
        this.spr.on("mouseup", this.onMouseUp, this);
        this.spr.on("mouseover", this.onMouseOver, this);
        this.spr.on("mouseout", this.onMouseOut, this);
    
    }
    
    //Funciones
    private onMouseOver():void {
        this.spr.texture = this.over;
    }
    private onMouseOut():void {
        this.spr.texture = this.def;
    }
    
    private onMouseDown():void {
        this.emit("Click apretado");
        this.spr.texture = this.down;
    }
    private onMouseUp():void {
        this.spr.texture = this.over;
    }
}