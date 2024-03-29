import { AnimatedSprite, Graphics, Rectangle, Texture } from "pixi.js";
import { PhysicsContainer } from "../PhysicsContainer";
import { Keyboard } from "../UI/Keyboard";
import { IHitbox } from "./IHitbox";

export class Player extends PhysicsContainer implements IHitbox{
    private fuegoAnimado: AnimatedSprite;

    private static readonly GRAVITY = 100;
    private static readonly MOVE_SPEED = 150;

    public canJump = true;
    private hitbox:Graphics;


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

        
        const auzZERO = new Graphics();
        auzZERO.beginFill(0xFF00FF);
        auzZERO.drawCircle(0,0,10);
        auzZERO.endFill();

        this.hitbox = new Graphics();
        this.hitbox.beginFill(0xFF00FF,0.3);
        this.hitbox.drawRect(75,0,50,100);
        this.hitbox.endFill();
        this.hitbox.x = -100;
        this.hitbox.y = -100;

        this.addChild(this.fuegoAnimado);
        this.addChild(auzZERO);
        this.addChild(this.hitbox);

        this.acceletation.y = Player.GRAVITY;

        Keyboard.down.on("ArrowUp", this.jump, this);
    }

    public override destroy(options:any){
        super.destroy(options);
        Keyboard.down.off("ArrowUp",this.jump);
    }

    public override update(deltaMS : number){
        super.update(deltaMS/1000);
        this.fuegoAnimado.update(deltaMS / (1000/60));

        if(Keyboard.state.get("ArrowRight")){
            this.speed.x = Player.MOVE_SPEED;
            this.fuegoAnimado.scale.x=1;
        }else if(Keyboard.state.get("ArrowLeft")){
            this.speed.x = -Player.MOVE_SPEED;
            this.fuegoAnimado.scale.x=-1;
        }else{
            this.speed.x = 0;
        }

        /*if(Keyboard.state.get("ArrowUp")){
            this.jump();
        }*/

        /* PARTE IMPORTANTE PARA LA NAVE
        if(Keyboard.state.get("ArrowUp")){
            this.speed.y = -Player.MOVE_SPEED;
        }else if(Keyboard.state.get("ArrowDown")){
            this.speed.y = Player.MOVE_SPEED;
        }else{
            this.speed.y = 0;
        }
        */
    }

    private jump(){
        if(this.canJump){
            this.canJump = false;
            this.speed.y = -200;
        }
    }

    public getHitbox():Rectangle{
        return this.hitbox.getBounds();
    }

}