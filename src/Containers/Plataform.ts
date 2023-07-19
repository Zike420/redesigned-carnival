import { Container, Graphics, Rectangle, Sprite } from "pixi.js";
import { IHitbox } from "./IHitbox";

export class Plataform extends Container implements IHitbox{
    private hitbox: Graphics;
    private Luna : Sprite;
    constructor(){
        super();
        this.Luna = Sprite.from("Luna");
        this.addChild(this.Luna);

        
        this.hitbox = new Graphics();
        this.hitbox.beginFill(0x00FFFF,0.3);
        this.hitbox.drawRect(12,15,50,50);
        this.hitbox.endFill();

        this.addChild(this.hitbox);
    }


    public getHitbox():Rectangle{
        return this.hitbox.getBounds();
    }

}