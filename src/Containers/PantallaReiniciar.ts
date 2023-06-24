import { Container, Sprite, Graphics, Text, Texture, AnimatedSprite } from "pixi.js";
import { Button } from "../Button";
import { Keyboard } from "../Keyboard";

export class PantallaReiniciar extends Container{
    //Variables
    private RetryGraph : Graphics = new Graphics();
    private Cerrar:Button;
    private ReiniciarAnimado: AnimatedSprite = new AnimatedSprite([ Texture.from("Retry"),
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
                                                                    Texture.from("Retry10")],true);
    private lastKeyPressed:Text;

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

        //Circulo de cerrar
        const CerrarGraph : Graphics = new Graphics();
        CerrarGraph.lineStyle({color: 0xFFFFFF, width: 1, alpha:1});
        CerrarGraph.beginFill(0xEA61DA,1);
        CerrarGraph.drawCircle(0,0,8);
        CerrarGraph.endFill();
        CerrarGraph.position.set(422,87);
        this.addChild(CerrarGraph);

        //Imagen Cerrar
        this.Cerrar = new Button(Texture.from("Cerrar"), Texture.from("Cerrar2"), Texture.from("Cerrar1") /*this.onButtonClick*/);
        this.Cerrar.on("Click apretado", this.onButtonClick, this);
        this.Cerrar.width = 320;
        this.Cerrar.height = 240;
        this.Cerrar.position.x = 415;
        this.Cerrar.position.y = 80;
        this.Cerrar.scale.set(0.3);
        this.addChild(this.Cerrar);

        //Circulo de configuracion
        const ConfGraph : Graphics = new Graphics();
        ConfGraph.lineStyle({color: 0xFFFFFF, width: 1, alpha:1});
        ConfGraph.beginFill(0xEA61DA,1);
        ConfGraph.drawCircle(0,0,8);
        ConfGraph.endFill();
        ConfGraph.position.set(397,87);
        this.addChild(ConfGraph);

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

        //Circulo de reiniciar
        this.RetryGraph.lineStyle({color: 0xFFFFFF, width: 3, alpha:1});
        this.RetryGraph.beginFill(0xEA61DA,1);
        this.RetryGraph.drawCircle(0,0,30);
        this.RetryGraph.endFill();
        this.RetryGraph.position.set(323,323);
        this.addChild(this.RetryGraph);

         //Imagen Reiniciar
         this.ReiniciarAnimado.width = 640;
         this.ReiniciarAnimado.height = 480;
         this.ReiniciarAnimado.position.x = 300;
         this.ReiniciarAnimado.position.y = 300;
         this.ReiniciarAnimado.scale.set(1);
         this.ReiniciarAnimado.on("mousedown", this.onMouseDown, this);
         this.ReiniciarAnimado.on("mouseup", this.onMouseUp, this);
         this.ReiniciarAnimado.on("mouseover", this.onMouseOver, this);
         this.ReiniciarAnimado.on("mouseout", this.onMouseOut, this);
         this.ReiniciarAnimado.interactive = true;
         this.addChild(this.ReiniciarAnimado);

        //Keys y texto
        this.lastKeyPressed = new Text("Esperando...",{fontSize: 20, fill: 0xF53228});
        this.lastKeyPressed.anchor.set(0.5);
        this.lastKeyPressed.x = fondo.position.x + 120;
        this.lastKeyPressed.y = fondo.position.y * 3;
        this.addChild(this.lastKeyPressed);

         document.addEventListener("keydown",this.onKeyDown.bind(this));
         document.addEventListener("keyup",this.onKeyUp.bind(this));

         Keyboard.down.on("KeyA", this.onKeyA, this)
    }
   
    //Funciones

    ////Keys////
    private onKeyDown(e:KeyboardEvent):void{
        console.log("tecla presionada",e.code);
        this.lastKeyPressed.text = e.code;
        if(e.code == "KeyR"){
            console.log("Recargar!");
        }
    }
    private onKeyUp(e:KeyboardEvent):void{
        console.log("tecla soltada",e.code);
        this.lastKeyPressed.text = e.code;
    }

    private onKeyA():void{
        console.log("Aprete la A", this);
    }

    ////Button para cerrar////
    private onButtonClick():void{
        console.log("my button", this/*Keyboard.state.get("KeyR")*/);
    }

    ////Funciones para el reiniciar////
    private onMouseOver():void {
        console.log("mouse enter", this);
        this.ReiniciarAnimado.play();
        this.ReiniciarAnimado.animationSpeed = 0.3;
    }
    private onMouseOut():void {
        console.log("mouse exit", this);
        this.ReiniciarAnimado.stop();
    }
    
    private onMouseDown():void {
        console.log("mouse down", this);
        this.ReiniciarAnimado.stop();
    }
    private onMouseUp():void {
        console.log("mouse up", this);
        this.ReiniciarAnimado.play();
    }
    
    ////Touch y Pointer////
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

