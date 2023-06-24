import { Container, Sprite, Graphics, Text, Texture, AnimatedSprite } from "pixi.js";
//import { Button } from "../Button";

export class PantallaReiniciar extends Container{
    //Variables
    private Retry:Sprite;
    private RetryGraph : Graphics = new Graphics();
    private ReiniciarAnimado: AnimatedSprite = new AnimatedSprite([Texture.from("Retry"),],false);
    
    //Constructor
    constructor(){
        super();
        
        //Fondo de la pantalla reiniciar
        const fondo = Sprite.from("Fondo");
        fondo.width = 320;
        fondo.height = 240;
        fondo.position.x = 200;
        fondo.position.y = 70;
        fondo.scale.set(0.3);
        this.addChild(fondo);

        //Texto (Has perdido)
        const myText1 : Text = new Text("¡Has perdido!", {fontSize: 30, fill: 0xF53228, fontFamily:"Arial"});
        myText1.position.x = 230;
        myText1.position.y = 120;
        myText1.angle = 0;
        myText1.scale.set(1); 
        this.addChild(myText1);

        //Texto (volver a empezar)
        const myText2 : Text = new Text("¿Volver a empezar?", {fontSize: 20, fill: 0xF53228, fontFamily:"Arial"});
        myText2.position.x = 230;
        myText2.position.y = 480/2;
        myText2.angle = 0;
        myText2.scale.set(1); 
        this.addChild(myText2);

        //Circulo de reiniciar
        this.RetryGraph.lineStyle({color: 0xFFFFFF, width: 3, alpha:1});
        this.RetryGraph.beginFill(0xEA61DA,1);
        this.RetryGraph.drawCircle(0,0,30);
        this.RetryGraph.endFill();
        this.RetryGraph.position.set(323,323);
        this.addChild(this.RetryGraph);

        //Circulo de cerrar
        const CerrarGraph : Graphics = new Graphics();
        CerrarGraph.lineStyle({color: 0xFFFFFF, width: 1, alpha:1});
        CerrarGraph.beginFill(0xEA61DA,1);
        CerrarGraph.drawCircle(0,0,8);
        CerrarGraph.endFill();
        CerrarGraph.position.set(422,87);
        this.addChild(CerrarGraph);

        //Circulo de configuracion
        const ConfGraph : Graphics = new Graphics();
        ConfGraph.lineStyle({color: 0xFFFFFF, width: 1, alpha:1});
        ConfGraph.beginFill(0xEA61DA,1);
        ConfGraph.drawCircle(0,0,8);
        ConfGraph.endFill();
        ConfGraph.position.set(397,87);
        this.addChild(ConfGraph);

        //Imagen Cerrar
        const Cerrar = Sprite.from("Cerrar");
        Cerrar.width = 320;
        Cerrar.height = 240;
        Cerrar.position.x = 415;
        Cerrar.position.y = 80;
        Cerrar.scale.set(0.3);
        Cerrar.on("pointerdown", this.onPointerDown, this);
        Cerrar.on("pointerup", this.onPointerUp, this);
        Cerrar.interactive = true;
        this.addChild(Cerrar);

        //Imagen Reiniciar
        this.Retry = Sprite.from("Retry");
        this.Retry.width = 640;
        this.Retry.height = 480;
        this.Retry.position.x = 300;
        this.Retry.position.y = 300;
        this.Retry.scale.set(1);
      
        this.Retry.on("mousedown", this.onMouseDown, this);
        this.Retry.on("mouseup", this.onMouseUp, this);
        this.Retry.on("mouseover", this.onMouseOver, this);
        this.Retry.on("mouseout", this.onMouseOut, this);
        this.Retry.interactive = true;
        this.addChild(this.Retry);

        //Imagen Configuracion
        const Config = Sprite.from("Config");
        Config.width = 320;
        Config.height = 240;
        Config.position.x = 390;
        Config.position.y = 80;
        Config.scale.set(0.3);
        Config.on("pointerdown", this.onPointerDown, this);
        Config.on("pointerup", this.onPointerUp, this);
        Config.interactive = true;
        this.addChild(Config);
    }
   
    //Funciones
    private onMouseOver():void {
        console.log("mouse enter", this);
        this.ReiniciarAnimado = new AnimatedSprite(
            [
                Texture.from("Retry"),
                Texture.from("Retry1"),
                Texture.from("Retry2"),
                Texture.from("Retry3"),
                Texture.from("Retry4"),
                Texture.from("Retry5"),
                Texture.from("Retry6"),
                Texture.from("Retry7"),
                Texture.from("Retry8"),
                Texture.from("Retry9"),
                Texture.from("Retry10")
            ], true
        );
        this.ReiniciarAnimado.play();
        this.ReiniciarAnimado.animationSpeed = 0.2;
        this.addChild(this.ReiniciarAnimado);
        
    }
    private onMouseOut():void {
        console.log("mouse exit", this);
        this.ReiniciarAnimado.stop();
        //this.addChild(this.Retry);
    }
    private onMouseDown():void {
        console.log("mouse down", this);
       
        this.addChild(this.Retry);
    }
    private onMouseUp():void {
        console.log("mouse up", this);
       
        this.addChild(this.Retry);
    }
    /*
    private onTouchStart():void {
        console.log("touch start", this);
    }
    private onTouchEnd():void {
        console.log("touch end", this);
    }
    */
    private onPointerDown():void {
        console.log("point down", this);
    }
    private onPointerUp():void {
        console.log("point Up", this);
    }
}

