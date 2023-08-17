import {Container, Texture, TilingSprite} from "pixi.js";
import { HEIGHT, WIDTH } from "..";
import { IUpdateable } from "../IUpdateable";
//import { PhysicsContainer } from "../Containers/PhysicsContainer";
import { Player } from "../Containers/Player";
import { Plataform } from "../Containers/Plataform";
import { checkCollision } from "../Containers/IHitbox";
import { sound } from "@pixi/sound";

export class TickerScene extends Container implements IUpdateable{

    private playerFuego : Player;
    private world : Container;
    private Plataformas:Plataform[];
    private FondoNoche: TilingSprite;

    constructor(){
        super();
        this.world = new Container();

        this.FondoNoche = new TilingSprite(Texture.from("FondoNoche"),WIDTH, HEIGHT);
        this.addChild(this.FondoNoche);

        sound.play("DarkCat");
        

        this.Plataformas = [];

        let Plataforma = new Plataform();
        Plataforma.position.set(50, 300);
        this.world.addChild(Plataforma);
        this.Plataformas.push(Plataforma);

        Plataforma = new Plataform();
        Plataforma.position.set(400, 300);
        this.world.addChild(Plataforma);
        this.Plataformas.push(Plataforma);
        
        Plataforma = new Plataform();
        Plataforma.position.set(900, 250);
        this.world.addChild(Plataforma);
        this.Plataformas.push(Plataforma);
        
        Plataforma = new Plataform();
        Plataforma.position.set(1300, 100);
        this.world.addChild(Plataforma);
        this.Plataformas.push(Plataforma);
        
        Plataforma = new Plataform();
        Plataforma.position.set(1500, 400);
        this.world.addChild(Plataforma);
        this.Plataformas.push(Plataforma);

        this.playerFuego = new Player();
        this.world.addChild(this.playerFuego);

        this.addChild(this.world);
    }

    public update(deltaTime: number, _deltaFrame: number): void {
        //update de la animacion
        this.playerFuego.update(deltaTime);

        for (let plataforma of this.Plataformas) {
            //console.log(checkCollision(this.playerFuego, plataforma));
            const overlap = checkCollision(this.playerFuego, plataforma);
            if(overlap != null){
                if(overlap.width < overlap.height){
                    if(this.playerFuego.x > plataforma.x){
                        this.playerFuego.x += overlap.width;
                    }else{ 
                        if(this.playerFuego.x < plataforma.x){
                            this.playerFuego.x -= overlap.width;
                        }
                    }
                }else{
                    if(this.playerFuego.y > plataforma.y){
                        this.playerFuego.y -= overlap.height;
                        this.playerFuego.speed.y = 0;
                        this.playerFuego.canJump = true;
                    }else{ 
                        if(this.playerFuego.y < plataforma.y){
                            this.playerFuego.y += overlap.height;
                        }
                    }
                }
            }
        }
            
        //Camara
        this.world.x = -this.playerFuego.x * this.worldTransform.a + WIDTH/2;
        this.FondoNoche.tilePosition.x = this.world.x * 0.2;

        //delta time en segundos
        //const dt = deltaTime / 1000;
       // this.physFuego.update(dt);
        
        //limite horizontal
        /* ACORDARSE DE SACAR <<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<<---------
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
        */

        //limite vertical
        if(this.playerFuego.y > HEIGHT){
            this.playerFuego.y = HEIGHT;
            this.playerFuego.speed.y = 0;
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