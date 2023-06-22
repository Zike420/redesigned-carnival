import { Container, Sprite, Graphics, Text } from "pixi.js";

export class PantallaReiniciar extends Container{
    constructor(){
        super();
        const fondo = Sprite.from("Fondo");
        fondo.width = 320;
        fondo.height = 240;
        fondo.position.x = 200;
        fondo.position.y = 70;
        fondo.scale.set(0.3);
        this.addChild(fondo);

        const myText1 : Text = new Text("¡Has perdido!", {fontSize: 30, fill: 0xF53228, fontFamily:"Arial"});
        myText1.position.x = 230;
        myText1.position.y = 120;
        myText1.angle = 0;
        myText1.scale.set(1); 
        this.addChild(myText1);

        const myText2 : Text = new Text("¿Volver a empezar?", {fontSize: 20, fill: 0xF53228, fontFamily:"Arial"});
        myText2.position.x = 230;
        myText2.position.y = 480/2;
        myText2.angle = 0;
        myText2.scale.set(1); 
        this.addChild(myText2);


        const myGraph1 : Graphics = new Graphics();
        //640 X 480

        myGraph1.lineStyle({color: 0xFFFFFF, width: 3, alpha:1});
        myGraph1.beginFill(0xEA61DA,1);
        myGraph1.drawCircle(0,0,30);
        myGraph1.endFill();
        myGraph1.position.set(323,323);
        this.addChild(myGraph1);

        const myGraph2 : Graphics = new Graphics();
        myGraph2.lineStyle({color: 0xFFFFFF, width: 1, alpha:1});
        myGraph2.beginFill(0xEA61DA,1);
        myGraph2.drawCircle(0,0,8);
        myGraph2.endFill();
        myGraph2.position.set(422,87);
        this.addChild(myGraph2);

        const myGraph3 : Graphics = new Graphics();
        myGraph3.lineStyle({color: 0xFFFFFF, width: 1, alpha:1});
        myGraph3.beginFill(0xEA61DA,1);
        myGraph3.drawCircle(0,0,8);
        myGraph3.endFill();
        myGraph3.position.set(397,87);
        this.addChild(myGraph3);

        const Cerrar = Sprite.from("Cerrar");
        Cerrar.width = 320;
        Cerrar.height = 240;
        Cerrar.position.x = 415;
        Cerrar.position.y = 80;
        Cerrar.scale.set(0.3);
        this.addChild(Cerrar);

        const Retry = Sprite.from("Retry");
        Retry.width = 640;
        Retry.height = 480;
        Retry.position.x = 300;
        Retry.position.y = 300;
        Retry.scale.set(1);
        this.addChild(Retry);

        const Config = Sprite.from("Config");
        Config.width = 320;
        Config.height = 240;
        Config.position.x = 390;
        Config.position.y = 80;
        Config.scale.set(0.3);
        this.addChild(Config);
    }
   
}

