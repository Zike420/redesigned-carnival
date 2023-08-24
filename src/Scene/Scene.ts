import { /*AnimatedSprite,*/ Container, /*Texture,*/  /*NineSlicePlane*/ } from "pixi.js";
import { PantallaReiniciar } from "../Containers/PantallaReiniciar";

//import { NaveConFuego } from "./NaveConFuego";

export class Scene extends Container{
	update: any;

    constructor(){
        super();

        //Nine-Slice Plane
        //const fondo = Sprite.from("Espacio");
        /*
        const fondo = new NineSlicePlane(
            Texture.from("Espacio"),35,35,35,35
        );
        fondo.width = 640;
        fondo.height = 480;
        fondo.scale.set(1);
        this.addChild(fondo);
        */

        //Crearcion de contenedores(con clase) de nave con fuego
        /*
        const NaveWithFuego : NaveConFuego = new NaveConFuego();
        NaveWithFuego.scale.set(1);
        this.addChild(NaveWithFuego);

        const FuegoAnimado : AnimatedSprite = new AnimatedSprite(
            [
                Texture.from("Fuego1"),
                Texture.from("Fuego2"),
                Texture.from("Fuego3"),
                Texture.from("Fuego4"),
                Texture.from("Fuego5"),
                Texture.from("Fuego6")
            ], true
        );
        FuegoAnimado.play();
        FuegoAnimado.animationSpeed = 0.2;
        this.addChild(FuegoAnimado);
        */
        
        //Dibujar en pantalla
        /*
        const myGraph : Graphics = new Graphics();
            //640 X 480
        myGraph.lineStyle({color: 0xEA61DA, width: 3, alpha:1});
        myGraph.moveTo(0,0);
        myGraph.lineTo(100,300);
        myGraph.lineTo(300,100);
        myGraph.lineTo(0,0);

        myGraph.clear();

        myGraph.lineStyle({color: 0xEA61DA, width: 3, alpha:1});
        myGraph.beginFill(0xEA61DA,1);
        myGraph.drawCircle(0,0,100);
        myGraph.endFill();
        myGraph.drawCircle(50,50,100);

        myGraph.position.set(640/2,480/2);
        this.addChild(myGraph);
        */

        //texto
        /*
        const myText : Text = new Text("Nave espacial 5", {fontSize: 50, fill: 0xF53228, fontFamily:"Arial"});
        myText.text = "Nave";
        myText.position.x = 480/2;
        myText.angle = 0;
        myText.scale.set(1); 
        this.addChild(myText);
        */
        
        //Pantalla de reiniciar nivel
        const PantallaRetry : PantallaReiniciar = new PantallaReiniciar();
        PantallaRetry.scale.set(1);
        this.addChild(PantallaRetry);

    }
}